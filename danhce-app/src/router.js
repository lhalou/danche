import React,{ Component } from 'react'
import App from './App'
import { HashRouter, Route, Switch} from 'react-router-dom'
import Login from './pages/login/index'
import Admin from './admin'
import Buttons from './pages/ui/buttons/index'
import Modals from './pages/ui/modals'
import SPin from './pages/ui/spin'
import Notify from './pages/ui/notification'
import NoMatch from './pages/nomatch/index'
import Messages from './pages/ui/message'
import Tab from './pages/ui/tabs'
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
                <Route path = '/admin/ui/modals' component = {Modals}/>
                <Route path = '/admin/ui/loadings' component = {SPin}/>
                <Route path = '/admin/ui/notification' component = {Notify}/>
                <Route path = '/admin/ui/messages' component = {Messages}/>
                <Route path = '/admin/ui/tabs' component = {Tab}/>
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