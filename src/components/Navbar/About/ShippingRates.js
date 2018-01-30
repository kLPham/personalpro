import React, { Component } from 'react';

export default class ShippingRates extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="container">
        Shipping Rates
        <h3>WILL YOU SHIP MY DRESS OUT OF STATE FOR ME?</h3>
        <p>
          We can ship a dress within the US and participating countries outside
          the United States. Shipping fees apply.
        </p>
        <hr />
        <h3>HOW MUCH DOES IT COST TO SHIP MY DRESS?</h3>
        <p>
          The cost to ship your dress depends on your address. The fee typically
          starts at $85 and up. To inquire about shipping costs please call +1
          (682) 521-9297.
        </p>
        <hr />
        <h3>WHO IS YOUR SHIPPING PROVIDER?</h3>
        <p>
          Fedex, but occasionally we will ship DHL for international orders.
        </p>
        <hr />
        <h3>HOW WILL I KNOW WHEN MY DRESS HAS BEEN SHIPPED OUT?</h3>
        <p>
          You will receive an email from the shipping provider with a tracking
          number.
        </p>
        <hr />
        <h3>DO YOU PROVIDE TRACKING NUMBER?</h3>
        <p>Fed-ex will email you your tracking number.</p>
        <hr />
      </div>
    );
  }
}
