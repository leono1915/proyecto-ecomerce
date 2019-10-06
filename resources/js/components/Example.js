import React, { Component,Fragment } from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import Header from './Header';
import Galeriaprincipal from './galeriaprincipal';
import { BrowserRouter as Router, Route, Redirect,Link ,Switch} from 'react-router-dom';

export default class Example extends Component {
    render() {
        return (
            <Router>
            <Fragment>
           
            
             <div>
             <Switch>
                  <Route  path="/pie" component={Header } /   >  
                  <Route  path="/cabeza" component={Footer } /   >  
             </Switch>
             </div>
            
          
            </Fragment>
           
            </Router>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Router><Example /></Router>, document.getElementById('example'));
   
}

