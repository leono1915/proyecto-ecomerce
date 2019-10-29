import React ,{Component,Fragment} from 'react';
import { withRouter } from 'react-router-dom';



class Placas extends Component{
    constructor(props){
      super(props);
      this.state={
         piezas:false,
         tramo:false,
         productos:[],
         tramo:1
    }
   
  
  
    }
    componentDidMount(){
        console.log(this.props.productos)
        this.setState({
           productos:this.props.productos
        })
       this.dibujar.bind(this);
    }
    dibujar(){
        const ALTURA_CANVAS = 200,
	ANCHURA_CANVAS = 400;

// Obtener el elemento del DOM
const canvas =document.getElementById('canvas');
canvas.width = ANCHURA_CANVAS;
canvas.height = ALTURA_CANVAS;
// Del canvas, obtener el contexto para poder dibujar
const contexto = canvas.getContext("2d");
// Estilo de dibujo
// Grosor de línea
contexto.lineWidth = 5;
// Color de línea
contexto.strokeStyle = "#212121";
// Color de relleno
contexto.fillStyle = "#000000";
// Las variables indican el nombre de cada argumento para
// la función arc
let x = 100,
	y = 100,
	radio = 50,
	anguloInicio = 0,
	anguloFin = Math.PI * 2;
contexto.arc(x, y, radio, anguloInicio, anguloFin);
// Hacemos que se dibuje
contexto.stroke();
// Lo rellenamos
contexto.fill();
    }
    calcular(){

    }
    onChange(e){
        console.log([e.target.value.name])
    }
    render(){
      
        return(
            <Fragment>
               <div className="row">
			<div className="col-sm-12">
            <canvas  id="canvas"/>
          
            </div>
            <div className="col-sm-12">
                   <div className="chose_area">
                    <div className="alert alert-primary" role="alert">
                 Necesitas ayuda? chatea con nosotros y aclaramos todas tus dudas 
                   </div>
                       <ul className="user_info">
                           <p>Escoja unidad de medida </p>
                           <br/>
                           <li > 
                               <label>Centimetros</label>
                               <input type="radio"/ >
                               <label>Pulgadas</label>
                               <input type="radio"/ >
                           </li>
                           <li className="single_field">
                           
                               <label>Seleccione</label>
                               <select onChange={this.onChange.bind(this)}
                               
                               name="nombre">
                                   <option>Cuadrado</option>
                                   <option>Rectángulo</option>
                                   <option>Cartabón</option>
                                   <option>Disco</option>
                                   <option>Brida</option>
                               </select>
                               
                           </li>
                           <li className="single_field">
                               <label>Medida 1</label>
                               <select onClick={this.onChange.bind(this)} 
                               onChange={this.onChange.bind(this)}
                               name="medida">
                               <option>Medida</option>
                               {  this.noRepeat=[... new Set(
                                         this.state.productos.map(e=>
                                             e.medida
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
                           <br/>
                               <label>Medida 2</label>
                               <select onClick={this.onChange.bind(this)} 
                               onChange={this.onChange.bind(this)} name="espesor">
                               <option>Espesor </option>
                               {   this.noRepeat=[... new Set(
                                        this.state.productos.map(e=>
                                                 e.espesor
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
                           
                           {/*!this.state.piezas? <li className="single_field">
                           <br/>
                               <label>Piezas</label>
                           <input  type="number" min="1" placeholder="Piezas" name="tramo"
                           onChange={this.onChange.bind(this)}
                           value={this.state.tramo}
                           />						
                                    </li>:""*/}
                       
                       </ul>
                       <button className="btn btn-default update" onClick={this.calcular.bind(this)}>Cotizar</button>
                       <button className="btn btn-default update" onClick={this.props.clickPlaca}>Cerrar</button>
                   </div>
               </div>
               </div>
            </Fragment>
        )
    }
}

export default Placas



