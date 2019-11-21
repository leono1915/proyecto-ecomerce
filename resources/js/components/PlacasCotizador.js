import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';



class Placas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            piezas: false,
            tramo: false,
            productos: [],
            tramo: 1,
            tipoPieza:'Cuadrado'
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
        console.log([e.target.name])
        switch (e.target.value) {
            case 'Brida':
                this.setState({
                    tipoPieza:e.target.value
                })
                break;
                case 'Cartabon':
                this.setState({
                    tipoPieza:e.target.value
                })
                break;
                case 'Disco':
                this.setState({
                    tipoPieza:e.target.value
                })
                break;
                case 'Rectangulo':
                this.setState({
                    tipoPieza:e.target.value
                })
                break;
        
            default:
                    this.setState({
                        tipoPieza:'Cuadrado'
                    })
                break;
        }
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
                            <div className="row container">
                            <div className='col-md-3 col-sm-6'>
                                <label className='pull-right'> Unidad de Medida</label>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className='container'>
                                    <label  className="radio-inline" >
                                        <input type="radio" name="opcionMedida" />Pulgadas</label>
                                    <label className="radio-inline">
                                        <input  type="radio" name="opcionMedida" />Centimetros</label>
                                </div>
                                </div>
                                <div className='col-md-3 col-sm-6'>
                                <label className='pull-right'> Tipo de figura</label>
                                </div>
                                <div className="col-md-3 col-sm-6" >
                                   
                                    <select onChange={this.onChange.bind(this)}

                                        name="nombre">
                                        <option>Cuadrado</option>
                                        <option>Rectangulo</option>
                                        <option>Cartabon</option>
                                        <option>Disco</option>
                                        <option>Brida</option>
                                    </select>

                                </div>
                                <div className="col-md-4">
                                    <label>Medida <input type="number"   />   </label>

                                </div>
                                <div className="col-md-4">
                                    <label >Medida <input type="number"   />   </label>

                                </div>

                            </div>
                            <div className="row container">
                            {}
                            <div className="col-sm-4">
                              <div className="thumbnail">
                                  <img className="img-responsive" src={require(`../../../images/img/${this.state.tipoPieza}.png`)}/>
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



