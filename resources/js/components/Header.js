import React, { Fragment,Component } from 'react'
import logo from '../../../images/img/logo_opt.png';
import Galeriaprincipal from './galeriaprincipal';
import Error404 from './Error404';
import Landing from './navbar';
import Carrito from './Carrito';
import Cotizador from './Cotizador';
import Usuarios from './Usuario';
import { BrowserRouter as Router, Route, Link ,Switch} from 'react-router-dom';
let i=0;
export default class Header extends Component {
    constructor(){
		super();
		this.state={
			cantidad:0,
			productos:[]
		}

	}
  componentDidMount(){
	  if(this.state.productos.length===0){
		  this.setState({
			  productos:JSON.parse(localStorage['carrito']),
			  cantidad:JSON.parse(localStorage['carrito']).length
		  })
	  }
  }
   cambio(e){

	this.setState(el=>{
		   
		const list=el.productos.push(e);

		return{
		 list,
		 cantidad:e.length
		  }
	})
	   console.log(e.length)
   }
    render(){
		const cambio=this.state.cantidad;
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
								<li><Link to="#"><i className="fa fa-phone"></i> 36-19-36-63</Link></li>
								<li><Link to="#"><i className="fa fa-envelope"></i> elhierro@live.com.mx</Link></li>
							</ul>
						</div>
					</div>
					<div className="mainmenu pull-right">
						<ul className="nav navbar-nav collapse navbar-collapse">
							<li><Link to="/" className="active">INICIO</Link></li>
							<li className="dropdown"><Link to="#">PRODUCTOS<i className="fa fa-angle-down"></i></Link>
								<ul role="menu" className="sub-menu">
								{/*	<!--  <li><Link to="shop.html">Products</Link></li>--> */}
									<li><Link to="/">LISTADO</Link></li>
									<li><Link to="/">SERVICIOS</Link></li>
									<li><Link to="/cotizador">COTIZADOR</Link></li>
									{/*<!--<li><Link to="cart.html">CARRITO</Link></li>
									<li><Link to="login.html">PEDIDOS</Link></li>--> */}
								</ul>
							</li>
							<li className="dropdown"><Link to="contact-us.html">CONTACTO<i className="fa fa-angle-down"></i></Link>
								<ul role="menu" className="sub-menu">
									<li><Link to="blog.html">VÉNDENOS</Link></li>
								{/*	<!--<li><Link to="blog-single.html">REGISTRATE</Link></li>--> */}
									<li><Link to="blog-single.html">COTIZA</Link></li>
								</ul>
							</li>

							<li><Link to="contact-us.html">NOSOTROS</Link></li>
						</ul>
					</div>
					<div className="col-sm-8">
						<div className="social-icons pull-left">
							<ul className="nav navbar-nav">
								<Link to="https://api.whatsapp.com/send?phone=523329269433&text=hola,%20buenos%20dias%20"
									target="-blank">
									<i id="wats" className="fab fa-whatsapp"></i></Link>
								<Link to="https://es-la.facebook.com/pg/Aceros8dejulio/posts/" target="-blank">
									<i id="face" className="fab fa-facebook"></i></Link>
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
						<Link to="/"><img src={logo} alt="Aceros" /></Link>
					</div>
					<div className="btn-group pull-right clearfix">
						<div className="btn-group">

							<ul className="dropdown-menu">
								<li><Link to="">Canada</Link></li>
								<li><Link to="">UK</Link></li>
							</ul>
						</div>

						<div className="btn-group">

							<ul className="dropdown-menu">
								<li><Link to="">Canadian Dollar</Link></li>
								<li><Link to="">Pound</Link></li>
							</ul>
						</div>
					</div>
				</div>
				<Landing      cantidadCarro={cambio}  />
				
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
		<Route exact path ="/Home/datosenvio" component ={Usuarios }/>
	    <Route  exact path="/" component={Galeriaprincipal}/>
		<Route  exact path="/cotizador" render={(props) => <Cotizador {...props} agregarCarrito={this.cambio.bind(this)}/>}/>
		<Route  exact path="/carrito" render={(props) => <Carrito {...props} carrito={this.state.productos}/>}/>
		<Route exact path="/home/register" component={Usuarios} />
        <Route exact path="/home/login" component={Usuarios} />
        <Route exact path="/home/perfil" component={Usuarios} />
		<Route exact path="/*" component={Error404}/>
        </Switch>
		
           </Fragment>
        );
    }
}