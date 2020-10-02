import React,{Component} from 'react'
import './index.less'
class Child extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className = 'content'>
        <p>这是子组件</p>
        <p>{this.props.count}</p>
      </div>
    )
  }
}

export default Child