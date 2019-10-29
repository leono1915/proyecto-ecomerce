import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Landing extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  render() {
    const loginRegLink = (
        <div>
        <li><Link to="/home/login"><i className="fa fa-lock"></i> Login</Link></li>
        <li><Link to="/home/register"><i className="fa fa-registered"></i> Registro</Link></li>
        <li><Link to=""><i className="fa fa-shopping-cart"></i>Carrito ({JSON.parse(localStorage.getItem('p')).length}) </Link></li>
        
        </div>
    )

    const userLink = (
        <div>
            <li><Link to="/home"><i className="fa fa-user"></i>Mi Cuenta</Link></li>
            <li><Link to=""><i className="fa fa-shopping-cart"></i>Carrito ({JSON.parse(localStorage.getItem('p')).length}) </Link></li>
            <li><Link to=""
            onClick={this.logOut.bind(this)}
            ><i className="fa fa-sign-out-alt"></i>Salir</Link></li>
        </div>
      
    )

    return (
        <div className="col-md-8 clearfix ">
        <div className="shop-menu clearfix pull-right item active ">
            <h1><span> Rapidez</span> Es Nuestro Compromiso</h1>
            <ul className="nav navbar-nav pull-right">
            {localStorage.usertoken ? userLink : loginRegLink}  
                
                
            </ul>
        </div>
    </div>
         
        
    )
  }
}

export default withRouter(Landing)

