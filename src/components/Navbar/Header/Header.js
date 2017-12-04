import React,{Component} from 'react';

import './Header.css';

export default class Header extends Component{
    render(){
        return(
   
   <div>
   <div className="header">
    
    <logo>Start Bootstrap </logo>
    <nav>
 <ul class= 'menu'>
            <li><a href='#'> SERVICES </a></li>
            <li><a href='#'>PORTFOLIO</a> </li>
            <li><a href='#'> ABOUT </a></li>
            <li><a href='#'>TEAM </a></li>
            <li><a href='#'>CONTACT</a></li>    
        </ul>
         <div className="notmenu">
<div> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Menu%2C_Web_Fundamentals_%28White%29.svg/1280px-Menu%2C_Web_Fundamentals_%28White%29.svg.png"className="icon"/> 
</div>
</div> 
        </nav>
 </div>

  <div className='text'>

     <h3>Welcome To Our Studio!</h3>
     <h1> IT'S NICE TO MEET YOU</h1>
     </div> 
</div>
    )
}
}
