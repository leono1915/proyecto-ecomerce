import React, { Component} from 'react';
import logo from '../../../images/img/logo_opt.png';
import notFound from '../../../images/404/404.png';

import { Link} from 'react-router-dom';


export default class Error404 extends Component {
    render() {
        return (
           
               
            <div className="container text-center">
            <div className="logo-404">
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            <div className="content-404">
                <img src={notFound} className="img-responsive" alt="" />
                <h1><b>UPPS!</b> Página no Encontrada</h1>
                <p>UPS... La Página solicitada no existe</p>
                <h3><Link to="/">Regresa a la Página Principal</Link></h3>
            </div>
        </div>
           
        
        );
    }
}