import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from "./actions";

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentGuess: null
    }
    // this.submitGuessedWord = this.submitGuessedWord(this);
  }
  
  updateGuess = (updatedGuess) => {
    this.setState({
      ...this.state,
      currentGuess: updatedGuess
    })
  }

  submitGuessedWord = (e) => {
    e.preventDefault();
    const { currentGuess } = this.state;
    if (currentGuess && currentGuess.length > 0) {
      this.props.guessWord(currentGuess);
      this.setState({currentGuess: ''})
    }
  }

  render() {
    const contents = this.props.success
      ? null
      : (
        <form className="form-inline">
          <input
            data-test="input-box"
            className="mb-3 mx-sm-3"
            type="text"
            placeholder="enter guess"
            value={this.state.currentGuess}
            onChange={(e) => {updateGuess(e.target.value)}}
          />
          <button 
            data-test="submit-btn"
            className="button button-primary mb-2"
            type="submit"
            onClick={this.submitGuessedWord}
          >Submit</button>
        </form>
      )
    return (
      <div data-test="component-input">
       {contents}
      </div>
    )
  }
}

const mapStateToProps = ({success}) => {
  return { success }
}

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);