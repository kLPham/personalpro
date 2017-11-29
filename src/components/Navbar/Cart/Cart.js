import React, { Component } from "react";
import axios from "axios";
import './Cart.css';

import CheckoutWStripe from '../CheckoutWStripe';


import { connect } from 'react-redux';
import { handleCheckOut, handleCartRemove } from '../../../ducks/reducer';


import Trash from 'react-icons/lib/fa/trash';



class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: []
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


    //testing%% get total
    // componentWillMount(){
    //   // axios.get(`/cart/${this.props.user.id}`).then(response=> {
    //   //   this.setState({ cart: response.data });
    //   // });
    //   axios.get(`/cart/total/${this.props.user.id}`).then(response=> {
    //     this.setState({ total: response.data[0].sum });
    //   });
    // }



  //REMOVE FROM CART FRONT_END: :)
  handleCartRemove(product){
    axios
         .delete(`/api/cart/${product.id}`)
         .then((response) => this.setState({cart: response.data}))
         .catch(console.log);
         alert("Item has been remove from cart")
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
    let displayInCart =
      this.state.cart.length > 0 ? (
      this.state.cart.map(product => {
        return (
      <div key={product}>
      <div className="my_cart">
        <p key={Math.random()}></p>
            <div className="cart_container">
                  {/* <h2>This item has been successfully added:</h2> */}
                  <img className="cart_img"alt="image_url"src={product.image_url}></img>
                <div >
                  <p>BRAND: {product.brand}</p>
                  <p>SIZE: { product.size }</p>
                  <p>COLOR: { product.color }</p>
                  <p>QTY: { product.quantity }</p>
                  <p>PRICE: ${ product.price }</p>
                </div>
                  {/* <p>FINAL TOTAL: ${displayCart.reduce( ( total, { price } ) => total + price, 0 )}</p> */}
                  <Trash className="trash" id="Cart_trash" onClick={ () => this.handleCartRemove(product)}/>
            </div>
                <br />
               
      </div>
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
        <div>{displayInCart}</div>
        <div className="checkoutContainer">
            <h3 className="pay">RoyalCouture Checkout</h3>
            <div className="stripeRight"><CheckoutWStripe amount="50000"/></div>
        </div>
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
