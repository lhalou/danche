import React, { Component } from 'react'
import {Card, Form, Button, Input, Checkbox} from 'antd'

const FormItem = Form.Item
class FormLogin extends Component {
   

  render(){
    return (
      <div style = {{width: '992px'}}>
      <Card title = '内联登录'>
        <Form>
          <Form.Item>
            <Input placeholder = '请输入用户名'/>
          </Form.Item>
           <Form.Item>
            <Input placeholder = '请输入密码'/>
          </Form.Item>
          <Form.Item>
            <Button type = 'primary'>登录</Button>
          </Form.Item>
        </Form>
      </Card>
        <Card title = '登录' style = {{marginTop: '10px'}}>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            style = {{width: '300px'}}
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

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item >
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
export default FormLogin