import React, { Component } from "react";
import axios from "axios";
import './Cart.css';
import Checkout from '../Checkout/Checkout';

import { connect } from 'react-redux';
import { handleCheckOut, handleCartRemove } from '../../../ducks/My_Cart';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // allowEdit: 'true',
      cart: []
     
    };

  
  this.backToProductPage = this.backToProductPage.bind(this);
 
  }

  //redirect to the product page
  backToProductPage(event){
    window.location.href = "http://localhost:3000/Products";
  }
 
  //Lifecyle methods
  componentWillReceiveProps(nextprops){
  this.setState({ cart:nextprops.cart });
}

//create a get endpoint in api/cart
componentDidMount(){
  axios.get('/api/cart').then(response =>{
    // console.log(response);
    this.setState({cart: response.data });
  })
}

  componentDidUpdate(){
    axios.post('/products').then(response=>{
      this.setState({cart:response.data});
    })
  }

  //redirect to checkout 
  redirectToCheckOutPage(){
    window.location.href = "http://localhost:3000/Checkout";
  }

  
  
  render(){
    let displayCart =
      this.state.cart.length > 0 ? (
      this.state.cart.map(product => {
        return (
      <div>
      <div className="my_cart">
        <h2>This item has been successfully added:</h2>
        <p key={Math.random()}></p>
            <img src={product.image_url}></img>
            <hr/> 
            <p>BRAND: {product.brand}</p>
            <hr/>
            <p>DESCRIPTION: {product.description}</p>
            <hr/>
          <select>
            <option value="Select">Select Size</option>
            <option value="size">{product.size}</option>
          </select>
            <hr/>
          <select>
            <option value="Select">Select Color</option>
            <option value="color">Color: {product.color}</option>
          </select>
            <hr/>

          <select>
            <option value="Select">Select Quantity</option>
            <option value="quantity">Qty: {product.quantity}</option>
          </select>
          
            <p>PRICE: ${product.unit_price}</p>
            <br/>
            <p>TOTAL: ${product.total}</p>
                <button>Edit Cart</button>
                <button onClick= {() =>{this.handleCartRemove}}>Remove from Cart</button> 
      </div>
      </div>
        );
      })
    ) : (
          <p>Your Cart is empty</p>
    );
    return (
      <div>
        <div>{displayCart}</div>
        <div className="btn_container">
            <button className="continuebtn" onClick={this.backToProductPage}>CONTINUE SHOPPING</button>
            <button className="checkoutbtn" onClick={this.redirectToCheckOutPage}>CHECKOUT</button>
        </div>
        <Checkout />
      </div>
    );
  }
}
        



  //do the same for every component you want to add the action of redux in.
  function mapStateToProps(state) {
    return state
  }  


//do the same for every component but put: export default connect(mapStateToProps, {}) (Cart);
export default connect(mapStateToProps, { handleCheckOut, handleCartRemove } )(Cart);




///make sure to remove item on the front end. we have already update on the backend