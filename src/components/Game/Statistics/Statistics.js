import React from "react";

const Statistics = ({
  statistics,
}) => {
  return (
    <div id="statistics">
      <span>
        <p>1: {statistics[1]}</p>
      </span>
      <span>
        <p>2: {statistics[2]}</p>
      </span>
      <span>
        <p>3: {statistics[3]}</p>
      </span>
      <span>
        <p>4: {statistics[4]}</p>
      </span>
      <span>
        <p>5: {statistics[5]}</p>
      </span>
      <span>
        <p>6: {statistics[6]}</p>
      </span>
    </div>
  );
}

export default Statistics;
