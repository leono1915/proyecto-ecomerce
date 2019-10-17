

import React, { Component,Fragment } from 'react'
import ReactDOM from 'react-dom';


export default class Footer extends Component {
   
    render(){
        const style={
            fontSize: "15px",
        }
        const up={
            position: "fixed",
            zIndex: "2147483647",
             display: "block"
        }
        const mt={
            marginTop:'80px',
        }
        return(

           <Fragment>
                <footer id="footer" style={mt}>
            
                <div className="footer-top">
			<div className="container">
				<div className="row">
					<div className="col-sm-2">
						<div className="companyinfo">
							<h2><span>p</span>-lasma cut</h2>
							<p>CORTE CON PLASMA CNC <br/> VISITE NUESTROS SERVICIOS </p>
						</div>
					</div>
					<div className="col-sm-7">
						
						
						<div className="col-sm-3">
							<div className="video-gallery text-center">
								<a href="#">
									<div className="iframe-img">
										<img src={require('../../../images/visa.png')} alt="" />
									</div>
									
								</a>
								
							</div>
						</div>
						
						<div className="col-sm-3">
							<div className="video-gallery text-center">
								<a href="#">
									<div className="iframe-img">
										<img src={require('../../../images/master.png')} alt="" />
									</div>
									
								</a>
								
							</div>
						</div>
						
						<div className="col-sm-3">
							<div className="video-gallery text-center">
								<a href="#">
									<div className="iframe-img">
										<img src={require('../../../images/pay.png')} alt="" />
									</div>
									
								</a>
								
							</div>
						</div>
					</div>
					<div className="col-sm-3">
						<div className="address">
							<img src={require('../../../images/home/map.png')} alt="" />
							<p>Una empresa de calidad mundial</p>
						</div>
					</div>
				</div>
			</div>
		</div>
    
            <div className="footer-widget">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="single-widget">
                                <h2>Servicios</h2>
                                <ul className="nav nav-pills nav-stacked">
                                    <li><a href="#">Corte de placa</a></li>
                                    <li><a href="#">Venta Menudeo</a></li>
                                    <li><a href="#">Corte con Pantógrafo</a></li>
                                    <li><a href="#">Entrega a Domicilio</a></li>
                                    <li><a href="#">Plasma y Oxicorte</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="single-widget">
                                <h2>productos</h2>
                                <ul className="nav nav-pills nav-stacked">
                                    <li><a href="#">Perfiles Especiales</a></li>
                                    <li><a href="#">Láminas</a></li>
                                    <li><a href="#">Placa</a></li>
                                    <li><a href="#">Vigas</a></li>
                                    <li><a href="#">Abrasivos</a></li>
                                </ul>
                            </div>
                        </div>
    
                        <div className="col-sm-2">
                            <div className="single-widget">
                                <h2>sobre nosotros</h2>
                                <ul className="nav nav-pills nav-stacked">
                                    <li><a href="#">Contacto</a></li>
                                    <li><a href="#">Visión</a></li>
                                    <li><a href="#">Misión</a></li>
                                    <li><a href="#">Valores</a></li>
                                    <li><a href="#">Sucursales</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3 col-sm-offset-1">
                            <div className="single-widget">
                                <h2>Recibir promociones</h2>
                                <form action="#" className="searchform">
                                    <input type="text" placeholder="Dirección de correo electrónico" />
                                    <button type="submit" className="btn btn-default"><i className="fas fa-search" style={style}></i></button>
                                    <p>Ingrese su correo y obtenga <br />nuestras promociones y catalogo...</p>
                                </form>
                            </div>
                        </div>
    
                    </div>
                </div>
            </div>
    
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <p className="pull-left">Copyright © 2019 Aceros 8 de julio. todos los derechos reservados.</p>
    
                    </div>
                </div>
            </div>
    
        </footer>
        <a id="scrollUp" href="#top" style={up}><i className="fa fa-angle-up"></i></a>
           </Fragment>
        );
    }
} 


