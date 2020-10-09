import React, { Component } from 'react'
import { AppleOutlined, AndroidOutlined, CaretRightOutlined  } from '@ant-design/icons';
import { Card, message, Tabs} from 'antd'
const { TabPane } = Tabs;
const initialPanes = [
  { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
  { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
];
class Tab extends Component {
   state = {
    panes: initialPanes,
  };

  
  
  handleCallBack = (key) => {
    message.info('这是选择的' + key)
  }
  render(){
    return (
      <div style = {{width: '992px'}}>
        <Card title = 'tab页签'>
          <Tabs defaultActiveKey="1" onChange={this.handleCallBack}>
            <TabPane tab="Tab 1" key="1">
              这是key1的内容
            </TabPane>
            <TabPane tab="Tab 2" disabled key="2">
              这是Key2的内容。。。。。
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              这是Key3的内容~~~~
            </TabPane>
          </Tabs>
        </Card>
        <Card title = '带Icon的tab页签'>
          <Tabs defaultActiveKey="1" onChange={this.handleCallBack}>
            <TabPane tab={
              <span>
                <AppleOutlined/>
                tab 1
              </span>
            } key="1">
              这是key1的内容
            </TabPane>
            <TabPane tab={
              <span>
                <AndroidOutlined/>
                tba2
              </span>
            } key="2">
              这是Key2的内容。。。。。
            </TabPane>
            <TabPane tab={
              <span>
                <CaretRightOutlined />
                tab3
              </span>
            } key="3">
              这是Key3的内容~~~~
            </TabPane>
          </Tabs>
        </Card>
        <Card title = '动态tab页' >
          <Tabs>
            {this.state.panes.map(pane => (
              <TabPane tab={pane.title} key={pane.key}>
                {pane.content}
              </TabPane>
            ))}
          </Tabs>
          
        </Card>
      </div>
    )
  }
}
export default Tab