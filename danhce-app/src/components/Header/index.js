import React,{Component} from 'react'
import { Row, Col } from 'antd'
import './index.less'
import util from './../../utils/utils'
class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '三月在',
      mysDate : ''
    }
    setInterval(() => {
      this.setState({
        mysDate:  util.formateDate(new Date().getTime())
      })
    },1000)
  }

  
  render(){
    return (
      <div className = 'header'>
        <Row className = 'header-top'>
          <Col span = {24}>
            <span>欢迎，{this.state.username}</span>
            <a href = "">退出</a>
          </Col>
        </Row>
        <Row className = 'breadcrumb'>
          <Col className = 'breadcrumb-title' span = {4}>
            首页
          </Col>
          <Col className = 'weather' span = {20}>
            <span className = 'date'>{this.state.mysDate}</span>
            <span className = 'weather-detail'>多云转晴</span>
          </Col>
        </Row>
      </div>
      
    )
  }
}
export default Header