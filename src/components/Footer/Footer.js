import React, { Component } from 'react'; 
import { SocialIcon } from 'react-social-icons';
import './Footer.css';




export default class Footer extends Component{
    constructor(props){
        super(props);

    }

    render(){
        const G = "GET CONNECTED";
        const divStyle = {
            border: '2px solid gray'
        };
        // const socialStyle = {
        //     backgroundColor: "white",
        //     position: 'relative',
        //     display: 'flex'
        // };

        return(
                <div className="nav" style={divStyle}>
                    <nav className="navbar navbar-default navbar-fixed-bottom">
                      <h2 className="connect">{G}</h2>
                      {/* <hr /> */}
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