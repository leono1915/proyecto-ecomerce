import React, { Component,Fragment } from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import Formularioenvio from './formularioenvio';
import Galeriaprincipal from './galeriaprincipal';
import { BrowserRouter as Router, Route, Redirect,Link ,Switch} from 'react-router-dom';

export default class Example extends Component {
    render() {
        return (
            <Router>
                <li><Link to="/datosenvio"><i className="fa fa-user"></i> Cuenta</Link></li>
			<li><Link to="/carrito"><i className="fa fa-star"></i> Wishlist</Link></li>
            <Fragment>
            
            
             <div>
             <Switch>
                  <Route  exact path="/datosenvio" component={Formularioenvio } /   >  
                  <Route  exact path="/carrito" component={Footer } /   >  
                  <Route  exact path="/" component={Galeriaprincipal } /   >  
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

