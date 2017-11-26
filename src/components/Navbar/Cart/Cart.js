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
      item: [],
      cart: []
    };

  this.backToProductPage = this.backToProductPage.bind(this);
  // this. handleCartRemove  = this.handleCartRemove.bind(this);
  }


  //redirect to the product page
  backToProductPage(event){
    window.location.href = "http://localhost:3000/Products";
  }
  //remove items from cart
  // removeItems(){
  // //   // console.log(this.props);
  // //   // alert(this.state.cart);
  // //   //Dispatch: taking an action & sent it to the reducer so reducer can figure out how state should change & it will return new state.
  //   // this.props.dispatch(
  //   //   {
  //   //    type: "REMOVE_FROM_MY_CART",
  //   //     payload: this.state.cart
  //   // }
  //   // )
  // }
 
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

  //remove from cart lifecycle backend
  componentWillMount(){
    console.log("1,2,3,4")
    this.props.handleCartRemove();
  }
  //remove from cart front-end * need to fix this
//   handleCartRemove(item){
//     axios.delete('/api/cart',{item: item})
//          .then((response) => this.setState({cart: response.data}))
//          .catch(console.log);
//          alert("Item has been remove from cart")

// }

  // handle checkout lifecycle
  componentWillMount(){
    this.props.handleCheckOut();
  }

  //redirect to checkout 
  redirectToCheckOutPage(){
    window.location.href = "http://localhost:3000/Checkout";
  }

  
  
  render(){
    //testing Nov/23
    
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
            <p>PRICE: ${product.price}</p>
            <br/>
            <p>TOTAL: ${product.total}</p>
            {/* <p>FINAL TOTAL: ${displayCart.reduce( ( total, { price } ) => total + price, 0 )}</p> */}
                <button>Edit Cart</button>
                <button onClick={ (e, id)=>(handleCartRemove(id))} >REMOVE FROM Cart</button>
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
        


  //CONNECT allow us to connect all the redux & their action to this component
  //do the same for every component you want to add the action of redux in.
  function mapStateToProps(state) { //redux is gonna call this function whenever the state in the store changes.
    return state
  }

//do the same for every component but put: export default connect(mapStateToProps, {}) (Cart);

export default connect(mapStateToProps, { handleCheckOut, handleCartRemove } )(Cart);







///still couldnt make items remove from front end. we have already update on the backend

