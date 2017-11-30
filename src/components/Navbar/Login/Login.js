import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import '../Navbar.css';

export default class Login extends Component {
  constructor(props) {
      super(props);


      //SET INITIAL STATE:
      this.state= { 
        userid: null 
      }

      this.handleLogin = this.handleLogin.bind(this);
      this.handleLogout = this.handleLogout.bind(this);

  }

 


  handleLogin(val) {
    window.location.href = "http://localhost:3001/api/login";
  }

  handleLogout(){
    window.location.href = "http://localhost:3001/api/logout";
  }

  componentDidMount() {
    axios.get('/api/me').then(response => { 
      console.log(response)
      if (response.data) this.setState({ userid: response.data })
      else this.setState({userid: null});
    });
  }    


  render() {
    return (
        <div>
              <div>
                <button onClick={this.state.userid ? this.handleLogout : this.handleLogin} className="button1">
                {this.state.userid ? 'Logout': 'Login/Register'}
                </button>
                {/* <button onClick={this.handleLogout} className="button1">Logout</button> */}
              </div>
        </div>
    );
  }
}



























        {/* <div className='Modal'>
              <Logo />
              <form onSubmit= { this.props.onSubmit }>
                <Input type='text' name='username' placeholder='username' />
                <Input type='password' name='password' placeholder='password' />
                <button> Sign In</button>
              </form>
              <div className='social-signin'>
                <button className="fb" onClick={ this.props.onClick }><i className="fa fa-facebook" aria-hidden="true"></i></button>
                <button className="tw" onClick={ this.props.onClick }><i className="fa fa-twitter" aria-hidden="true"></i></button>
              </div>
                <a href='#'>Lost your password ?</a>
           </div> */}
