import gowns from '../assets/gowns';
import getProducts from './getProducts';


const initialState = {
    cart: []
}

//actions here
const ADD_TO_MY_CART = "ADD_TO_MY_CART";
const REMOVE_FROM_MY_CART = "REMOVE_FROM_MY_CART";
const CHECKOUT_NOW = "CHECKOUT_NOW";


// Reducer
export default function My_Cart( state = initialState, action) {
    switch( action.type ) {
      case ADD_TO_MY_CART: 
          return Object.assign({}, state, {cart: [...state.cart, action.payload] });
      case REMOVE_FROM_MY_CART:
          return Object.assign({}, state, {cart: state.cart.filter( val => val !== action.payload )  });
      case CHECKOUT_NOW:
          return Object.assign({}, initialState);
      default: return state;
    }
  }


  //Action creators
  export function handleCartAdd( id ){
    return {
      type: ADD_TO_MY_CART,
      payload: id
    }
  }

  export function handleCartRemove( id ){
      return {
        type: REMOVE_FROM_MY_CART,
        payload: id
      }
  }

  export function handleCheckOut(  ){
      return {
        type: CHECKOUT_NOW,
        payload: null
      }
  }









  
 
  
