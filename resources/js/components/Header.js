import React, { Fragment,Component } from 'react'
import logo from '../../../images/img/logo_opt.png';
import Galeriaprincipal from './galeriaprincipal';

import Landing from './navbar';
import Usuarios from './Usuario';
import { BrowserRouter as Router, Route, Link ,Switch} from 'react-router-dom';
export default class Header extends Component {
    render(){
        const head={
            backgroundColor:"#0c0b0bc9"
        }
        const logoStyle ={
            marginTop:" 60px"
        }
        
        return(
           <Fragment>
<header id="header">
	
		<div className="header_top" style={head}>
			
			<div className="container">
				<div className="row">
					<div className="col-sm-25">
						<div className="contactinfo">
							<ul className="nav nav-pills">
								<li><a href="#"><i className="fa fa-phone"></i> 36-19-36-63</a></li>
								<li><a href="#"><i className="fa fa-envelope"></i> elhierro@live.com.mx</a></li>
							</ul>
						</div>
					</div>
					<div className="mainmenu pull-right">
						<ul className="nav navbar-nav collapse navbar-collapse">
							<li><a href="/" className="active">INICIO</a></li>
							<li className="dropdown"><a href="#">PRODUCTOS<i className="fa fa-angle-down"></i></a>
								<ul role="menu" className="sub-menu">
								{/*	<!--  <li><a href="shop.html">Products</a></li>--> */}
									<li><a href="product-details.html">LISTADO</a></li>
									<li><a href="checkout.html">SERVICIOS</a></li>
									{/*<!--<li><a href="cart.html">CARRITO</a></li>
									<li><a href="login.html">PEDIDOS</a></li>--> */}
								</ul>
							</li>
							<li className="dropdown"><a href="contact-us.html">CONTACTO<i className="fa fa-angle-down"></i></a>
								<ul role="menu" className="sub-menu">
									<li><a href="blog.html">VÉNDENOS</a></li>
								{/*	<!--<li><a href="blog-single.html">REGISTRATE</a></li>--> */}
									<li><a href="blog-single.html">COTIZA</a></li>
								</ul>
							</li>

							<li><a href="contact-us.html">NOSOTROS</a></li>
						</ul>
					</div>
					<div className="col-sm-8">
						<div className="social-icons pull-left">
							<ul className="nav navbar-nav">
								<a href="https://api.whatsapp.com/send?phone=523329269433&text=hola,%20buenos%20dias%20"
									target="-blank">
									<i id="wats" className="fab fa-whatsapp"></i></a>
								<a href="https://es-la.facebook.com/pg/Aceros8dejulio/posts/" target="-blank">
									<i id="face" className="fab fa-facebook"></i></a>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/*<!--/header_top--> */}



		<div className="container">
			<div className="row">
				
				<div className="col-md-4 clearfix">
					<div className="logo pull-left " style={logoStyle}>
						<a href="/"><img src={logo} alt="Aceros" /></a>
					</div>
					<div className="btn-group pull-right clearfix">
						<div className="btn-group">

							<ul className="dropdown-menu">
								<li><a href="">Canada</a></li>
								<li><a href="">UK</a></li>
							</ul>
						</div>

						<div className="btn-group">

							<ul className="dropdown-menu">
								<li><a href="">Canadian Dollar</a></li>
								<li><a href="">Pound</a></li>
							</ul>
						</div>
					</div>
				</div>
				<Landing/>
			</div>
		</div>
		
		{/*header middle*/}

		<div className="header-bottom">
			
			<div className="container">
				<div className="row">
					<div className="col-sm-9">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle" data-toggle="collapse"
								data-target=".navbar-collapse">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
						</div>

					</div>
					<div className="col-sm-3">
						<div className="search_box pull-right">
							
						</div>
					</div>
				</div>
			</div>
		</div>
		
	</header>
     
       
		<Switch>
		<Route exact path ="/Home" component ={Usuarios}/>
	    <Route  exact path="/" component={Galeriaprincipal}/>
		<Route exact path="/home/register" component={Usuarios} />
            <Route exact path="/home/login" component={Usuarios} />
            <Route exact path="/home/profile" component={Usuarios} />
        </Switch>
		
           </Fragment>
        );
    }
}