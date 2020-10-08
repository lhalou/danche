import React, { Component } from 'react'
import { Card, message, Button  } from 'antd'
class Messages extends Component {
  handleMessage = (type) => {
    message[type]('这是全局提示框！')
  }
  render(){
    return (
      <div style = {{width: '992px'}}>
        <Card title = '全局提示框' className = 'card-wrapper'>
          <Button type = 'primary' onClick = { () => {this.handleMessage('success')}}>success</Button>
          <Button type = 'primary' onClick = { () => {this.handleMessage('info')}}>info</Button>
          <Button type = 'primary' onClick = { () => {this.handleMessage('error')}}>error</Button>
          <Button type = 'primary' onClick = { () => {this.handleMessage('warning')}}>warning</Button>
          <Button type = 'primary' onClick = { () => {this.handleMessage('loading')}}>loading</Button>
        </Card>
      </div>
    )
  }
}
export default Messages