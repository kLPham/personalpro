import { createStore } from "redux";
import reducer from './ducks/My_Cart';


// let store = createStore()
export default createStore( reducer );




//remove one item
// const reducer = function(state, action) {
//     if (action.type === "DEC"){
//         return state-1;
//     }
//     return state;
// }

// store.dispatch({type: "DEC", payload: 1})