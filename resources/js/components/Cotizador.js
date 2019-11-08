import React, { Component} from 'react';
import Placas from './PlacasCotizador';
import { Link} from 'react-router-dom';
import axios from 'axios';
/*
,()=>{
				setTimeout(() => {
					this.setState({
						banderaCarro:false,
						items:this.state.productosCotizados.length
					 })
				 }, 1000);  
			 } */


export default class Cotizador extends Component {
    constructor(props){
        super(props);
        this.state={
            productos:[],
			medidas:[],
			espesores:[],
			productosCotizados:[],
			id:'',
			nombre:'',
			medida:'',
			espesor:'',
            distancia:'',
            envio:'',
            subTotal:'',
			total:'',
			errorNoEncontrado:false,
			metrosBandera:false,
			piezas:false,
			placa:false,
			metro:0,
			tramo:1,
			banderaCarro:true,
			items:0

		}
	
		
	}
	async componentDidMount(){
	    await axios.get('/api/productosCotizador').then(response=>{
			//console.log(response.data)
			  this.setState({productos:response.data})  
		})
		if(this.state.productosCotizados.length===0){
			this.setState({
				productosCotizados:JSON.parse(localStorage['p']),
				
			})
		}
   
	}
	clickPlaca(){
		this.setState({
			placa:true
		})
		
	}
	clickPlacaCerrar(){
		console.log('entro')
		this.setState({
			placa:false
		})
	}
	eliminarProductos(){
		this.props.agregarCarrito(this.state.productosCotizados)
		this.setState({
			productosCotizados:[]
		})
		localStorage.clear();
	}
	Calcular(){
		
		let nombre=this.state.nombre+this.state.medida+this.state.espesor;
		let id=this.state.id;
		this.state.productos.map(e=>{
			
			  if(nombre===e.nombre+e.medida+e.espesor){
				  //console.log(e.nombre+e.medida+e.espesor+"encontrado"+e.peso+e.id+e.precio)
				  if(id===e.id){
					alert('ya seleccionó este producto si desea puede incrementar la cantidad desde el check box')
					return;
				}
				  const item={id:e.id,nombre:e.nombre,medida:e.medida,espesor:e.espesor,peso:Number(e.peso),precio:Number(e.precio),
				  cantidad:1,total:1}
				  this.setState(estate=>{
					estate.productosCotizados.push(item); 
					
				
				
					const list=estate.productosCotizados;
					
						localStorage.setItem('p',JSON.stringify(this.state.productosCotizados));
				
				// console.log(JSON.parse(localStorage['p']))
                   //console.log(item+"item",{list}+"list",estate.productosCotizados+"estate.pro")
					return{
						list,
						id:e.id,
					     }
				  } )
				 			
			  }
			  else{
				  this.setState({
					  errorNoEncontrado:true
				  })
				  return;
			  }
			  
		})
		
	}
	eliminarProducto(e){
		var productos=this.state.productosCotizados;
			
			   productos.splice(e,1);
				this.setState({productosCotizados:productos,
				id:''
				})	
				localStorage.setItem('p',JSON.stringify(this.state.productosCotizados));
	}
    Suma(e){
	this.state.productosCotizados[e].cantidad++;
	this.state.productosCotizados[e].total=this.state.productosCotizados[e].precio*this.state.productosCotizados[e].cantidad
		/*this.setState(state=>{
	
			const list=state.productosCotizados[e].cantidad+=10;
		  
			return{list,}
		 }
			  
		   )   
 */
    }
    Resta(e){
       if(this.state.productosCotizados[e].cantidad==1) return;
	   this.state.productosCotizados[e].cantidad--;
	   this.state.productosCotizados[e].total=this.state.productosCotizados[e].precio*this.state.productosCotizados[e].cantidad
    }
    onChange(e){
		let array=[];
		let arrayEspesores=[];
		var i=0;
		var j=0;
		let bandera=false;
		let banderaPiezas=false;
		let dato=[e.target.name];
		switch (e.target.value) {
			case "TUBULAR":
			case "VARILLA CORRUGADA":
			case "POLIN MONTEN":
			case "PULIDO":
			bandera=true;	   
				break;
			case "VIGA IPS":
			case "VIGA IPR":
			case "CANAL":
			case "INSUMO":
			case "ABRASIVO":
			banderaPiezas=true;
		    break;
			default:
				break;
		}
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
					metros:bandera,
					piezas:banderaPiezas
				});	
				break;
				case "medida":
						this.setState({ medida:e.target.value})	
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
				case "espesor":
						this.setState({ espesor:e.target.value})
				break;
			default:
			 this.setState({
				 [e.target.name]:e.target.value
			 })
				break;
		}
		
	   
    }
   
    render() {
		
		const mark={
			
				position: 'absolute',    /* posición absolute con respecto al padre */
				bottom: 0,            /* posicionada en la esquina inferior derecha */
				right: '5rem'
		
		}
		const marginLeft={
			   marginLeft:'10px'
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
				<p>Cotiza! Haz Tu Pedido y Recíbelo en la Puerta de tu Domicilio </p>
				<p>No pagues fletes costosos! ni pierdas tiempo y dinero buscando <br/> tenemos todo lo que necesitas</p>
			</div>
			<div className="row">
				<div className="col-sm-12">
					<div className="chose_area">
					<h4 style={marginLeft}>Perfiles Viga y Lámina</h4>
					{this.state.metros? <div class="alert alert-primary" role="alert">
                  producto solo disponible por pieza
                    </div>:""}
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
											<option
											key={e} value={e}
											>{e}</option>
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
											<option
											key={e} value={e}
											>{e}</option>
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
										
											<option
											key={e} value={e}
											>{e}</option>
											 )
											
									  })}
									
								</select>
								
							</li>
							
							{!this.state.piezas? <li className="single_field">
							<br/>
								<label>Piezas</label>
							<input  type="number" min="1" placeholder="Piezas" name="tramo"
							onChange={this.onChange.bind(this)}
							value={this.state.tramo}
							/>						
							</li>:""}
							{!this.state.metros? 
							
							<li className="single_field">
								<br/>
								<label>Metros</label>
							<input  type="number" min="1" placeholder="Metros" name="metro" 
							onChange={this.onChange.bind(this)}
							value={this.state.metro}
							/>						
							</li>:""
							}
						</ul>
						<button className="btn btn-default update" onClick={this.Calcular.bind(this)}>Cotizar</button>
						<button className="btn btn-default update" onClick={this.clickPlaca.bind(this)}>Cotizar Placa</button>
					</div>
				</div>
				
			</div>
	          {this.state.placa?<Placas productos={this.state.productos.filter(e=>e.nombre=='ANGULO')}
										clickPlaca={this.clickPlacaCerrar.bind(this)}
			  />:''}
		
				
		</div>{/*cierra div container de cotizadores*/}
		
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
						{ 
                           
						  this.state.productosCotizados.map((e,index)=>{
                                 
						return(
						<tr key={e.id}>
							<td className="cart_product">
								<Link to="cotizador" ><img src={require('../../../images/img/angulo.jpg')} alt=""/>
								 <p>{e.nombre.toUpperCase()}</p>
								</Link>
							</td>
							<td className="cart_description">
								<h4><Link to="cotizador" >{"nombre"+e.nombre+" medida"+e.medida+" espesor"+e.espesor}</Link></h4>
								<p>ID: {e.id}</p>
							</td>
							<td className="cart_price">
								<p>{e.precio}</p>
							</td>
							<td className="cart_quantity">
								<div className="cart_quantity_button">
                                    <Link to="cotizador"
                                    onClick={this.Suma.bind(this,index)}
                                    className="cart_quantity_up" > + </Link>
                                    <input className="cart_quantity_input" type="text" name="cantidad" 
									onChange={this.onChange.bind(this)}
									value={e.cantidad}
                                     autoComplete="off" size="2"/>
                                    <Link   to="cotizador"
                                     onClick={this.Resta.bind(this,index)}
                                    className="cart_quantity_down" > - </Link>
								</div>
							</td>
							<td className="cart_total">
								<p className="cart_total_price">{e.total}</p>
							</td>
							<td >
								<button className="btn btn-danger" 
                                onClick={this.eliminarProducto.bind(this,index)}
                                ><i className="fa fa-times"></i></button>
							</td>
						</tr>
						)
							})
						}

						
					</tbody>
				</table>
			</div>
			<div className="row">
			<h2> Produtos sugeridos </h2>
			<div id="similar-product" className="carousel slide col-sm-6 breadcrumbs" data-ride="carousel">
								
							  
								  <div className="carousel-inner">
								       <div className="item active ">
										 <div style={position}>
										<Link to="cotizador"><img 
										className="img-circle img-thumbnail"
										src={require('../../../images/img/angulo.jpg')} alt=""/></Link>
										<div style={mark}>Angulo</div>
									     </div>
										<div style={position}>
										<Link to="cotizador"><img 
										className="img-circle img-thumbnail"
										src={require('../../../images/img/solera.jpg')} alt=""/></Link>
										<div style={mark}>Solera</div>
									     </div>
									<div style={position}>
										<Link to="cotizador"><img 
										className="img-circle img-thumbnail"
										src={require('../../../images/img/viga.jpg')} alt=""/></Link>
										<div style={mark}>Viga</div>
									     </div>
										<div style={position}>
										<Link to="cotizador"><img 
										className="img-circle img-thumbnail"
										src={require('../../../images/img/tubu.jpg')} alt=""/></Link>
										<div style={mark}>Tubular</div>
									     </div>
	
		
									  </div>
									  <div className="item">
										<Link to="cotizador"><img 
										className="img-circle img-thumbnail"
										src={require('../../../images/img/ptr.jpg')} alt=""/></Link>
										<Link to="cotizador"><img 
										className="img-circle img-thumbnail"
										src={require('../../../images/img/canal.jpg')} alt=""/></Link>
										<Link to="cotizador"><img 
										className="img-circle img-thumbnail"
										src={require('../../../images/img/placa.jpg')} alt=""/></Link>
										<Link to="cotizador"><img 
										className="img-circle img-thumbnail"
										src={require('../../../images/img/viga.jpg')} alt=""/></Link>
									  </div>
									  <div className="item">
										<Link to="cotizador"><img 
										className="img-circle img-thumbnail"
										src={require('../../../images/img/cold.jpg')} alt=""/></Link>
										<Link to="cotizador"><img 
										className="img-circle img-thumbnail"
										src={require('../../../images/img/cua.jpg')} alt=""/></Link>
										<Link to="cotizador"><img 
										className="img-circle img-thumbnail"
										src={require('../../../images/img/lamina.jpg')} alt=""/></Link>
										<Link to="cotizador"><img 
										className="img-circle img-thumbnail"
										src={require('../../../images/img/viga.jpg')} alt=""/></Link>
									  </div>
									  
								  </div>

							
								<Link className="left item-control" to="#similar-product" data-slide="prev">
								  <i className="fa fa-angle-left"></i>
								</Link>
								<Link className="right item-control" to="#similar-product" data-slide="next">
								  <i className="fa fa-angle-right"></i>
								</Link>
						  </div>
			<div className="col-sm-6">
					<div className="total_area">
						<ul>
							<li>Sub Total <span>$59</span></li>
							<li>Flete<span>$2</span></li>
							<li>Iva<span>10</span></li>
							<li>Total <span>$61</span></li>
						</ul>
							<Link className="btn btn-default update" to="#top"
							onClick={
							         this.eliminarProductos.bind(this)}
							  
							>Agregar Al Carrito</Link>
							
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