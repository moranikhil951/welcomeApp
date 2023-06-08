// Write your code here

import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  isSube = () => {
    const {isSubscribe} = this.state
    if (isSubscribe === true) {
      this.setState({isSubscribe: false})
    } else {
      this.setState({isSubscribe: true})
    }
  }

  render() {
    const {isSubscribe} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy learning</p>
        {isSubscribe ? (
          <button className="button" onClick={this.isSube}>
            Subscribe
          </button>
        ) : (
          <button className="button" onClick={this.isSube}>
            Subscribed
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
