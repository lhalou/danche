import React, { Component } from 'react'
import { Card, Carousel } from 'antd'
import './ui.less'
class Carousels extends Component {
  render(){
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
    return (
      <div style = {{width: '992px'}}>
        <Card title = '文字轮播' className = 'card-wrapper'>
           <Carousel effect = 'fade'>
              <div>
                <h3 style={contentStyle}>this is one </h3>
              </div>
              <div>
                <h3 style={contentStyle}>this is two </h3>
              </div>
              <div>
                <h3 style={contentStyle}>this is 3</h3>
              </div>
            </Carousel>
        </Card>
        <Card title = '图片轮播' className = 'card-wrapper'>
           <Carousel effect = 'fade'>
              <div>
                <img src = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602269288987&di=75fa9a21bdce05e84de5a9d5acad81fa&imgtype=0&src=http%3A%2F%2Fwww.qipaishuo.com%2FdongwuImage%2F1-111230162155.jpg' style = {{width: '100%',height: '400px'}}/>
              </div>
              <div>
                <img src = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602269289001&di=0409f5f4b3b7450f003f9c8f7fae6849&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201505%2F15%2F20150515012839_2VJm4.jpeg' style = {{width: '100%',height: '400px'}}/>
              </div>
              <div>
                <img src = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602269289064&di=d9ade149e96ef2db9ee742c199722bee&imgtype=0&src=http%3A%2F%2Fbbs.sjzl19.com%2Fdb_picture%2F201407%2F15%2F1405392885430.jpg' style = {{width: '100%',height: '400px'}}/>
              </div>
            </Carousel>
        </Card>
      </div>
    )
  }
}
export default Carousels