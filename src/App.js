// JavaScript File
import React, {Component} from 'react';
import './App.css';
import cat from './Images/logo.png';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import About from './About';
import Policy from './Pages/privacy';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component {
render() {
  return (
      
<Router>


<div className="container-fluid">

    <div class="row">
    <div class="col-xs-6 col-sm-4"></div>
    <div class="col-xs-6 col-sm-4"><Header/></div>
    <div class="col-xs-6 col-sm-4"></div>  
    </div>
  
<Switch>
<Route path="/" exact component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/Projects" component={Projects} />
    <Route path="/Contact" component={Contact} />
    <Route path="/privacy" component={Policy} />
</Switch>


</div>



<div class="row">
    <div class="col-xs-6 col-sm-4"></div>
    <div class="col-xs-6 col-sm-4"><Footer/></div>
    <div class="col-xs-6 col-sm-4"></div>  
</div>



</Router>






  );
}  
}

export default App;

