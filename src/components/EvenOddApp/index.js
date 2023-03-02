import {Component} from 'react'

class EvenOddApp extends Component {
  state = {c: 0}

  ic = () => {
    const {c} = this.state
    this.setState({c: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {c} = this.state
    const status = c % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div>
        <h1>Count {c}</h1>
        <p>Count is {status}</p>
        <button type="button" onClick={this.ic}>
          Increment
        </button>
        <p>Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
