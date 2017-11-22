import React, {Component} from 'react';
import axios from 'axios';


export default class BridalC_Details extends Component{
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
  
    //request for a response of bridal collection from database:
    componentDidMount() {
        axios.get('/api/products/bridal_collection').then(response => {
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
        const allProducts = this.state.productsToDisplay.map(bridalcollection =>{
            console.log("Products redering",bridalcollection)
        return(

                <div className="product_list" key={bridalcollection.id}>
                    <p>Brand: { bridalcollection.brand }</p>
                    <img src={ bridalcollection.image_url }></img>
                    <p>Description: { bridalcollection.description }</p>
                    <p>Size: { bridalcollection.size }</p>
                    <p>Color: { bridalcollection.color }</p>
                    <p>Unit_Price: { bridalcollection.unit_price }</p>
                    <p>Quantity: { bridalcollection.quantity }</p>
                    <button onClick={ () => this.handleAddToCart(bridalcollection)}>Add to Cart</button>
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