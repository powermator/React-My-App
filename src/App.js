// JavaScript File
import React, {Component} from 'react';
import './App.css';
import cat from './logo.png';
import Header from './Header';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';
import Services from './Services';


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


  <div class="row">
  <div class="col-xs-6 col-sm-4"></div>
  <div class="col-xs-6 col-sm-4"><img src={cat} className="img-responsive" alt="" /> </div>
  <div class="col-xs-6 col-sm-4"></div> 
  </div>


  
<Switch>
<Route path="/" exact component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/Projects" component={Projects} />
    <Route path="/About" component={About} />
    <Route path="/Services" component={Services} />
    <Route path="/Contact" component={Contact} />
</Switch>

</div>

</Router>

  );
}  
}

export default App;

