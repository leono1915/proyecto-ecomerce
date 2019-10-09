
import React, { Component,Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect,Link ,Switch} from 'react-router-dom';
import Formularioenvio from './formularioenvio';

 export default class Home extends Component{

    render(){
        return(
            <Fragment>
                  <Router>
            <div className="container">
    <div className="row">
   
     <div class="col-sm-3  ">
       
       <div class="list-group" id="list-tab" role="tablist">
           
             <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">

           
             <ul className="nav navbar-nav  collapse navbar-collapse">
							
							<li className="dropdown pull-right"><p className="w-100">CATEGORÍAS<i className="fa fa-angle-down"></i></p>
								<ul role="menu" className="sub-menu">
								{/*	<!--  <li><a href="shop.html">Products</a></li>--> */}
									<li><a href="product-details.html">LISTADO</a></li>
									<li><a href="checkout.html">SERVICIOS</a></li>
									{/*<!--<li><a href="cart.html">CARRITO</a></li>
									<li><a href="login.html">PEDIDOS</a></li>--> */}
								</ul>
							</li>
							

				
						</ul>
                        <br>
                        </br>
                       
             </a>
            
             <Link to="" class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list"  role="tab" aria-controls="profile">
                 MI PERFIL</Link>
             <Link to="" class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list"  role="tab" aria-controls="messages">
                DATOS DE ENVÍO Y FATURACIÓN</Link>
             <Link to="/datosenvio">
                  MIS PEDIDOS</Link>
              <Link to="" class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list"  role="tab" aria-controls="settings">
                 PREGUNTAS FRECUENTES</Link>
              <Link to="" class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list"  role="tab" aria-controls="settings">
                 SOBRE NOSOTROS</Link>
              <Link to="" class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list"  role="tab" aria-controls="settings">
                 CALIFICACIÓN DEL SITIO</Link>
               <Link to="" class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" role="tab" aria-controls="settings">
                 MIS OPINIONES</Link>
       </div>
      </div>
    
      <Switch>
         
          <Route  exact path="/datosenvio" component={Formularioenvio } /   > 
          
     
      </Switch>
      

       </div>
   </div>
   </Router>
   </Fragment>

        )
    }
 }