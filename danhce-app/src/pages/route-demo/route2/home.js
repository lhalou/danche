import React, { Component } from 'react'
import {Link } from 'react-router-dom'

class Home extends Component {
  render(){
    return (
      
        <div>
          <ul>
            <li>
              <Link to = "/main">Home111</Link>
            </li>
            <li>
              <Link to = "/about">about111</Link>
            </li>
            <li>
              <Link to = "/topics">topics1111</Link>
            </li>
          </ul>
          {this.props.children}
      </div>
    )
  }
}
export default Home
