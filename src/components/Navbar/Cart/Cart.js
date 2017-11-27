import React, { Component } from "react";
import axios from "axios";
import './Cart.css';
import Checkout from '../Checkout/Checkout';

import { connect } from 'react-redux';
import { handleCheckOut, handleCartRemove } from '../../../ducks/reducer';


class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // item: [],
      cart: []
    };
 
  //BIND FUNCTIONS HERE:
  this.backToProductPage = this.backToProductPage.bind(this);
  this.handleCartRemove  = this.handleCartRemove.bind(this);
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
        // console.log(response);
        this.setState({cart: response.data });
      })
}
//POST PRODUCTS IN CART:
  // componentDidUpdate(){
  //   axios.post('/products').then(response=>{
  //     this.setState({cart:response.data});
  //   })
  // }


  //REMOVE FROM CART FRONT_END: :)
  handleCartRemove(product){
    axios
         .delete(`/api/cart/${product.id}`)
         .then((response) => this.setState({cart: response.data}))
         .catch(console.log);
         alert("Item has been remove from cart")
}

  // handle checkout lifecycle
  // componentWillMount(){
  //   this.props.handleCheckOut();
  // }

  //REIRECT TO CHECKOUT PAGE :)
  redirectToCheckOutPage(){
    window.location.href = "http://localhost:3000/Checkout";
  }

  
  
  render(){
    let displayCart =
      this.state.cart.length > 0 ? (
      this.state.cart.map(product => {
        return (
      <div key={product}>
      <div className="my_cart">
        <h2>This item has been successfully added:</h2>
        <p key={Math.random()}></p>
            <img alt="image_url"src={product.image_url}></img>
            <hr/> 
            <p>BRAND: {product.brand}</p>
            <hr/>
            <p>DESCRIPTION: {product.description}</p>
            <p>SIZE: { product.size }</p>
            <p>COLOR: { product.color }</p>
            <p>QTY: { product.quantity }</p>
            <p>PRICE: ${product.price}</p>
            <p>TOTAL: ${product.total}</p>
            {/* <p>FINAL TOTAL: ${displayCart.reduce( ( total, { price } ) => total + price, 0 )}</p> */}
                <button onClick={ () => this.handleCartRemove(product)}>REMOVE FROM Cart</button>
                <hr />
                {/* <button className="continuebtn" onClick={this.backToProductPage}>CONTINUE SHOPPING</button>
                <button className="checkoutbtn" onClick={this.redirectToCheckOutPage}>CHECKOUT</button> */}
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
         {/* <div className="btn_container"> */}
            <button className="continuebtn" onClick={this.backToProductPage}>CONTINUE SHOPPING</button>
            <button className="checkoutbtn" onClick={this.redirectToCheckOutPage}>CHECKOUT</button>
        
        {/* <Checkout /> */}
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

