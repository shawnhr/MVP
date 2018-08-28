t
import $ from "jquery";
import List from "./components/List.jsx";
import Search from "./components/Search.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      key: [
        {
          specialty: "",
          address: "",
          name: ""
        }
      ]
    };
    this.get = this.get.bind(this);
    this.key = this.key.bind(this);
  }

  get() {
    $.ajax({
      url: "/items",
      type: "GET",
      success: data => {
        console.log("get request success: ", data),
          this.setState({
            items: data
          });
      },
      error: err => {
        console.log("err", err);
      }
    });
  }
  componentDidMount() {
    this.get();
  }

  key(term) {
    var data = {
      specialty: term.specialty,
      address: term.address,
      name: term.name
    };

    this.setState({
      key: this.state.key.concat(data)
    });
  }

  search(term) {
    //this.key(term);
    console.log("key", this.state.key);
    //console.log("items", this.state.items)
    //if(this.state.key.length)
    for (var i in this.state.key) {
      if (
        this.state.key[i].specialty === term.specialty &&
        this.state.key[i].address === term.address &&
        this.state.key[i].name === term.name
      ) {
        console.log("term in search===========:", term.specialty);
        console.log("key in search===========:", this.state.key[i].specialty);
        //this.get();
      } else {
        // else ( this.state.key[i].specialty !== term.specialty) {
        console.log("term in not equal===========:", term.specialty);
        console.log(
          "key in not equal===========:",
          this.state.key[i].specialty
        );

        $.ajax({
          url: "/items",
          type: "POST",
          data: { term },
          success: data => {
            this.get();
          },
          error: err => {
            console.log("post request fail: ", err);
          }
        });

        // console.log('hi')
        //break;
      }
      this.key(term);
    }
  }

  remove() {
    $.ajax({
      url: "/delete",
      type: "POST",
      success: data => {
        console.log(data, "from DB");
        this.componentDidMount();
      }
    });

    this.setState({
      key: [
        {
          specialty: "",
          address: "",
          name: ""
        }
      ]
    });
  }

  render() {
    return (
      <div>
        <Search
          onSearch={this.search.bind(this)}
          remove={this.remove.bind(this)}
        />
        <List items={this.state.items} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
