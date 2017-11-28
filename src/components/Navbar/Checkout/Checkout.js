import React, { Component } from "react";
import axios from "axios";
import './Checkout.css';
import checkout from './checkout.jpeg';

export default class CheckOut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkout: []
    };
  }
  
  //checkout endpoint
  componentDidMount(){
    axios.get('/api/checkout').then(response =>{
      this.setState({checkout: response.data });
    })
}





  render(){
    return (
      <div className="checkout">
        <h4 className="welcome">Welcome to Our Checkout Page</h4>
        <div className="container">
            <h2>CHECK OUT NOW:</h2>
            <button>PROCEED TO CHECKOUT</button>
            <button>Check Out With PayPal</button>
            <div className="Thanks"><img src={checkout}></img></div>
            
        </div>
      </div>
    );
  }
}

