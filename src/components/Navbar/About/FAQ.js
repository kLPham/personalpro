import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class FAQ extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <h2>Have a question for us? We would love to answer it. </h2>
        <hr />
        <hr />
        <h3>WHAT SIZES ARE AVAILABLE?</h3>
        <p>
          Bridal gowns are available in sizes 2 - 32. Womens Plus-Sized Gowns
          are available in sizes 16W - 32W. Bridesmaids dresses are available in
          sizes 2 - 28 (View bridesmaids swatches) <br />
          <Link className="alink" to="/About/SizeChart">
            Please click here to view our size chart.
          </Link>
        </p>
        <hr />
        <h3>WHAT IS THE DELIVERY TIME FOR AN ORDER?</h3>
        <p>
          Our standard delivery time for bridals gowns are 12-20 weeks and for
          bridesmaids is 8-12 weeks. For custom orders, please add 2-4 weeks to
          our standard delivery. Please note that delivery times may vary
          depending on the style. Sometimes the order may be in stock, already
          coming in, or it may be put on a rush.
        </p>
        <hr />

        <h3>HOW DO I RETURN MY GOWN?</h3>
        <p>Please see the link below for more information.</p>
        <Link className="alink" to="/About/ReturnPolicy">
          click here{' '}
        </Link>
        <hr />

        <h3>
          HELP! I'M GETTING MARRIED LESS THAN 4 MONTHS-IS IT TOO LATE TO GET A
          GOWN FROM BELLE-BRIDAL-COUTURE?
        </h3>
        <p>
          No, it’s not too late, but every second counts! Your options include
          buying one of our PRE-OWNED gown collection or working with a
          consultant to determine which designers can meet your time frame for a
          “special order” gown, which could include an additional rush charge.
        </p>
        <hr />

        <h3>WHAT IS RUSH ORDER?</h3>
        <p>
          If your wedding date is sooner than the time we typically need to have
          a special-order designer gown made, we’ll need to consult with the
          designer and place a “rush” order, for an additional fee. In this
          instance, your dress may arrive 1-3 weeks before your wedding and
          details will be outlined in your contract.
        </p>
        <hr />

        <h3>HOW MUCH WILL A RUSH ORDER COST?</h3>
        <p>A rush fee varies by designer, style and wedding date.</p>
        <hr />

        <h3>WHAT ELSE DO I NEED TO KNOW ABOUT RUSH ORDERS?</h3>
        <p>
          We advise having a flexible schedule to accommodate rush alterations.
        </p>
      </div>
    );
  }
}
