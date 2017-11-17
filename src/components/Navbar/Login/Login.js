import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin() {
    window.location.href = "http://localhost:3001/api/login";
  }
  render() {
    return (
      <div className="login">
        <button onClick={this.handleLogin}>Login/Register</button>
      </div>
    );
  }
}
