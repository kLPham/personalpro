import React, { Component } from 'react';

export default class ReturnPolicy extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <h3>Return Policy</h3>
        <p>
          Our hope is that you are completely satisfied with your
          Belle-Brial-Couture purchase. If you aren’t, we are happy to accept
          your return or exchange; but please keep in mind... Merchandise must
          be returned within 30 days of delivery. Bridal gowns cannot be
          returned in stores. Merchandise must not be worn, altered, or washed,
          and must be free of stains, pet hair, floor debris, and pin marks.
          Merchandise must have all tags attached and be in its original
          packaging. Gowns not returned in original condition may be refused or
          subject to a $75 restocking fee. Most returns will process in
          approximately 2-3 weeks.
        </p>
        <hr />
        <h3>SALE RETURNS</h3>
        <p>
          Sale items may be returned within 30 days for a credit to your
          original method of payment. Follow the return directions on the
          packing list included with your order. Once your return is processed,
          you will receive an email alerting you that your return is complete.
        </p>
        <hr />
        <h3>EXCHANGES</h3>
        <p>
          You may exchange items within 30 days of your order. Before sending,
          please fill out the exchange form included on your packing slip,
          enclose it in your package, and affix the pre-addressed label to front
          of your shipment. Shipping charges do apply to exchanges, and are your
          responsibility to pay. To return or exchange your gown, a UPS
          pre-addressed label is included in your shipment. Please note, gowns
          cannot be returned in stores. To return or exchange all other apparel,
          accessories, and décor, a USPS pre-addressed SmartLabel is included in
          your shipment. Please allow approximately 2–3 weeks for processing.
          Additional processing delays may occur. You will receive an email
          notification when your return has been processed (be sure to check
          your spam folder).
        </p>
        <hr />
        <h3>REFUND PROCESS</h3>
        <p>
          A refund will be credited back to your original method of payment, and
          will post approximately two days after the date of processing. Most
          returns will process in 2-3 weeks. It may take up to two billing
          cycles for the credit to appear on your monthly credit card statement.
        </p>
        <hr />
      </div>
    );
  }
}
