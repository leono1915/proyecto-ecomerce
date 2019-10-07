import React, { Component,Fragment } from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import Header from './Header';

import { BrowserRouter as Router, Route, Redirect,Link ,Switch} from 'react-router-dom';

export default class Example extends Component {
    render() {
        return (
            <Router>
            <Fragment>
           
            
             <div>
             <Switch>
                  <Route  exact path="/pie" component={Header } /   >  
                  <Route  exact path="/cabeza" component={Footer } /   >  
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

