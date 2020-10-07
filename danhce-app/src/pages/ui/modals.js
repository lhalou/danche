import React, { Component } from 'react'
import { Button, Card, Modal } from 'antd'
import './ui.less'
class Modals extends Component {
  constructor(props){
    super(props)
    this.state = {
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false
    }
  }
  handleOpen = (type) => {
    this.setState({
      [type]:true
    })
  }
  handleOk = () => {
    this.setState({
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false
    })
  }
  handleCancel = () => {
    this.setState({
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false
    })
  }
  handleConfirm = (type) => {
    Modal[type]({
      title: '信息框',
      content: '这是信息框',
      onOk: () =>{
        console.log('ok')
      },
      onCancel: () => {
        console.log('cancel')
      }
    })
  }
  render(){
    return (
      <div style = {{width: '992px'}} className = 'card-wrapper'>
        <Card title = '基础弹框'>
          <Button type = 'primry' onClick = {() => this.handleOpen('visible1')}>open</Button>
          <Button type = 'primry' onClick = {() => this.handleOpen('visible2')}>自定义页脚</Button>
          <Button type = 'primry' onClick = {() => this.handleOpen('visible3')}>顶部20px弹框</Button>
          <Button type = 'primry' onClick = {() => this.handleOpen('visible4')}>水平垂直居中</Button>
          <Modal
          title="Basic Modal"
          visible={this.state.visible1}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          >
            <p>Some contents...</p>
          </Modal>
          <Modal
          title="Basic Modal"
          visible={this.state.visible2}
          okText = '么得问题'
          cancelText = '有的问题'
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          >
            <p>Some contents...</p>
          </Modal>
          <Modal
          title="Basic Modal"
          visible={this.state.visible3}
          style={{ top: 20 }}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          >
            <p>Some contents...</p>
          </Modal>
          <Modal
          title="Basic Modal"
          visible={this.state.visible4}
          centered
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          >
            <p>Some contents...</p>
          </Modal>
        </Card>
        <Card title = '信息确认框'>
          <Button type = 'primry' onClick = {() => this.handleConfirm('info')}>info</Button>
          <Button type = 'primry' onClick = {() => this.handleConfirm('success')}>success</Button>
          <Button type = 'primry' onClick = {() => this.handleConfirm('error')}>error</Button>
          <Button type = 'primry' onClick = {() => this.handleConfirm('warning')}>warning</Button>
        </Card>
      </div>
    )
  }
}
export default Modals