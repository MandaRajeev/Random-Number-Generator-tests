// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {generate: 0}

  onGenerate = () => {
    const newRandomNumber = Math.ceil(Math.random() * 100)

    this.setState({generate: newRandomNumber})
  }

  render() {
    const {generate} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" onClick={this.onGenerate}>
            Generate
          </button>
          <p className="number">{generate}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
