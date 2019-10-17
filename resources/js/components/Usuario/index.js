  
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'



import Login from './Login'
import Register from './Register'
import Profile from './Profile'
import Home from './Home';

class Usuarios extends Component {
  render() {
    return (
     
       <div>
            <Route exact path="/home" component={Home} />
            <Route exact path="/home/datosenvio" component={Home} />
            <Route exact path="/home/register" component={Register} />
            <Route exact path="/home/login" component={Login} />
            <Route exact path="/home/perfil" component={Home} />
            </div>
     
    )
  }
}

export default Usuarios