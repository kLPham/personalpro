import React, { Component } from 'react';
import './About.css';
import { Link } from 'react-router-dom';

// import SizeChart from './SizeChart';
// import OrderNPaymentInfo from './OrderNPaymentInfo';

export default class About extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="aboutTotal">
          <h1 className="title">About Us</h1>
          <p className="aboutC">
            {' '}
            Belle-Bridal-Couture first began in 2016 out of a 2,000 square foot
            space. From this small office we designed our very first wedding
            dress, took orders and delivered a superior garment to buyers across
            the country. Driven by a passion for design and a commitment to
            service, we faced many obstacles in those early days, yet continued
            to expand.
            <hr />
            <p2>
              If life is measured in moments, then this is going to be one of
              the most important moments of all. Our stunning designs have made
              it one of the world’s leading wedding dress and evening gown
              brands. Our designer Madeline Gardner’s incredible visionary taste
              brings you a variety of dresses you will be gushing over. From the
              quality of our high-end fabrics, to our intricate beading and
              delicate lacework, to the form fitting silhouettes, each and every
              one of our dresses has been made to bridal perfection.
            </p2>
          </p>
          <div className="aboutContainer">
            <div className="aboutInfo">
              <Link className="alink" to="/About/OrderNPaymentInfo">
                <span>Order & Payment</span>
              </Link>
              <hr />
              <br />
              <Link className="alink" to="/About/Shipping">
                <span>Shipping</span>
              </Link>
              <hr />
              <br />
              <Link className="alink" to="/About/ReturnPolicy">
                <span>Return Policy</span>
              </Link>
              <hr />
              <br />
              <Link className="alink" to="/About/FAQ">
                <span>Help & FAQ</span>
              </Link>
              <hr />
              <br />
              <Link className="alink" to="/About/CustomerService">
                <span>Customer Service</span>
              </Link>
              <hr />
              <br />
              <Link className="alink" to="/About/SizeChart">
                <span className="sizeChart">Size Chart</span>
              </Link>
              <hr />
              <br />
            </div>
          </div>
          <br />
          {/* <div className="container">
         
          <br />
          <hr />
          <br />
          <p2>
            We want to make sure every bride can find what they’re looking for.
            Start with our Bridal collection if you are hoping for a classic and
            elegant look. Moving on to our Blu collection, you will find a host
            of contemporary looks that are up to date with all of the latest
            bridal trends. Our Julietta collection will make all full figured
            brides’ dreams come true with body hugging styles that accentuate
            and flatter every curve. For our free spirited girls, check out our
            Voyagé collection, with its ethereal and whimsical confections. For
            the girls at your side, our bridesmaids dresses will ensure that
            they feel and look good on your special day. With so many colors and
            styles to choose from, there’s no doubt you’ll make them and you
            happy.
          </p2>
          <br />
          <hr />
          <br />

          <p2>
            Friendly, low pressure boutique with gorgeous gowns! Embro-Bridal
            Couture has been serving Dallas/Ft Worth for over 2 years. We are
            family owned and find such joy in helping brides find the gown of
            their dreams. We offer a vast array of gowns from many amazing
            designers, and over 300 samples in store. Our gowns range from $800-
            $3000. We also have a Sample Room of gowns to purchase off the rack
            at a variety of price points!
          </p2>

          <p2>
            We are a full service boutique, offering bridal gowns and all
            accessories needed to complete your bridal vision and we offer an
            in-house seamstress for bridal gown alterations for a one- stop shop
            to perfect your bridal look.
          </p2>
        </div> */}
          {this.props.children}
        </div>
      </div>
    );
  }
}
