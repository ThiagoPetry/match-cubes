import React from "react";

const Result = ({
  match,
  cube01,
  cube02,
}) => {
  return (
    <div id="game-result">
      {cube01.random &&
        <div className={match ? "success" : "failed"}>
          {cube01.random}
        </div>
      }

      {cube02.random &&
        <div className={match ? "success" : "failed"}>
          {cube02.random}
        </div>
      }
    </div>
  );
}

export default Result;
