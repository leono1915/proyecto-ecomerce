import React, { Component} from 'react';


import { Link} from 'react-router-dom';
import axios from 'axios';


export default class Cotizador extends Component {
    constructor(){
        super();
        this.state={
            productos:[

			],
			medidas:[],
			espesores:[],
			nombre:'',
			medida:'',
			espesor:'',
            distancia:'',
            envio:'',
            subTotal:'',
            total:''
		}
		
	}
	componentDidMount(){
	    axios.get('/api/productosCotizador').then(response=>{
			console.log(response.data)
			  this.setState({productos:response.data})   
		})
	}
    Suma(){
        var j=this.state.cantidad+1;
        this.setState({[e.cantidad.target.name]:i})
      
    }
    Resta(){
       
        var j=this.state.cantidad-1;
        if (j==0) return 
        this.setState({cantidad:i})
        
    }
    onChange(e){
		let array=[];
		let arrayEspesores=[];
		var i=0;
		var j=0;
		var k=0;
		let dato=[e.target.name];
		
		switch (dato[0]) {
			case "nombre":
				this.setState({ nombre:e.target.value})
				
				this.state.productos.map(el=>{
				  if(el.nombre==e.target.value){
						array[i]=el.medida;
                        i++;
					}
				
				});
				this.setState({
					medidas:array,
					
				});	
				break;
				case "medida":
						
					this.state.productos.map(el=>{
						if(el.nombre+el.medida==this.state.nombre+e.target.value){
							  arrayEspesores[j]=el.espesor;
							  j++;
						  }
					  });
					  this.setState({
						  espesores:arrayEspesores
					  });
				break;	
				
			default:
			
				break;
		}
		
	   
    }
   
