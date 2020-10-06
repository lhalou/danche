import camelcase from 'camelcase'
import React,{ Component } from 'react'
import './index.less'
class NoMatch extends Component {
  render(){
    return (
      <div className = 'nomatch'>
        404 No Found !!!
      </div>
    )
  }
}
export default NoMatch