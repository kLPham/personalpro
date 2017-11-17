import React, { Component } from "react";
// import axios from "axios";
import './Checkout.css';

export default class CheckOut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };

  }
  
  render(){
    return (
      <div className="checkout">
        <div className="container">
            <h2>CHECK OUT NOW:</h2>
            <button>CHECKOUT NOW</button>
            <button>Check Out With PayPal</button>
        </div>
      </div>
    );
  }
}

