// JavaScript File
import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const navStyle = {
   color: 'black'
};

class Header extends Component {
render() {
  return (

<Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/Projects">Projects</Nav.Link>
        </Nav.Item>
        
        <Nav.Item>
          <Nav.Link href="/Policy">Policy</Nav.Link>
        </Nav.Item>
        
        <Nav.Item>
          <Nav.Link href="/Contact">Contact</Nav.Link>
        </Nav.Item>
        
        

  </Nav>






  );
}  
}

export default Header;