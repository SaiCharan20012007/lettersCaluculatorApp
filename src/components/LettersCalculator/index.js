// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onPhraseClick = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bgContainer">
        <div className="container1">
          <h1 className="heading">Calculate the letters you enter</h1>
          <label className="description" for="sample">
            Enter the phrase
          </label>
          <input
            type="text"
            className="searchBar"
            placeholder="Enter the phrase"
            id="sample"
            onChange={this.onPhraseClick}
          />
          <button type="button" className="btn">
            <p>No.of letters: {count}</p>
          </button>
        </div>
        <div className="container2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
