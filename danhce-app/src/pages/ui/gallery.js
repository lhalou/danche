import React, { Component } from 'react'
import {Card, Row, Col,Modal} from 'antd'

const {Meta}  = Card
class Gallery extends Component {
  state = {
    imgsrc :'',
    visible: false
  }
  handleClick = (src) => {
    this.setState({
      visible: true,
      imgsrc: '/gallery' + src
    })
  }
  handleOncancel = () => {
    this.setState({
      visible: false
    })
  }
  render(){
    const imgs = [
      ['1.png','2.png','3.png','4.png', '5.png'],
      ['6.png','7.png','8.png','9.png', '10.png'],
      ['11.png','12.png','13.png','14.png', '15.png'],
      ['16.png','17.png','18.png','19.png', '20.png'],
      ['21.png','22.png','23.png','24.png', '25.png'],
    ]
    const imgsList = imgs.map((list) => list.map((item,index) => {
      return <Card key = {index}
        style = {{marginBottom: '10px'}} 
        cover={<img src={'/gallery' + item} onClick = {() => this.handleClick(item)}/>}
      >
        <Meta title = '画廊' description = 'this is gallery' />
      </Card>
    }))
    console.log(imgsList)
    return (
      <div style = {{width: '992px'}}>
        <Row gutter = {10}>
          <Col md = {5}>{ imgsList[0] }</Col>
          <Col md = {5}>{ imgsList[1] }</Col>
          <Col md = {5}>{ imgsList[2] }</Col>
          <Col md = {4}>{ imgsList[3] }</Col>
          <Col md = {5}>{ imgsList[4] }</Col>
        </Row>
        <Modal
          visible = {this.state.visible}
          onCancel = {this.handleOncancel}
          footer = {null}
        >
          {<img src = {this.state.imgSrc}/>}
        </Modal>
      </div>

    )
  }
}
export default Gallery