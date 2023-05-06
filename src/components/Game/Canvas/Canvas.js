import React from "react";

import Cubes from "../Cubes/Cubes";
import Result from "../Result/Result";
import Statistics from "../Statistics/Statistics";

const Canvas = ({
  match,
  cube01,
  cube02,
  statistics,
}) => {
  return (
    <div id="game-canvas">
      <Result
        match={match}
        cube01={cube01}
        cube02={cube02}
      />

      <Cubes />

      <Statistics statistics={statistics} />
    </div>
  );
}

export default Canvas;
