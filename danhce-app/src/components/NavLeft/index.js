import React,{ Component } from 'react'
import './index.less'
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import menuList from './../../config/menuConfig'
import {NavLink} from 'react-router-dom'
const { SubMenu } = Menu;



class NavLeft extends Component {
  constructor(props){
    super(props)
  }
  componentWillMount(){
    const menuTreeNode = this.renderMenu(menuList)
    this.setState({
      menuTreeNode
    })
  }
  renderMenu = (data) => {
    return data.map(item => {
      if(item.children){
        return (
          <SubMenu key = { item.key } title = { item.title }>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item key = { item.key }>
        <NavLink to = {item.key}>
          {item.title}
        </NavLink>
          
      </Menu.Item>
    })
  }
  render(){
    return (
      <div> 
        <div className = 'logo'>
          <img src = '/assets/logo-mas.png' alt = ''/>
          <h1> danche MS</h1>
        </div>
       <Menu theme = 'dark'>
        {this.state.menuTreeNode}
      </Menu>
      </div>
    )
  }
} 

export default NavLeft