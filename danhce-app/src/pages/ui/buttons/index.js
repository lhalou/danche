import React,{ Component } from 'react'
import { Button, Card , Radio } from 'antd'
import { DownloadOutlined, SearchOutlined ,EditOutlined ,DeleteOutlined ,PlusOutlined ,PoweroffOutlined,LeftOutlined,RightOutlined } from '@ant-design/icons';
import './../ui.less'
class Buttons extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading:false,
      size: '',
      value:''
    }
  }
  handleCloseLoading = () => {
    this.setState({
      loading: !this.state.loading
    })
  }
  handleChange = (e)=> {
    this.setState({
      size: e.target.value,
      value: e.target.value
    })
  }
  render(){
    return (
      <div style = {{width: '992px'}}>
        <Card title = '基础按钮' className = 'card-wrapper'>
          <Button type = 'primary'>按钮</Button>
          <Button>按钮</Button>
          <Button type = 'dashed'>按钮</Button>
          <Button type = 'danger'>按钮</Button>
          <Button disabled>按钮</Button>
          <Button type="primary" shape="circle" icon={<SearchOutlined />} />
        </Card>
        <Card title = '图形按钮' className = 'card-wrapper'>
          <Button type="primary" shape="circle" icon={<SearchOutlined />} />
          <Button  icon={<SearchOutlined />}>Search</Button>
          <Button type="primary" icon={<DownloadOutlined />}>Download</Button>
          <Button icon = {<EditOutlined />}>Edit</Button>
          <Button type = 'dashed' icon = {<DeleteOutlined/>}>Delete</Button>
          <Button icon = {<PlusOutlined />}>Plus</Button>
        </Card>
        <Card title = 'Loading按钮' className = 'card-wrapper'>
          <Button type = 'primary' loading = {true}>确定</Button>
          <Button type="primary" icon={<PoweroffOutlined />} loading />
          <Button type = 'dashed' loading>点击加载</Button>
          <Button icon={<PoweroffOutlined />} loading />
          <Button type = 'primary' onClick = {this.handleCloseLoading} loading = {this.state.loading}>关闭</Button>
        </Card>
        <Card title = '按钮组'>
          <Button.Group>
            <Button icon = {<LeftOutlined />}>后退</Button>
            <Button icon = {<RightOutlined />} >前进</Button>
          </Button.Group>
        </Card>
        <Card title = '按钮尺寸' className = 'card-wrapper'>
            <Radio.Group onChange={this.handleChange} value={this.state.value}>
              <Radio value='small'>A</Radio>
              <Radio>B</Radio>
              <Radio value='large'>C</Radio>
            </Radio.Group>
            <Button type = 'primary' size = { this.state.size }>按钮</Button>
            <Button type = 'primary' size = { this.state.size }>按钮</Button>
            <Button type = 'primary' size = { this.state.size }>按钮</Button>
        </Card>
      </div>
      
    )
  }
}
export default Buttons