

import React, { Component,Fragment } from 'react'
import ReactDOM from 'react-dom';
import logo from '../../../images/slider4.jpg';

export default class Galeriaprincipal  extends Component {
   
    render(){
        const style={
            fontSize: "15px",
        }
        const up={
            position: "fixed",
            zIndex: "2147483647",
             display: "block"
        }
        return(

           <Fragment>
               <section id="slider">
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<div id="slider-carousel" className="carousel slide" data-ride="carousel">
						<ol className="carousel-indicators">
							<li data-target="#slider-carousel" data-slide-to="0" className="active"></li>
							<li data-target="#slider-carousel" data-slide-to="1"></li>
							<li data-target="#slider-carousel" data-slide-to="2"></li>
							<li data-target="#slider-carousel" data-slide-to="3"></li>
							<li data-target="#slider-carousel" data-slide-to="4"></li>
							<li data-target="#slider-carousel" data-slide-to="5"></li>
						</ol>

						<div className="carousel-inner">
							<div className="item active">
								<div className="col-sm-6">
									<h1><span>P</span>-LASMA CUT</h1>
									<h2>BARRENOS</h2>
									<p>TODO TIPO DE BARRENOS </p>
									<button type="button" className="btn btn-default get2">COTIZA AHORA!</button>
								</div>
								<div className="col-sm-6">
									<img src={logo} className="girl img-responsive" alt="" />

								</div>
							</div>
							<div className="item">
								<div className="col-sm-6">
									<h1><span>P</span>-LASMA CUT</h1>
									<h2>GRABADOS</h2>
									<p>TODO TIPO DE GRABADOS </p>
									<button type="button" className="btn btn-default get2">COTIZA AHORA!</button>
								</div>
								<div className="col-sm-6">
									<img src={require('../../../images/slider10.jpg')} className="girl img-responsive" alt="" />

								</div>
							</div>

							<div className="item">
								<div className="col-sm-6">
									<h1><span>P</span>-LASMA CUT</h1>
									<h2>LETREROS</h2>
									<p>TODO TIPO DE DECORACIÓN EXTERIOR PARA TU HOGAR </p>
									<button type="button" className="btn btn-default get2">COTIZA AHORA!</button>
								</div>
								<div className="col-sm-6">
									<img src={require('../../../images/slider9.jpg')} className="girl img-responsive" alt="" />
								
								</div>
							</div>
							<div className="item">
									<div className="col-sm-6">
										<h1><span>P</span>-LASMA CUT</h1>
										<h2>LETREROS</h2>
										<p>TODO TIPO DE DECORACIÓN EXTERIOR PARA TU HOGAR </p>
										<button type="button" className="btn btn-default get2">COTIZA AHORA!</button>
									</div>
									<div className="col-sm-6">
										<img src={require('../../../images/slider6.jpg')} className="girl img-responsive" alt="" />
										{/*<!--	<img src="images/home/pricing.png" className="pricing" alt="" />-->*/}
									</div>
								</div>
								<div className="item">
										<div className="col-sm-6">
											<h1><span>P</span>-LASMA CUT</h1>
											<h2>LETREROS</h2>
											<p>TODO TIPO DE DECORACIÓN EXTERIOR PARA TU HOGAR </p>
											<button type="button" className="btn btn-default get2">COTIZA AHORA!</button>
										</div>
										<div className="col-sm-6">
											<img src={require('../../../images/slider4.jpg')} className="girl img-responsive" alt="" />
											{/*<!--	<img src="images/home/pricing.png" className="pricing" alt="" />-->*/}
										</div>
									</div>

						</div>

						<a href="#slider-carousel" className="left control-carousel hidden-xs" data-slide="prev">
							<i className="fa fa-angle-left"></i>
						</a>
						<a href="#slider-carousel" className="right control-carousel hidden-xs" data-slide="next">
							<i className="fa fa-angle-right"></i>
						</a>
					</div>

				</div>
			</div>
		</div>
	</section>
    <section>

<div className="container">
    <div className="row">
        <div className="col-sm-3">
            <div className="left-sidebar">
                <h2>Categorías</h2>
                <div className="panel-group category-products" id="accordian">
                   
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordian" href="#sportswear">
                                    <span className="badge pull-right"><i className="fa fa-plus"></i></span>
                                    ÁNGULO
                                </a>
                            </h4>
                        </div>
                        <div id="sportswear" className="panel-collapse collapse">
                            <div className="panel-body">
                                <ul>
                                    <li><a href="#">1" X 1/8</a></li>
                                    <li><a href="#">1" X 3/16 </a></li>
                                    <li><a href="#">1" X 1/4</a></li>
                                    <li><a href="#">1 1/4" X 1/8 </a></li>
                                    <li><a href="#">1 1/4" X 3/16 </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordian" href="#mens">
                                    <span className="badge pull-right"><i className="fa fa-plus"></i></span>
                                    SOLERA
                                </a>
                            </h4>
                        </div>
                        <div id="mens" className="panel-collapse collapse">
                            <div className="panel-body">
                                <ul>
                                    <li><a href="#">1" X 1/8</a></li>
                                    <li><a href="#">1" X 3/16 </a></li>
                                    <li><a href="#">1" X 1/4</a></li>
                                    <li><a href="#">1 1/4" X 1/8 </a></li>
                                    <li><a href="#">1 1/4" X 3/16 </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordian" href="#womens">
                                    <span className="badge pull-right"><i className="fa fa-plus"></i></span>
                                    PTR
                                </a>
                            </h4>
                        </div>
                        <div id="womens" className="panel-collapse collapse">
                            <div className="panel-body">
                                <ul>
                                    <li><a href="#">1" X 1/8</a></li>
                                    <li><a href="#">1" X 3/16 </a></li>
                                    <li><a href="#">1" X 1/4</a></li>
                                    <li><a href="#">1 1/4" X 1/8 </a></li>
                                    <li><a href="#">1 1/4" X 3/16 </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                  
                </div>
              

                <div className="brands_products">
                
                    <h2>Existencias</h2>
                    <div className="brands-name">
                        <ul className="nav nav-pills nav-stacked">
                            <li><a href="#"> <span className="pull-right">(50)</span>ÁNGULO</a></li>
                            <li><a href="#"> <span className="pull-right">(56)</span>SOLERA</a></li>
                            <li><a href="#"> <span className="pull-right">(27)</span>PTR</a></li>

                        </ul>
                    </div>
                </div>

                <div className="price-range">
                    <h2>RANGO PARA ENVÍO GRATIS DENTRO DE LA ZMG</h2>
                    <div className="well text-center">
                        <input type="text" className="span2" value="" data-slider-min="1500" data-slider-max="2500"
                            data-slider-step="5" data-slider-value="[1500,2500]" id="sl2"/><br />
                        <b className="pull-left">$ 1500</b> <b className="pull-right">$ 2500</b>
                    </div>
                </div>

                <div className="shipping text-center">
                    <img src="images/download.jpg" alt="" />
                </div>

            </div>
        </div>

        <div className="col-sm-9 padding-right">
            <div className="features_items">
                <h2 className="title text-center">NUESTROS PRODUCTOS</h2>
                <div className="col-sm-4">
                    <div className="product-image-wrapper">
                        <div className="single-products">
                            <div className="productinfo text-center">
                                <img src={require('../../../images/img/angulo.jpg')} alt="" />
                                <h2>ÁNGULO</h2>

                            </div>
                            <div className="product-overlay">
                                <div className="overlay-content">
                                    <h2>Desde 3/4"</h2>
                                    <h2>Hasta</h2>
                                    <h2>6" Pulgadas</h2>
                                    <h2>Desde 30 cm de largo </h2>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-sm-4">
                    <div className="product-image-wrapper">
                        <div className="single-products">
                            <div className="productinfo text-center">
                                <img src={require('../../../images/img/canal.jpg')}alt="" />
                                <h2>CANAL</h2>

                            </div>
                            <div className="product-overlay">
                                <div className="overlay-content">
                                    <h2>Desde 3" Pulgadas</h2>
                                    <h2>Hasta</h2>
                                    <h2>12" Pulgadas</h2>
                                    <h2>Desde 30 cm de largo </h2>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="product-image-wrapper">
                        <div className="single-products">
                            <div className="productinfo text-center">
                                <img src={require('../../../images/img/placa.jpg')} alt="" />
                                <h2>PLACA</h2>


                            </div>
                            <div className="product-overlay">
                                <div className="overlay-content">
                                    <h2>Desde 3/16 </h2>
                                    <h2>Hasta</h2>
                                    <h2>3 pulgadas de espesor</h2>
                                    <h2>A la medida que usted requiera</h2>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="product-image-wrapper">
                        <div className="single-products">
                            <div className="productinfo text-center">
                                <img src={require('../../../images/img/cold.jpg')} alt="" />
                                <h2>COLD ROLL</h2>


                            </div>
                            <div className="product-overlay">
                                <div className="overlay-content">
                                    <h2>desde 1/2 </h2>
                                    <h2>hasta</h2>
                                    <h2>1 1/2" pulgadas de espesor</h2>


                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="product-image-wrapper">
                        <div className="single-products">
                            <div className="productinfo text-center">
                                <img src={require('../../../images/img/lamina.jpg')} alt="" />
                                <h2>LÁMINAS</h2>

                            </div>
                            <div className="product-overlay">
                                <div className="overlay-content">
                                    <h2>Desde Calibre 10</h2>
                                    <h2>Hasta</h2>
                                    <h2>Calibre 20</h2>
                                    <h2>Desde 30 cm en ancho de 3' Y 4' pies </h2>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
                <div className="col-sm-4">
                    <div className="product-image-wrapper">
                        <div className="single-products">
                            <div className="productinfo text-center">
                                <img src={require('../../../images/img/ant.jpg')} alt="" />
                                <h2>ANTIDERRAPANTES</h2>

                            </div>
                            <div className="product-overlay">
                                <div className="overlay-content">
                                    <h2>Desde Cal 10</h2>
                                    <h2>Hasta</h2>
                                    <h2>Cal 14</h2>
                                    <h2>3' y 4' Pies </h2>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>


                <div className="col-sm-4">
                    <div className="product-image-wrapper">
                        <div className="single-products">
                            <div className="productinfo text-center">
                                <img src={require('../../../images/img/cua.jpg')} alt="" />
                                <h2>CUADRADO</h2>

                            </div>
                            <div className="product-overlay">
                                <div className="overlay-content">
                                    <h2>Desde 3/8</h2>
                                    <h2>Hasta</h2>
                                    <h2>1" Pulgada</h2>
                                    <h2>Desde 30 cm de largo </h2>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-sm-4">
                    <div className="product-image-wrapper">
                        <div className="single-products">
                            <div className="productinfo text-center">
                                <img src={require('../../../images/img/polin.jpg')} alt="" />
                                <h2>POLÍN MONTÉN</h2>

                            </div>
                            <div className="product-overlay">
                                <div className="overlay-content">
                                    <h2>Desde 3" Pulgadas</h2>
                                    <h2>Hasta</h2>
                                    <h2>6" Pulgadas</h2>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-sm-4">
                    <div className="product-image-wrapper">
                        <div className="single-products">
                            <div className="productinfo text-center">
                                <img src={require('../../../images/img/ptr.jpg')} alt="" />
                                <h2>PTR</h2>

                            </div>
                            <div className="product-overlay">
                                <div className="overlay-content">
                                    <h2>Desde 1" Pulgada</h2>
                                    <h2>Hasta</h2>
                                    <h2>6" Pulgadas</h2>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-sm-4">
                    <div className="product-image-wrapper">
                        <div className="single-products">
                            <div className="productinfo text-center">
                                <img src={require('../../../images/img/redondo.jpg')} alt="" />
                                <h2>REDONDOS</h2>

                            </div>
                            <div className="product-overlay">
                                <div className="overlay-content">
                                    <h2>Desde 1/4" </h2>
                                    <h2>Hasta</h2>
                                    <h2>1" Pulgada</h2>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-sm-4">
                    <div className="product-image-wrapper">
                        <div className="single-products">
                            <div className="productinfo text-center">
                                <img src={require('../../../images/img/solera.jpg')}alt="" />
                                <h2>SOLERA</h2>

                            </div>
                            <div className="product-overlay">
                                <div className="overlay-content">
                                    <h2>Desde 1/2"</h2>
                                    <h2>Hasta</h2>
                                    <h2>10" Pulgadas</h2>
                                    <h2>Espesores de 1/8 hasta 1" </h2>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-sm-4">
                        <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                    <img src={require('../../../images/img/tubo.jpg')} alt="" />
                                    <h2>TUBO</h2>
                                    
                                </div>
                                <div className="product-overlay">
                                    <div className="overlay-content">
                                            <h2>Desde 1/2" </h2>
                                            <h2>Hasta</h2>
                                            <h2>12" Pulgadas</h2>
                                            
                                           </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-sm-4">
                                <div className="product-image-wrapper">
                                    <div className="single-products">
                                        <div className="productinfo text-center">
                                            <img src={require('../../../images/img/tubu.jpg')} alt="" />
                                            <h2>TUBULAR</h2>
                                            
                                        </div>
                                        <div className="product-overlay">
                                            <div className="overlay-content">
                                                    <h2>Desde 3/4"</h2>
                                                    <h2>Hasta</h2>
                                                    <h2>2" Pulgadas</h2>
                                                    
                                                   </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="col-sm-4">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src={require('../../../images/img/vari.jpg')}alt="" />
                                                    <h2>VARILLA CORRUGADA</h2>
                                                    
                                                </div>
                                                <div className="product-overlay">
                                                    <div className="overlay-content">
                                                            <h2>Desde 3/8"</h2>
                                                            <h2>Hasta</h2>
                                                            <h2>3/4" </h2>
                                                            
                                                           </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>

                <div className="col-sm-4">
                    <div className="product-image-wrapper">
                        <div className="single-products">
                            <div className="productinfo text-center">
                                <img src={require('../../../images/img/viga.jpg')} alt="" />
                                <h2>VIGA</h2>

                            </div>
                            <div className="product-overlay">
                                <div className="overlay-content">
                                    <h2>Desde 4" Pulgadas</h2>
                                    <h2>Hasta</h2>
                                    <h2>12" Pulgadas</h2>
                                    <h2>Desde 30 cm de largo </h2>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </div>

</div>




</section>
           </Fragment>
        );
    }
} 


ReactDOM.render(<Galeriaprincipal />, document.getElementById('galery'));