import React, { Component } from 'react';

export default class OrderNPaymentInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <h3>ONLINE ORDERS:</h3>
        <p2>
          We ask that you review your order carefully prior to submission, as it
          cannot be modified once submitted.
        </p2>
        <hr />
        <h3>ORDER CONFIRMATION:</h3>
        <p2>
          Upon completion of your order, we will send a confirmation to the
          email address you provided during checkout.
        </p2>
        <hr />
        <h3>ORDER STATUS:</h3>
        <p2>
          You can check the status of your order at any time by logging into
          your account and selecting ORDER HISTORY.
        </p2>
        <hr />
        <h3> + HOW DO I PAY FOR MY DRESS?</h3>
        <p2>
          We accept American Express, Discover, MasterCard, and Visa, as well as
          cash and personal checks. (Personal checks are only accepted for
          deposit, not final payment.) If you are ordering a special-order
          dress, we require a 60% deposit at the time you order your dress. When
          the dress arrives at Kleinfeld and passes our quality control check,
          we’ll contact you to let you know and to schedule a fitting. At that
          point, we require payment of the remaining 40% balance.If you are
          buying a sample gown off the rack, we require 100% payment and you
          must take the dress home with you that day. If you’ve requested that
          we ship your gown out of state, your balance must be paid for in full
          before it can be shipped.
        </p2>
        <h3>SALES TAX:</h3>
        <p2>
          We are required to assess taxes on any items shipped from a state.
        </p2>
        <hr />

        <h3>TELEPHONE ORDERS:</h3>
        <p2>
          Your personal information is always safe with us online. However, if
          you are still not comfortable making a purchase on our website, you
          may contact us via phone at 1.682.521.9297 from 7 a.m. - midnight EST.
        </p2>
        <hr />
      </div>
    );
  }
}
