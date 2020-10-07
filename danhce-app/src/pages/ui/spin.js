import React, { Component } from 'react'
import { Card, Button, Spin, Alert} from 'antd'
import { LoadingOutlined } from '@ant-design/icons';
import './ui.less'
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
class SPin extends Component {
  render(){
    return (
      <div style = {{width: '992px'}}>
        <Card title = '基础loading' className = 'card-wrapper'>
          <Spin size = 'Small'></Spin>
          <Spin></Spin>
          <Spin size = 'large'></Spin>  
          {/* 通过indicator制定的图标是静态的 */}
          <Spin indicator={antIcon} />     
        </Card>
        <Card title = 'spin组件包含在其他组件内' className = 'card-wrapper'>
         <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
          <Spin tip = '加载中.....'>
            <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="success"
          />
          </Spin>
          
        </Card>
      </div>
      
    )
  }
}
export default SPin