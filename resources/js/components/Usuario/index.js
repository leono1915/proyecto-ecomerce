  
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'



import Login from './Login'
import Register from './Register'
import Profile from './Profile'

class Usuarios extends Component {
  render() {
    return (
     
       <div>
            
            <Route exact path="/home/register" component={Register} />
            <Route exact path="/home/login" component={Login} />
            <Route exact path="/home/profile" component={Profile} />
            </div>
     
    )
  }
}

export default Usuarios