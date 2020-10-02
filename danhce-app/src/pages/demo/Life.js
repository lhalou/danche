import React,{Component} from 'react'
import Child from "./Child.js"
class Life extends Component {
  constructor(props){
    super(props)  
    this.state = {
      count: 0
    }  
  }
  handleAdd(){
    this.setState({
      count: this.state.count +1
    })
  }
  render(){ 
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick = {() => this.handleAdd()}>点击+1</button>
        <Child count = {this.state.count}></Child>
      </div>
    )
  }
}
export default Life