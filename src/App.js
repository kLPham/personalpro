import React, { Component } from 'react';
import axios from 'axios';
// import Checkout from './Checkout';
import './App.css';


import router from './router';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';





class App extends Component {

  componentWillMount(){
    axios.get('/api/test')
    .then(response => console.log(response))
  }
  
  render() {
    return (
      <div className="App">
          <Navbar />
          {/* <Navbar.Toggle /> */}
          { router }
          {/* <Checkout
            name={'The Road to an Empty Wallet'}
            description={'Pay for Your Gowns Here'}
            amount={1}
          /> */}
          <Footer />
          
      </div>
    );
  }
}

export default App;