import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';


// import STRIPE_PUBLISHABLE from '../../constants/stripe';
import PAYMENT_SERVER_URL from '../../react-express-stripe/frontend/constants/server';
// console.log(STRIPE_PUBLISHABLE, PAYMENT_SERVER_URL)
const CURRENCY = 'USD';

const fromDollarToCent = amount => amount * 100;

const successPayment = data => {
  console.log(data)
  alert('Thank You for shopping with us');
 
};

const errorPayment = data => {
  console.log(data)
  alert('Payment Error');
};

const onToken = (amount, description) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromDollarToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment);

const CheckoutWStripe = ({ name, description, amount }) =>
  <StripeCheckout 
  name={'RoyalCouture'} 
  description={'Pay for Your Gowns Here'} 

  panelLabel="gowns purchased:" 
  amount={fromDollarToCent(amount)} 
  token={onToken(amount, description)}
  currency={CURRENCY} 
  stripeKey={`pk_test_SgQ6st52BRImIvvg2VhkhE5H`} 
  />;


export default CheckoutWStripe;

{/* <img alt="crown" src={Logo2}></img> */}

