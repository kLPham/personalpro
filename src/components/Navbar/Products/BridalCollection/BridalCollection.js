import React, {Component} from 'react';
import Details from '../../P_Details/Details';
import './BridalCollection.css';
import axios from 'axios';


export default class BridalCollection extends Component{
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
        axios.get('/api/products/bridal_collection').then(response => {
            this.setState({ productsToDisplay: response.data })
          console.log("YAY",response);
        });
      }

    handleAddToCart(item){
        axios.post('/api/cart',{item: item})
             .then((response) => this.setState({cart: response.data}))
             .catch(console.log)
    }

    render() {
        const allProducts = this.state.productsToDisplay.map(bridalcollection =>{
            console.log("Products redering",bridalcollection)
        return(
                <div className="bridal_collection" key={bridalcollection.id}>
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


// {/* <h1>Our Bridal Collection</h1>
//                 <select className="Bridal_Collection_Type">
//                     <option>Refine by</option>
//                     <option>Size</option>
//                     <option>Color</option>
//                     <option>Silhouette</option>
//                     <option>Length</option>
//                     <option>Price</option>
//                 </select> */}