// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 10}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="speedometer-page">
        <div>
          <h1 className="main-heading">SPEEDOMETER</h1>
          <img
            className="speedometer-image"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
          <h1 className="counter">Speed is {count}mph</h1>
          <p className="description">Min Limit is 0mph,Max Limit is 200mph</p>
          <div className="buttons-container">
            <button
              className="button-accelerate"
              type="button"
              onClick={this.onIncrease}
            >
              Accelerate
            </button>
            <button className="button-break" type="button">
              Apply Break
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
