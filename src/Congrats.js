import React from "react";
import PropTypes from "prop-types";

export default function Congrats({ success }) {
  return (
    <div data-test="congrats">
      {
        success
          ? <span data-test="congrats-message">Congroots! You guesssed it!</span>
          : undefined
      }
    </div>
  )
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
}