import React, { Component } from 'react'; 
import { SocialIcon } from 'react-social-icons';
import './Footer.css';




export default class Footer extends Component{
    constructor(props){
        super(props);

    }

    render(){
        const G = "GET CONNECTED";
     

        return(
                    <div className="navbar navbar-default navbar-fixed-bottom">
                      <h2 className="connect">{G}</h2>
                      <SocialIcon url="https://www.facebook.com/" />
                      <SocialIcon url="https://www.instagram.com/" />
                      <SocialIcon url="https://www.pinterest.com/" />
                      <SocialIcon url="https://twitter.com/" />

                            
                    </div>
        )
    }
}