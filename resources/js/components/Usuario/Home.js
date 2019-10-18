
import React, { Component,Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect,Link ,Switch} from 'react-router-dom';
import Formularioenvio from './formularioenvio';
import Profile from './Profile';
import { getProfile } from './UserFunctions';
 export default class Home extends Component{
    constructor(){
        super();
        this.state={
            redi:false
        }
    }
    componentDidMount() {
        getProfile().then(res => {
            console.log(res+"consola aplicada")
            
        })
    }
    render(){
        return(
            <div>
                
               { localStorage.usertoken ?     
            <div className="container">
    <div className="row">

     <div class="col-sm-3  ">
       
       <div class="list-group" id="list-tab" role="tablist">
           
             <Link to =""class="list-group-item list-group-item-action active" id="list-home-list"  
            
             role="tab" aria-controls="home">

           
             <ul className="nav navbar-nav  collapse navbar-collapse">
							
							<li className="dropdown pull-right"><p className="w-100">CATEGORÍAS<i className="fa fa-angle-down"></i></p>
								<ul role="menu" className="sub-menu">
								{/*	<!--  <li><a href="shop.html">Products</a></li>--> */}
									<li><Link to="product-details.html">LISTADO</Link></li>
									<li><Link to="checkout.html">SERVICIOS</Link></li>
									{/*<!--<li><a href="cart.html">CARRITO</a></li>
									<li><a href="login.html">PEDIDOS</a></li>--> */}
								</ul>
							</li>
							

				
						</ul>
                        <br>
                        </br>
                       
             </Link>
            
             <Link to="/home/perfil" class="list-group-item list-group-item-action" id="list-profile-list"   role="tab" aria-controls="profile">
                 MI PERFIL</Link>
             <Link to="" class="list-group-item list-group-item-action" id="list-messages-list"   role="tab" aria-controls="messages">
                DATOS DE ENVÍO Y FATURACIÓN</Link>
             <Link to="/home/datosenvio" class="list-group-item list-group-item-action " id="list-messages-list"   role="tab" aria-controls="messages">
              
                  MIS PEDIDOS</Link>
              <Link to="" class="list-group-item list-group-item-action" id="list-settings-list"   role="tab" aria-controls="settings">
                 PREGUNTAS FRECUENTES</Link>
              <Link to="" class="list-group-item list-group-item-action" id="list-settings-list"   role="tab" aria-controls="settings">
                 SOBRE NOSOTROS</Link>
              <Link to="" class="list-group-item list-group-item-action" id="list-settings-list"   role="tab" aria-controls="settings">
                 CALIFICACIÓN DEL SITIO</Link>
               <Link to="" class="list-group-item list-group-item-action" id="list-settings-list"  role="tab" aria-controls="settings">
                 MIS OPINIONES</Link>
       </div>
      </div>
    
    
         
          <Route exact  path="/home/datosenvio" component={Formularioenvio } /   >
          <Route exact  path="/home/perfil" component={Profile } /   >  
          
         
      
     
       
       </div>
   </div>
   : <Redirect to="/"/>}
   </div>

        )
    }
 }