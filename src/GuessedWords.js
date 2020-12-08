import React from "react";
import PropTypes from "prop-types";

const GuessedWords = (props) => {
  let contents;
  if (props.guessedWords.length === 0) {
    contents = <span data-test="guess-instructions">Guess a five letter word!</span>
  } else {
    contents = <table></table>
  }
  return (
    <div data-test="component-guessed-words">
      { contents }
    </div>
  )
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(PropTypes.shape({
    guessedWord: PropTypes.string.isRequired,
    letterMatchCount: PropTypes.number.isRequired
  })).isRequired
}

export default GuessedWords;