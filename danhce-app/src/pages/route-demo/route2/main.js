import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
class Main extends Component {
  render(){
    return (
      <div>
        this is main pages
        <Link to = "/a">嵌套路由</Link>
        {this.props.children}
      </div>
    )
  }
}
export default Main