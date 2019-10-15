import React, { Component,Fragment } from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';

import Galeriaprincipal from './galeriaprincipal';
import Home from './Home';
import { BrowserRouter as Router, Route, Redirect,Link ,Switch} from 'react-router-dom';
import Header from './Header';

export default class Index extends Component {
    render() {
        return (
           
               
            <div>
          <Header/>
             
                 
           
                 
           

           <Footer/>
           
          
            </div>
           
        
        );
    }
}

if (document.getElementById('index')) {
    ReactDOM.render(<Router><Index/></Router>, document.getElementById('index'));
   
}

