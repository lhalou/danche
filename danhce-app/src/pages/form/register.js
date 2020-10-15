import React, { Component } from  'react'
import {Form,Input,Card, Radio, InputNumber ,Select ,Switch,Button} from 'antd'
const FormItem = Form.Item
const { Option } = Select;
class FromRegister extends Component {
  
  render(){
    return (
      <div style = {{width: '992px'}}>
        <Card title = '登录' style = {{marginTop: '10px'}}>
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            name="basic"
            initialValues={{ remember: true }}
            initialValues={{
              ['input-number']: 1,
      
            }}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              rules={[{ required: true }]}
              label = 'sex'
            >
              <Radio.Group>
                <Radio value="man">男</Radio>
                <Radio value="woman">女</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="年龄">
              <Form.Item name="input-number" noStyle>
                <InputNumber min={1} max={100} />
              </Form.Item>
              <span className="ant-form-text"> 年龄</span>
            </Form.Item>
         
            <Form.Item
              name="select"
              label="Select"
              rules={[{required: true,},]}
            >
              <Select placeholder="请选择国家">
                <Option value="china">中国</Option>
                <Option value="usa">美国</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="爱好"
              label="爱好多选"
              rules={[
                {
                  required: true
                  
                },
              ]}
            >
              <Select mode="multiple">
                <Option value="red">读书</Option>
                <Option value="green">散步</Option>
                <Option value="blue">睡觉</Option>
              </Select>
            </Form.Item>
            <Form.Item name="switch" label="Switch" valuePropName="checked">
              <Switch />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                span: 12,
                offset: 6,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>  
      </div>
    )
  }
}
export default FromRegister