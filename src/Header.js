// JavaScript File
import React, {Component} from 'react';
import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const navStyle = {
   color: 'black'
};

class Header extends Component {
render() {
  return (

    <Nav variant="tabs" defaultActiveKey="/home">
  
  
    <Nav.Link >
       <Link class="text-decoration-none" style={navStyle} to="/home"> <li>Home</li>   </Link>
    </Nav.Link>
     
   
      <Nav.Link >
       <Link class="text-decoration-none" style={navStyle} to="/Services"> <li>Services</li>
       </Link>
     </Nav.Link>
      
      <Nav.Link >
       <Link class="text-decoration-none" style={navStyle} to="/Projects"> <li>Projects</li>
      </Link>
     </Nav.Link>
      
      <Nav.Link >
       <Link class="text-decoration-none" style={navStyle} to="/about"> <li>About</li>
       </Link>
      </Nav.Link>
      
      <Nav.Link >
       <Link class="text-decoration-none" style={navStyle} to="/Contact"> <li>Contact</li>
       </Link>
      </Nav.Link>
    
  </Nav>

  );
}  
}

export default Header;