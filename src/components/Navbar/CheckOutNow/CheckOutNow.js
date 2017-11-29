// import React, { Component } from "react";
// import axios from "axios";
// import './CheckOutNow.css';
// import CheckOutImg from './CheckOutImg.jpeg';
// // import Checkout from '../../../Checkout';
// import CheckoutWStripe from './CheckoutWStripe';


// import { connect } from 'react-redux';
// import { handleCheckOut, handleCartRemove } from '../../../ducks/reducer';

//  class CheckOutNow extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       displayFinalProducts: []
//     };
//   }
  

//  //GET all PRODUCTS FROM CART: :)
//  componentDidMount() {
//     axios.get('/api/cart').then(response => {
//       this.setState({  displayFinalProducts: response.data })
//     console.log("YAY it works",response);
//   });
// }


// render(){
//     // const allProducts = this.state.displayFinalProducts.map(product =>{
//       return (
//         this.state.displayFinalProducts
//         ?
//     <div key={product} className="TheWholeCheckoutPage">
//       <h4 className="welcome">Welcome to Our Checkout Page</h4>
//       <div className="containerOfCheckout">
//           {/* <h2>CHECK OUT NOW:</h2> */}
//           <div className="my_cart">
//           <p key={Math.random()}></p>

//                 <div className="cart_container">
//                     <img className="cart_img"alt="image_url"src={product.image_url}></img>
//                     <div >
//                       <p>BRAND: {product.brand}</p>
//                       <p>SIZE: { product.size }</p>
//                       <p>COLOR: { product.color }</p>
//                       <p>QTY: { product.quantity }</p>
//                       <p>PRICE: ${ product.price }</p>
//                     </div>
//                 </div>
           
//                 <div className="checkoutWithCard">
//                     <h3>PAYMENT</h3>
//                     {/* <Checkout
//                         name={'The Road to an Empty Wallet'}
//                         description={'Pay for Your Gowns Here'}
//                         amount={1}
//                     /> */}
//                     {/* <CheckoutWStripe /> */}
//                 </div>
//                 {/* <div className="Thanks"><img src={CheckOutImg}></img></div> */}
//           </div>
//     </div>
//     </div>
      
                  
                
    
//   // );

//   // return(
//   //     <div>
//   //             <div> { allProducts } </div>
             
//   //     </div>
//   );


// }
// }     


// //CONNECT allow us to connect all the redux & their action to this component
// //do the same for every component you want to add the action of redux in.
// function mapStateToProps(state) { //redux is gonna call this function whenever the state in the store changes.
//   return state
// }

// //do the same for every component but put: export default connect(mapStateToProps, {}) (Cart);

// export default connect(mapStateToProps, { handleCheckOut, handleCartRemove } )(CheckOutNow);



















































// import React, { Component } from "react";
// import axios from "axios";
// import StripeCheckout from "react-stripe-checkout";
// import { withRouter } from "react-router-dom";

// // import Logo2 from './Logo2.jpeg';



// const CURRENCY = "USD";

// const fromDollarToCent = amount => amount * 100;

// class CheckoutWStripe extends Component {
//   constructor(props) {
//     super(props);
//     this.successPayment = this.successPayment.bind(this);
//     this.errorPayment = this.errorPayment.bind(this);
//     this.onToken = this.onToken.bind(this);
//   }

//   successPayment(data) {
//     this.props.history.push("/");
//     alert('Payment Successful')
//   }

//   errorPayment(data) {
//     alert("Payment Error");
//   }

//   onToken(amount, description) {
//     return token =>
//       axios
//         .post("/api/charge", {
//           description,
//           source: token.id,
//           currency: CURRENCY,
//           amount: fromDollarToCent(amount)
//         })
//         .then(this.successPayment)
//         .catch(this.errorPayment);
//   }

//   render() {
//     const { name, amount, description } = this.props;
//     return 
//         <StripeCheckout 
//             name={'RoyalCouture'} 
//             description={'Pay for Your Gowns Here'} 
//             image={'Logo2'} 
//             panelLabel="gowns purchased:" 
//             amount={fromDollarToCent(amount)} 
//             token={this.onToken(amount,description )} 
//             currency={CURRENCY} 
//             stripeKey={`pk_test_SgQ6st52BRImIvvg2VhkhE5H`} 
            
//         />;
//   }
// }

// export default withRouter(CheckoutWStripe);

// {/* <img alt="crown" src={Logo2}></img> */}

