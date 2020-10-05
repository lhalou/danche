import React,{Component} from 'react'
import './index.less'
import {Button,Input} from 'antd'

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
        <Input></Input>
      </div>
    )
  }
}

export default Child