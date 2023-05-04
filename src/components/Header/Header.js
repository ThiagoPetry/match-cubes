import React from "react";

import { maskCurrency } from "../../utils/maskCurrency";

import Button from "../Button/Button.js";

const Header = ({
  maxRank,
  balance,
  progress,
}) => {
  return (
    <div id="header">
      <div>
        <h1>Match Cubes</h1>
      </div>
      <div className="right">
        <div className="level">
          <div>
            <div>
              <p className={progress.rank}>Bronze</p>
              <p>Nível {progress.level}</p>
            </div>
            <progress
              max={maxRank}
              value={progress.value}
              className={`progress_${progress.rank}`}
            />
          </div>
        </div>
        <div className="currency">
          {maskCurrency(balance)}
        </div>
        <Button
          id={"deposit"}
          label={"Depositar"}
          disabled={true}
        />
      </div>
    </div>
  );
}

export default Header;
