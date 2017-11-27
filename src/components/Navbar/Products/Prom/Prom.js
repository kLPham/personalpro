import React, {Component} from 'react';
import axios from 'axios';


export default class Prom extends Component{
    constructor(props){
        super(props)

        this.state = {
            item: [],
            cart: [],
            productsToDisplay: []
        };

        //bind methods
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }
  
    //get products from sql data related to prom
    componentDidMount() {
        axios.get('/api/products/prom').then(response => {
            this.setState({ productsToDisplay: response.data })
          console.log("YAY",response);
        });
      }
    //add items to card and post it in cart component
    handleAddToCart(item){
        axios.post('/api/cart',{item: item})
             .then((response) => this.setState({cart: response.data}))
             .catch(console.log);
             alert("Item added to cart")

    }

    render() {
        const allProducts = this.state.productsToDisplay.map(prom =>{
            console.log("Products redering",prom)
        return(

                <div className="formal_gowns" key={prom.id}>
                    <p>Brand: { prom.brand }</p>
                    <img alt="image_url" src={ prom.image_url }></img>
                    <p>Description: { prom.description }</p>
                    <p>Size: { prom.size }</p>
                    <p>Color: { prom.color }</p>
                    <p>Unit_Price: { prom.price }</p>
                    <p>Quantity: { prom.quantity }</p>
                    <button onClick={ () => this.handleAddToCart(prom)}>Add to Cart</button>
                    <hr/>
                    <br />
                </div>
        )}
        );

        return(
           <div> { allProducts } </div>
        )
    }
}

// const allProducts = this.state.productsToDisplay.map(prom =>{
//     console.log("Products redering",prom)

//     <button onClick={ () => this.handleAddToCart(prom)}>Add to Cart</button>
//     this.handleAddToCart = this.handleAddToCart.bind(this);