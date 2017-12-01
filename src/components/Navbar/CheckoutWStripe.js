import React, { Component } from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import { Link, withRouter } from 'react-router-dom';


// import STRIPE_PUBLISHABLE from '../../constants/stripe';
import PAYMENT_SERVER_URL from '../../react-express-stripe/frontend/constants/server';
// console.log(STRIPE_PUBLISHABLE, PAYMENT_SERVER_URL)
const CURRENCY = 'USD';

const fromDollarToCent = amount => amount * 100;



class CheckoutWStripe extends Component {
  constructor() {
    super() 

    this.successPayment = this.successPayment.bind(this)
    this.errorPayment = this.errorPayment.bind(this)
    this.onToken = this.onToken.bind(this)
  }

   successPayment = data => {
    console.log(data)
    // alert('Thank You for shopping with us');
    this.props.history.push('/PaymentSuccess')
  };
  
   errorPayment = data => {
    console.log(data)
    alert('Payment Error');
  };
  
   onToken = (amount, description) => token =>
    axios.post(PAYMENT_SERVER_URL,
      {
        description,
        source: token.id,
        currency: CURRENCY,
        amount: fromDollarToCent(amount)
      })
      .then(this.successPayment)
      .catch(this.errorPayment);



  render () {

    const { name, description, amount } = this.props


    return (
      <StripeCheckout 
      name={'RoyalCouture'} 
      description={'Pay for Your Gowns Here'} 
    
      panelLabel="Submit Payment:" 
      amount={fromDollarToCent(amount)} 
      token={this.onToken(amount, description)}
      currency={CURRENCY} 
      stripeKey={`pk_test_SgQ6st52BRImIvvg2VhkhE5H`} 
      />
    )


  }

  
} 



export default withRouter(CheckoutWStripe);

{/* <img alt="crown" src={Logo2}></img> */}

