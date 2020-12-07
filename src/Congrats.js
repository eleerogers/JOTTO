import React from "react";

export default ({ success }) => {
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