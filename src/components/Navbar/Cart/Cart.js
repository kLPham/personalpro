import React, { Component } from "react";
import axios from "axios";
import './Cart.css';

import CheckoutWStripe from '../CheckoutWStripe';

import Logo2 from '../Logo2.jpeg';
import Trash from 'react-icons/lib/fa/trash';



export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: []
      // cartTotal: 0
    };
 
  //BIND FUNCTIONS HERE:
  this.backToProductPage = this.backToProductPage.bind(this);
  this.handleCartRemove  = this.handleCartRemove.bind(this);
  this.handleAddToCheckout = this.handleAddToCheckout.bind(this);
  }


  //redirect to the product page :)
  backToProductPage(event){
    window.location.href = "http://localhost:3000/Products";
  }

  //Lifecyle methods
  componentWillReceiveProps(nextprops){
  this.setState({ cart:nextprops.cart });
}

  //create a GET endpoint in api/cart ;)
 componentDidMount(){
      axios.get('/api/cart').then(response =>{
        this.setState({cart: response.data });
      })
    }


   //GET TOTAL PRICE FROM SERVER:
 componentWillMount(){
      axios.get(`/cart/total/${this.props.userid}`).then(response=> {
        this.setState({ total: response.data[0].sum });
      });
    }


  //REMOVE FROM CART FRONT_END: :)
handleCartRemove(product){
    axios
         .delete(`/api/cart/${product.id}`)
         .then((response) => this.setState({cart: response.data}))
         .catch(console.log);
         alert("Congratulation! You now have more than a dollar in your bank account")
}
  

  //POST ON checkout PAGE
handleAddToCheckout(item){ //:)
    axios
         .post('/api/CheckoutWStripe',{item: item})
         .then((response) => this.setState({checkout: response.data}))
         .catch(console.log)
         window.location.href = "http://localhost:3000/CheckoutWStripe";
         alert("let's go pay!")
}

  
  
render(){
    // const theTotal = total += priceTotal;
    let displayInCart =
      this.state.cart.length > 0 ? (
      this.state.cart.map(product => {
      return (
                    <div className="cart_container">
                          {/* <h2>This item has been successfully added:</h2> */}
                          <img className="cart_img"alt="image_url"src={product.image_url}></img>
                        <div key={product}>
                          <p>BRAND: {product.brand}</p>
                      
                          <p>QTY: { product.quantity }</p>
                          <p>PRICE: ${ product.price }</p>
                          
                        </div>
                        <Trash className="trash" id="Cart_trash" onClick={ () => this.handleCartRemove(product)}/>
                    </div>
                      );
                    })
                  ) : (
                        <p className="message">Your Cart is empty</p>
                  );
    return (
        <div>
                  <div className="btn_container">
                      <button className="continuebtn" onClick={this.backToProductPage}>CONTINUE SHOPPING</button>
                      <br/>
                    
                      {/* <button className="checkoutbtn" onClick={ () => this.handleAddToCheckout( )}>PROCEED TO CHECKOUT</button> */}
                  </div>
              
                <div className="my_cart">
                      <p key={Math.random()}></p>
                      <div className="whole_cart">
                              <h3 className="cartletter">Shopping Cart</h3>
                              <hr/>
                     {displayInCart} <br />
                      </div>
                      <div className="checkoutContainer">
                              <div className="logo2"><img alt="crown" src={Logo2}></img></div>
                              <div className="royal" ><h3>Checkout</h3></div>
                              <div className="totalcontainer">
                                  <p className="total">
                                    <br />ORDER TOTAL: ${this.state.cart.length && this.state.cart.reduce((total,product)=>{
                                        var priceTotal= product.price * product.quantity;
                                        total += priceTotal
                                        return total;

                                    },0)}
                                  </p>
                               
                              </div>
                              <hr />
                              <br />
                              <div className="stripeRight"><CheckoutWStripe amount={this.state.cart.length && this.state.cart.reduce((total,product)=>{
                                          var priceTotal= product.price * product.quantity;
                                          total += priceTotal
                                          return total;

                                      },0)}/>
                              </div>
                      </div>
              </div>
      </div>
    );
  }
}
        


 