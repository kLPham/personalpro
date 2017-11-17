import React, { Component } from "react";
import axios from "axios";

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonchange = this.handleButtonchange.bind(this);
  }
 
  handleInputChange(val){
    this.setState({ searchInput: val })
  }

  handleButtonchange(event){
    window.location.href = "http://localhost:3002/Products";
  }
  render(){
    return (
      <div className="inputSearch">
        <input 
          value={this.state.searchInput}
          onChange={(e)=> {this.handleInputChange(e.target.value); }}
          placeholder="Search Products" ></input>
        <button onClick={this.handleButtonchange}>Search</button>
      </div>
    );
  }
}

