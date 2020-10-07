import React, { Component } from 'react'
import {Card, notification, Button} from 'antd'
class Notify extends Component {
  handleOpenNoticfy = (type,direction)=> {
    if(direction){
      notification.config({
        placement: direction
      })
    }
    notification[type]({
      message: '发工资了',
      description: '工作15天，实发工资5000元整'
    })
  }
  render(){
    return (
      <div style = {{width: '992px'}}>
        <Card title = '通知提醒框' className = 'card-wrapper'>
          <Button type = 'primary' onClick = { () => this.handleOpenNoticfy('success')}>Success</Button>
          <Button type = 'primary' onClick = { () => this.handleOpenNoticfy('info')}>Info</Button>
          <Button type = 'primary' onClick = { () => this.handleOpenNoticfy('error')}>Error</Button>
          <Button type = 'primary' onClick = { () => this.handleOpenNoticfy('warning')}>warning</Button>
        </Card>
        <Card title = '通知提醒框方向控制' className = 'card-wrapper'>
          <Button type = 'primary' onClick = { () => this.handleOpenNoticfy('success','topLeft')}>Success</Button>
          <Button type = 'primary' onClick = { () => this.handleOpenNoticfy('info','topRight')}>Info</Button>
          <Button type = 'primary' onClick = { () => this.handleOpenNoticfy('error','bottomLeft')}>Error</Button>
          <Button type = 'primary' onClick = { () => this.handleOpenNoticfy('warning','bottomRight')}>warning</Button>
        </Card>  
      </div>
    )
  }
}
export default Notify