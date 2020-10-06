import React, { Component } from 'react'
import {HashRouter,Route} from 'react-router-dom'
import Home from './home'
import Main from './main'
import About from './about'
import Topics from './topics'
class MyRouter extends Component {
  render(){
    return (
      <HashRouter>
        <Home>
          <Route path = '/main' render = {() => 
            <Main>
              <Route path = '/main/:value' component = {About}></Route>
            </Main>
          }></Route>
          <Route path = '/about' component = {About}></Route>
          <Route path = '/topics' component = {Topics}></Route>
        </Home>
      </HashRouter>
    )
  }
}
export default MyRouter