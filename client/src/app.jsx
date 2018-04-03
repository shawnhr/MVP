import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import List from "./components/List.jsx";
import Search from "./components/Search.jsx";
//import drop from './database-mongo/index.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.get = this.get.bind(this);
  }

  get() {
    $.ajax({
      url: "/items",
      type: "GET",
      success: data => {
        console.log("get request success: ", data),
          //this.state.items = [];

          this.setState({
            //items: []
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

  search(term) {
    console.log("term:", term);

    $.ajax({
      url: "/items",
      type: "POST",
      data: { term },
      success: data => {
        console.log("post request success: ", data);
        this.get();
      },
      error: err => {
        console.log("post request fail: ", err);
      }
    });
  }

  render() {
    return (
      <div>
        
        <Search onSearch={this.search.bind(this)} />
        <List items={this.state.items} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
