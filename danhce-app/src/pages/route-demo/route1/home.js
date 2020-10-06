import React, { Component } from 'react'
import {HashRouter, Link ,Route} from 'react-router-dom'
import Main from './main'
import About from './about'
import Topics from './topics'
class Home extends Component {
  render(){
    return (
      <HashRouter>
        <div>
          <ul>
            <li>
              <Link to = "/">Home</Link>
            </li>
            <li>
              <Link to = "/about">about</Link>
            </li>
            <li>
              <Link to = "/topics">topics</Link>
            </li>
          </ul>
          <Route path = '/' component = {Main} exact></Route>
          <Route path = '/about' component = {About}></Route>
          <Route path = '/topics' component = {Topics}></Route>
        </div>
      </HashRouter>
    )
  }
}
export default Home
