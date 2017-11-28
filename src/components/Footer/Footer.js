import React, { Component } from 'react'; 
import { SocialIcon } from 'react-social-icons';
import './Footer.css';




export default class Footer extends Component{
    constructor(props){
        super(props);

    }

    render(){
        const G = "GET CONNECTED";
        // const divStyle = {
        //     border: '1px solid gray'
        // };


        return(
                <div className="nav" >
                    <nav className="navbar navbar-default navbar-fixed-bottom">
                      <h2 className="connect">{G}</h2>
                      {/* <p>code & design by Kelly Linh Pham </p> */}
                      <div className="social">
                        <SocialIcon url="https://www.facebook.com/" />
                        <SocialIcon url="https://www.instagram.com/" />
                        <SocialIcon url="https://www.pinterest.com/" />
                        <SocialIcon url="https://twitter.com/" />
                      </div>
                    </nav>
                </div>
        )
    }
}