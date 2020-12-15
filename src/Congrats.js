import React from "react";
import PropTypes from "prop-types";

export default function Congrats({ success }) {
  return success ? (
    <div data-test="congrats" className="alert alert-success">
      <span data-test="congrats-message">Congroots! You guesssed it!</span>
    </div>
  ) : (
    <div data-test="congrats" />
  )
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
}