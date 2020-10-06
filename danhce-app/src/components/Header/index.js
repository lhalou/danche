import React,{Component} from 'react'
import { Row, Col } from 'antd'
import './index.less'
import util from './../../utils/utils'
import Axios from './../../axios/axios'
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
    this.getWeatherAPIData()
  }
  getWeatherAPIData(){
    let city = '北京'
    Axios.jsonp({
      url: 'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=a8AQAyolkO1gQNloeMPlI0wKxQWe542V'
    }).then((res) => {
      if(res.status === 'success'){
        let data = res.results[0].weather_data[0]
        this.setState({
          weather: data.weather
        })
      }
    })
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
            <span className = 'weather-detail'>{this.state.weather}多云</span>
          </Col>
        </Row>
      </div>
      
    )
  }
}
export default Header