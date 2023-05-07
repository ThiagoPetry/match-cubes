import React from "react";

import Button from "../../Button/Button";

const Statistics = ({
  statistics,
}) => {
  return (
    <div id="statistics">
      <div>
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
      <div>
        <Button
          icon={"casino"}
          className={"button material-symbols-outlined"}
        />
        <Button
          icon={"monitoring"}
          className={"button material-symbols-outlined"}
        />
        <Button
          icon={"info"}
          className={"button material-symbols-outlined"}
        />
      </div>
    </div>
  );
}

export default Statistics;
