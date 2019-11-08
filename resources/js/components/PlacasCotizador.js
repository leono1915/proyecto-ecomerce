import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';



class Placas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            piezas: false,
            tramo: false,
            productos: [],
            tramo: 1
        }



    }
    componentDidMount() {
        console.log(this.props)
        this.setState({
            productos: this.props.productos
        })
      
    }
   
    calcular() {

    }
    onChange(e) {
        console.log([e.target.value.name])
    }
    render() {
        const marginLeft = {
            marginLeft: '10px',
            marginTop: '20px'
        }
        return (
            <Fragment>
                <div className="row">
                   
                    <div className="col-sm-12">
                        <div className="chose_area">
                            <div className="alert alert-primary" role="alert">
                                Necesitas ayuda? chatea con nosotros y aclaramos todas tus dudas
                   </div>
                            <div className="row">
                                <div className="col-sm-4" >
                                    <label class="radio-inline" style={marginLeft}>
                                        <input type="radio" name="opcionMedida" />Pulgadas</label>
                                    <label class="radio-inline" style={marginLeft}>
                                        <input type="radio" name="opcionMedida" />Centimetros</label>
                                </div>
                                <div className="col-sm-4" >
                                    <select  style={marginLeft} onChange={this.onChange.bind(this)}

                                        name="nombre">
                                        <option>Cuadrado</option>
                                        <option>Rectángulo</option>
                                        <option>Cartabón</option>
                                        <option>Disco</option>
                                        <option>Brida</option>
                                    </select>

                                </div>
                                <div className="col-md-4">
                                    <label style={marginLeft}>Medida <input type="number"   />   </label>

                                </div>

                            </div>
                            <div className="row" style={{marginTop:'20px'}}>
                            <div className="col-md-8 col-sm-12">
                                <div className="row">
                                <div className="col-md-3 col-sm-12">
                                 <div className="row" style={{marginLeft:'2px'}}>
                                 <label  >
                                        <input type="radio" name="opcionEspesor" />1 3/4"</label>
                                        <label  >
                                        <input type="radio" name="opcionEspesor" />2"</label>
                                 </div>
                                       <div className="row " style={{marginLeft:'2px'}}>
                                        <label  >
                                        <input type="radio" name="opcionEspesor" />2 1/2"</label>
                                        <label  >
                                        <input type="radio" name="opcionEspesor" />3"</label>
                                       </div>
                                  </div>

                                 <div className="col-md-3 col-sm-12">
                                 <div className="row">
                                 <label  >
                                        <input type="radio" name="opcionEspesor" />1 3/4"</label>
                                        <label  >
                                        <input type="radio" name="opcionEspesor" />2"</label>
                                 </div>
                                       <div className="row">
                                        <label  >
                                        <input type="radio" name="opcionEspesor" />2 1/2"</label>
                                        <label  >
                                        <input type="radio" name="opcionEspesor" />3"</label>
                                       </div>
                                  </div>
                                   <div className="col-md-3 col-sm-12">
                                 <div className="row">
                                 <label  >
                                        <input type="radio" name="opcionEspesor" />1 3/4"</label>
                                        <label  >
                                        <input type="radio" name="opcionEspesor" />2"</label>
                                 </div>
                                       <div className="row">
                                        <label  >
                                        <input type="radio" name="opcionEspesor" />2 1/2"</label>
                                        <label  >
                                        <input type="radio" name="opcionEspesor" />3"</label>
                                       </div>
                                  </div>
                                  <div className="col-md-3 col-sm-12">
                                 <div className="row">
                                 <label  >
                                        <input type="radio" name="opcionEspesor" />1 3/4"</label>
                                        <label  >
                                        <input type="radio" name="opcionEspesor" />2"</label>
                                 </div>
                                       <div className="row">
                                        <label  >
                                        <input type="radio" name="opcionEspesor" />2 1/2"</label>
                                        <label  >
                                        <input type="radio" name="opcionEspesor" />3"</label>
                                       </div>
                                  </div>
                                
                                </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="thumbnail">
                                  <img className="img-responsive" src={require('../../../images/img/cold.jpg')}/>
                              </div>
                            </div>
                            </div>

                            <button className="btn btn-default update" onClick={this.calcular.bind(this)}>Cotizar</button>
                            <button className="btn btn-default update" onClick={this.props.clickPlaca}>Cerrar</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(Placas)



