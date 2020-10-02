import React,{Component} from 'react'
import './index.less'
import {Button} from 'antd'

class Child extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className = 'content'>
        <p>这是子组件</p>
        <p>{this.props.count}</p>
        <Button>按钮</Button>
      </div>
    )
  }
}

export default Child