    render() {
		const mark={
			
				position: 'absolute',    /* posición absolute con respecto al padre */
				bottom: 0,            /* posicionada en la esquina inferior derecha */
				right: '5rem'
		
		}
	    const position={
			position: 'relative',    /* para poder posicionar el texto de forma absoluta */
            display: 'inline-block'
		}
		const iva=.16;
		
        return (
        <div>
			<section id="do_action">
		<div className="container">
		<div className="breadcrumbs">
				<ol className="breadcrumb">
				  <li><Link to="/" >Home</Link></li>
				  <li className="active">Cotizador</li>
				</ol>
			</div>
			<div className="heading">
				<h3 className="align-center">Qué necesitas ?</h3>
				<p>Haz Tu Cotización y Recíbelo en la Puerta de tu hogar </p>
			</div>
			<div className="row">
				<div className="col-sm-12">
					<div className="chose_area">
						
						<ul className="user_info">
							<li className="single_field">
								<label>Nombre</label>
								<select onChange={this.onChange.bind(this)}
							    
								name="nombre">
									<option>Nombre </option>
                                  {
									  this.noRepeat=[... new Set(
										  this.state.productos.map(e=>
											  e.nombre
										  )
									  )],
									  //console.log(noRepeat),
									  this.noRepeat.map(e=>{
									         return(
											<option>{e}</option>
											 )
											
									  })
									  

								  }
								  
								
								
									
									
								</select>
								
							</li>
							<li className="single_field">
								<label>Medida</label>
								<select onClick={this.onChange.bind(this)} 
								onChange={this.onChange.bind(this)}
								name="medida">
								<option>Medida</option>
								{  this.noRepeat=[... new Set(
										  this.state.medidas.map(e=>
											  e
										  )
									  )],
									  //console.log(noRepeat),
									  this.noRepeat.map(e=>{
									         return(
											<option>{e}</option>
											 )
											
									  })}
									
								</select>
							
							</li>
							<li className="single_field">
								<label>Espesor</label>
								<select onClick={this.onChange.bind(this)} 
								onChange={this.onChange.bind(this)} name="espesor">
								<option>Espesor </option>
								{   this.noRepeat=[... new Set(
										  this.state.espesores.map(e=>
											  e
										  )
									  )],
									  //console.log(noRepeat),
									  this.noRepeat.map(e=>{
									         return(
										
											<option>{e}</option>
											 )
											
									  })}
									
								</select>
								
							</li>
						</ul>
						<a className="btn btn-default update" href="">Cotizar</a>
						
					</div>
				</div>
			
			</div>
		</div>
	</section>
          <section id="cart_items">
		<div className="container">
			
			<div className="table-responsive cart_info">
				<table className="table table-condensed">
					<thead>
						<tr className="cart_menu">
							<td className="image">Categoría</td>
							<td className="description">Descripción</td>
							<td className="price">Precio</td>
							<td className="quantity">Cantidad</td>
							<td className="total">Total</td>
							<td></td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="cart_product">
								<Link to=" " ><img src={require('../../../images/img/angulo.jpg')} alt=""/>
								 <p>Angulo</p>
								</Link>
							</td>
							<td className="cart_description">
								<h4><Link to=" " >{"nombre"+this.state.nombre+" medida"+this.state.medida+" espesor"+this.state.espesor}</Link></h4>
								<p>ID: 1089772</p>
							</td>
							<td className="cart_price">
								<p>$59</p>
							</td>
							<td className="cart_quantity">
								<div className="cart_quantity_button">
                                    <Link to="cotizador"
                                    onClick={this.Suma.bind(this)}
                                    className="cart_quantity_up" > + </Link>
                                    <input className="cart_quantity_input" type="text" name="cantidad" 
                                    onChange={this.onChange.bind(this)}
                                     autoComplete="off" size="2"/>
                                    <Link   to="cotizador"
                                     onClick={this.Resta.bind(this)}
                                    className="cart_quantity_down" > - </Link>
								</div>
							</td>
							<td className="cart_total">
								<p className="cart_total_price">$59</p>
							</td>
							<td >
								<button className="btn btn-danger" 
                                
                                ><i className="fa fa-times"></i></button>
							</td>
						</tr>

						
					</tbody>
				</table>
			</div>
			<div className="row">
			<h2> Produtos sugeridos </h2>
			<div id="similar-product" className="carousel slide col-sm-6 breadcrumbs" data-ride="carousel">
								
							  
								  <div className="carousel-inner">
								       <div className="item active ">
										 <div style={position}>
										<a href=""><img 
										className="img-circle img-thumbnail"
										src={require('../../../images/img/angulo.jpg')} alt=""/></a>
										<div style={mark}>Angulo</div>
									     </div>
										<div style={position}>
										<a href=""><img 
										className="img-circle img-thumbnail"
										src={require('../../../images/img/solera.jpg')} alt=""/></a>
										<div style={mark}>Solera</div>
									     </div>
									<div style={position}>
										<a href=""><img 
										className="img-circle img-thumbnail"
										src={require('../../../images/img/viga.jpg')} alt=""/></a>
										<div style={mark}>Viga</div>
									     </div>
										<div style={position}>
										<a href=""><img 
										className="img-circle img-thumbnail"
										src={require('../../../images/img/tubu.jpg')} alt=""/></a>
										<div style={mark}>Tubular</div>
									     </div>
	
		
									  </div>
									  <div className="item">
										<a href=""><img 
										className="img-circle img-thumbnail"
										src={require('../../../images/img/ptr.jpg')} alt=""/></a>
										<a href=""><img 
										className="img-circle img-thumbnail"
										src={require('../../../images/img/canal.jpg')} alt=""/></a>
										<a href=""><img 
										className="img-circle img-thumbnail"
										src={require('../../../images/img/placa.jpg')} alt=""/></a>
										<a href=""><img 
										className="img-circle img-thumbnail"
										src={require('../../../images/img/viga.jpg')} alt=""/></a>
									  </div>
									  <div className="item">
										<a href=""><img 
										className="img-circle img-thumbnail"
										src={require('../../../images/img/cold.jpg')} alt=""/></a>
										<a href=""><img 
										className="img-circle img-thumbnail"
										src={require('../../../images/img/cua.jpg')} alt=""/></a>
										<a href=""><img 
										className="img-circle img-thumbnail"
										src={require('../../../images/img/lamina.jpg')} alt=""/></a>
										<a href=""><img 
										className="img-circle img-thumbnail"
										src={require('../../../images/img/viga.jpg')} alt=""/></a>
									  </div>
									  
								  </div>

							
								<a className="left item-control" href="#similar-product" data-slide="prev">
								  <i className="fa fa-angle-left"></i>
								</a>
								<a className="right item-control" href="#similar-product" data-slide="next">
								  <i className="fa fa-angle-right"></i>
								</a>
						  </div>
			<div className="col-sm-6">
					<div className="total_area">
						<ul>
							<li>Sub Total <span>$59</span></li>
							<li>Flete<span>$2</span></li>
							<li>Iva<span>10</span></li>
							<li>Total <span>$61</span></li>
						</ul>
							<a className="btn btn-default update" href="">Comprar</a>
							<a className="btn btn-default check_out" href="">Agregar Al Carrito</a>
					</div>
				</div>
				</div>
		</div>
	</section> 
    {/*<!--/#cart_items-->*/}
        </div>
           
        
        );
    }
}