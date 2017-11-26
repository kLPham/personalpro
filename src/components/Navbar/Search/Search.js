import React, { Component } from "react";
import axios from "axios";

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: '',
      productsToDisplay: []
    };

    // this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonchange = this.handleButtonchange.bind(this);
  }
  componentDidMount() {
    axios.get('/api/products').then(response => {
        this.setState({ productsToDisplay: response.data })
      console.log("YAY",response);
    });
  }
  handleAddToCart(item){
        axios.post('/api/cart',{item: item})
             .then((response) => this.setState({cart: response.data}))
             .catch(console.log);
             alert("Item added to cart")

    }
  // handleInputChange(){
  //   axios.get('/api/products/').then(response => {
  //     this.setState({ searchInput: response.data})
  //     let searchProducts = this.refs.searchProducts.value;
  //   // this.setState({ searchInput: val })
  //   })
  // }

  handleButtonchange(event){
    window.location.href = "http://localhost:3000/Products";
  }
  render(){
    return (
      <div className="inputSearch">
        <input 
          // value={this.state.searchInput}
          // onChange={(e)=> {this.handleInputChange(e.target.value); }}
          onChange={ this.handleInputChange }
          placeholder="Search products"
          type="text"
          ref="search product_id" ></input>
        <button onClick={this.handleButtonchange}>Search</button>
      </div>
    );
  }
}

//need to fix the search input/button