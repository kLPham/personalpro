// import getProducts from './getProducts';

// const initialState = {
//     cart: [],
//     inputSearch: null
// }

// //actions: command given
// const ADD_TO_MY_CART = "ADD_TO_MY_CART";
// const REMOVE_FROM_MY_CART = "REMOVE_FROM_MY_CART";
// const UPDATE_CART_PRICE = "UPDATE_CART_PRICE";
// const CHECKOUT_NOW = "CHECKOUT_NOW";

// const SEARCH_PRODUCT = "SEARCH_PRODUCT"

// // Reducer: state & action
// export default function My_Cart( state = initialState, action) {
//     switch( action.type ) {
//       case SEARCH_PRODUCT:
//           return Object.assign({}, state, {inputSearch: [...state.cart, action.payload ]} );
//       case ADD_TO_MY_CART:
//           return Object.assign({}, state, {cart: [...state.cart, action.payload] });
//       case UPDATE_CART_PRICE:
//           // let totalPrice = getCartTotal(action.data)
//           return Object.assign({}, state, { data:action.data, cartTotal: action.data });
//       case CHECKOUT_NOW:
//           return Object.assign({}, initialState);
//       default:
//       return state;
//     }
//   }
//   // case 'GET_DATA_SUCCESS':
//   // let totalPrice = getTotalPrice(action.data);
//   // return Object.assign({}, state, { datas: action.data, cartTotal: totalPrice });

// //   Action creators
//   export function handleSearchInput( ){
//       return {
//           type: SEARCH_PRODUCT,
//           payload: null
//       }
//   }
//   export function handleCartAdd( id ){
//     return {
//       type: ADD_TO_MY_CART,
//       payload: id
//     }
//   }

//   export function handleCartRemove( id ){
//       return {
//         type: REMOVE_FROM_MY_CART,
//         payload: id
//       }
//   }

//   export function handleUpdateCartPrice(id , count){
//       return {
//         type: UPDATE_CART_PRICE,
//         payload: id, count
//       }
//   }

//   export function handleCheckOut(  ){
//       return {
//         type: CHECKOUT_NOW,
//         payload: null
//       }
//   }
