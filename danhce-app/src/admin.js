import React,{Component} from 'react'
import {Row,Col} from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import Home from './pages/home/index.js'
import './style/common.less'
class Admin extends Component {
  render(){
    return (
      <Row className = 'container'>
        <Col span = {4} className = 'navleft'>
          <NavLeft/>
        </Col>
        <Col span = {20} className = 'mian' style = {{background: '#aaa'}}>
          <Header />
          <Row className = 'content'>
            <Home></Home>
            {/* {this.props.children} */}
          </Row>
          <Footer />
        </Col>
      </Row>
    )
  }
}
export default Admin