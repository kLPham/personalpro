import React, {Component} from 'react';
import axios from 'axios';


export default class FormalGown extends Component{
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
  
    
    componentDidMount() {
        axios.get('/api/products/formal_gowns').then(response => {
            this.setState({ productsToDisplay: response.data })
          console.log("YAY",response);
        });
      }

    handleAddToCart(item){
        axios.post('/api/cart',{item: item})
             .then((response) => this.setState({cart: response.data}))
             .catch(console.log);

    }

    render() {
        const allProducts = this.state.productsToDisplay.map(formalgown =>{
            console.log("Products redering",formalgown)
        return(

                <div className="formal_gowns" key={formalgown.id}>
                    <p>Brand: { formalgown.brand }</p>
                    <img src={ formalgown.image_url }></img>
                    <p>Description: { formalgown.description }</p>
                    <p>Size: { formalgown.size }</p>
                    <p>Color: { formalgown.color }</p>
                    <p>Unit_Price: { formalgown.unit_price }</p>
                    <p>Quantity: { formalgown.quantity }</p>
                    <button onClick={ () => this.handleAddToCart(formalgown)}>Add to Cart</button>
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