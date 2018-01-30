import React, { Component } from 'react';
import './Contact.css';

export default class Contact extends Component {
  render() {
    const s = <hr />;
    return (
      <div>
        <h1 className="title">Contact Us</h1>
        <div className="contactContainer">
          <h3>Please contact us if you have any questions:</h3>
          <div>
            <span>Address: 4227 Boyer Pl Dallas, TX 75219</span>
            <br /> <br />
            <span>Phone: 682-521-9297</span>
            <br /> <br />
            <span>Monday - 10:30 until 6:00</span>
            <br /> <br />
            <span>Tuesday - 10:30 until 6:00</span>
            <br /> <br />
            <span>Wednesday - 12:00 until 6:00</span>
            <br /> <br />
            <span>Thursday - 12:00 until 8:00</span>
            <br /> <br />
            <span>Friday - 10:30 until 6:00</span>
            <br /> <br />
            <span>Saturday - 10:00 until 5:00</span>
            <br /> <br />
          </div>
        </div>
      </div>
    );
  }
}
