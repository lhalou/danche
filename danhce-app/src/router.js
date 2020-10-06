import React,{ Component } from 'react'
import App from './App'
import { HashRouter, Route, Switch} from 'react-router-dom'
import Login from './pages/login/index'
import Admin from './admin'
import Buttons from './pages/ui/buttons/index'
import NoMatch from './pages/nomatch/index'
class MyRouter extends Component {
  render(){
    return (
      <HashRouter>
        <App>
          <Route path = '/login' component = {Login}/>
          <Route path = '/admin' render = {() => 
            <Admin>
              <Switch>
                <Route path = '/admin/ui/buttons' component = {Buttons}/>
                <Route component = {NoMatch}/>
              </Switch>
            </Admin>
          }/>
          <Route path = '/order/detail' component = {Login}/>
        </App>
      </HashRouter>
    )
  }
}
export default MyRouter