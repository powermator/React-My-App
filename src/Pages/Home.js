// JavaScript File
import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';



class Home extends Component {
render() {
  return (
      
    <center>
    <div style={{ display: 'block', width: 1024, padding: 30 }}>
      <Carousel>
        
        <Carousel.Item interval={1500}>
        <img src="https://megax.s3.amazonaws.com/1.png" class="d-block w-100"></img> 
         
        </Carousel.Item>

        <Carousel.Item interval={500}>
        <img src="https://megax.s3.amazonaws.com/2.png" class="d-block w-100"></img>   
          
        </Carousel.Item>
      

        <Carousel.Item interval={500}>
        <img src="https://megax.s3.amazonaws.com/3.png" class="d-block w-100"></img>   
          
        </Carousel.Item>
      
      
      </Carousel>
    </div>
    </center>
    


  );
}  
}

export default Home;

