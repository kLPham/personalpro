import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './BridalCollection.css';


export default class BridalCollection extends Component{
    constructor(props){
        super(props)

        this.state = {
            item: [],
            // cart: [],
            productsToDisplay: []
        };

        //bind methods
        // this.handleAddToCart = this.handleAddToCart.bind(this);
    }
  
    //request for a response of bridal collection from database:
    componentDidMount() {
        axios.get('/api/products/bridal_collection').then(response => {
            this.setState({ productsToDisplay: response.data })
          console.log("YAY",response);
        });
      }

    // handleAddToCart(item){
    //     axios.post('/api/cart',{item: item})
    //          .then((response) => this.setState({cart: response.data}))
    //          .catch(console.log);

    // }

    render() {
        const allProducts = this.state.productsToDisplay.map(bridalcollection =>{
            console.log("Products redering",bridalcollection)
        return(
    
        <div>
            <div className="product_list">
                <div className="bridal_collection" key={bridalcollection.id}>
                     <Link to="/Products/BridalC_Details"><span><img alt="image_url" src={ bridalcollection.image_url }></img></span></Link>
                    <p>{ bridalcollection.brand }</p>
                    <p>${ bridalcollection.price }</p> 
                    <br />
                </div>
            </div>
        </div>
        )}
        );

        return(
           <div> { allProducts } </div>
        )
    }
}

{/* <ol>
{this.props.results.map((result, i) => (
  <li key={i}>{result.text}</li>
))}
</ol> */}