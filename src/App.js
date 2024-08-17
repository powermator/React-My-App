// JavaScript File
import React, {Component} from 'react';
import './App.css';
import cat from './logo.png';
import Header from './Pages/Header';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Policy from './Pages/Policy';
import Contact from './Pages/Contact';
import About from './About';



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
    <Route path="/Contact" component={Contact} />
    <Route path="/Policy" component={Policy} />
</Switch>

</div>

</Router>

  );
}  
}

export default App;

