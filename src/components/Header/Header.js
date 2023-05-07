import React from "react";

import { maskCurrency } from "../../utils/maskCurrency";
import { openModal } from "../../hooks/OpenModal";
import { closeModal } from "../../hooks/CloseModal";

import Button from "../Button/Button.js";
import Deposit from "../Popups/Deposit";

import match_cubes from "../../img/match_cubes.svg";

const Header = ({
  maxRank,
  balance,
  progress,
}) => {
  const modal = (
    <Deposit
      size={"small"}
      closeModal={() => closeModal()}
    />
  );

  return (
    <div id="header">
      <div>
        <img src={match_cubes} className="logo" />
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
          onClick={() => openModal(modal)}
        />
      </div>
    </div>
  );
}

export default Header;
