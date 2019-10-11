import React, { Component,Fragment } from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';

import Galeriaprincipal from './galeriaprincipal';
import Home from './Home';
import { BrowserRouter as Router, Route, Redirect,Link ,Switch} from 'react-router-dom';
import Header from './Header';

export default class Example extends Component {
    render() {
        return (
           
               
            <div>
            <Route  exact path="/" component={Galeriaprincipal } /   >  
            

           
            <Route  exact path="/home" component={Home } /   >  
             
                 
            <Route  exact path="/carrito" component={Footer } /   >  
                 
           

           
           
          
            </div>
           
        
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Router><Example /></Router>, document.getElementById('example'));
   
}

