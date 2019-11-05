import React, { Component} from 'react';
import logo from '../../../images/img/logo_opt.png';
import notFound from '../../../images/404/404.png';

import {withRouter, Link} from 'react-router-dom';


 class Carrito extends Component {
    constructor(props){
        super(props);
        this.state={
         productos:[]
        }
        
    }
  
    componentDidMount(){
       
        this.setState(item=>{
              item.productos.push(this.props.carrito)

              const lis=item.productos;
              return {
                  lis,
              }
        })
        if(this.state.productos.length===0){
            this.setState({productos:JSON.parse(localStorage['carrito'])})
            }
        
    }

    render() {
       // console.log(JSON.parse(localStorage['p']))
       console.log(this.state.productos)
        return (
           
               
            <div className="container">
            <h1 className="text-center mt-5"> componente carrito </h1>
           
        </div>
           
        
        );
    }
}
export default withRouter(Carrito) 