import React, { Component,Fragment } from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import Header from './Header';
import { BrowserRouter as Router, Route, Link ,Switch} from 'react-router-dom';

export default class Example extends Component {
    render() {
        return (
            <Router>
            <Fragment>
            
             <Header/>
             <div>
             <Switch>
                  <Route  exact path="/cabeza" component={Header } /   >  
                  <Route  exact path="/pie" component={Footer } /   >  
             </Switch>
             </div>
            <Footer/>
            
            </Fragment>
            </Router>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
