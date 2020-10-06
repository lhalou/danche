import React,{ Component } from 'react'
class About extends Component {
  render(){
    return (
      <div>
        this is about pages
        {this.props.match.params.value}
      </div>
    )
  }
}
export default About