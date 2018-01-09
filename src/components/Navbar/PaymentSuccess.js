import React, { Component } from 'react';
import './Navbar.css';
import kImage from './kImage.jpg';
import Message from './Message.png';

export default class PaymentSuccess extends Component {
  render() {
    return (
      <div className="SuccessContainer">
        <h4 className="Sh">Thank You For Shopping With us</h4>
        <img className="prettyGirl" alt="prettyGirlInWhiteDress" src={kImage} />
        <img className="bubble" src={Message} />
      </div>
    );
  }
}
