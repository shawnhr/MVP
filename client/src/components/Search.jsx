import React from "react";

//var remove = require('./~/database-mongo/index.js')
//var remove = require('/hrsf85-mvp-starter-master/database-mongo');
//import remove from (__dirname + "/../database-mongo")
// <input value={this.state.term.specialty} onChange={this.onChange.bind(this, 'specialty')} placeholder="Required"/>

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: {
        specialty: "",
        address: "",
        name: "",
        sort: ""
      }
    };
  }

  onChange(name, e) {
    const term = this.state.term;
    term[name] = e.target.value;
    console.log(term);
    this.setState({
      term: term
    });
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  clear() {
    db.remove();
  }
  render() {
    return (
      <div>
        <h1>Doctor Search</h1>
        Specialty:
        <select
          value={this.state.term.specialty}
          onChange={this.onChange.bind(this, "specialty")}
        >
          <option value="">--------</option>
          <option value="Cardiology">Cardiology</option>
          <option value="dermatologist">Dermatologist</option>
          <option value="emergency-medicine-doctor">Emergency-Medicine-Doctor</option>
          <option value="family">Family Medicine</option>
          <option value="Gastroenterology">Gastroenterology</option>
          <option value="internist">Internal Medicine</option>
          <option value="obstetrics">Obstetrics-Gynecologist</option>
          <option value="orthopedic">Orthopedic-surgeon</option>
          <option value="pediatrician">Pediatrician</option>
          <option value="Psychiatry">Psychiatry</option>
          <option value="Pulmonology">Pulmonology</option>
          <option value="Surgery">Surgery</option>
        </select>{" "}
        City:{" "}
        <input
          value={this.state.term.address}
          onChange={this.onChange.bind(this, "address")}
          placeholder="(ex) NY-Bronx"
        />{" "}
        Name:{" "}
        <input
          value={this.state.term.name}
          onChange={this.onChange.bind(this, "name")}
          placeholder="optional (ex) John Doh "
        />{" "}
        SortBy:
        <select
          value={this.state.term.sort}
          onChange={this.onChange.bind(this, "sort")}
        >
          <option value="">--------</option>
          <option value="full-name-asc">Full-Name-Asc</option>
          <option value="full-name-desc">Full-Name-Desc</option>
          <option value="first-name-asc">First-Name-Asc</option>
          <option value="first-name-desc">First-Name-Desc</option>
          <option value="last-name-asc">Last-Name-Asc</option>
          <option value="last-name-desc">Last-Name-Desc</option>
          <option value="best-match-asc">Best-Match-Asc</option>
          <option value="best-match-desc">Best-Match-Desc</option>
          <option value="rating-asc">Rating-Asc</option>
          <option value="rating-desc">Rating-Desc</option>
          <option value="distance-asc">Distance-Asc</option>
          <option value="distance-desc">Distance-Desc</option>
        </select>{" "}
        <button onClick={this.search.bind(this)}> Search </button>{" "}
        <button onClick={this.clear.bind(this)}> Clear </button>
      </div>
    );
  }
}
export default Search;
