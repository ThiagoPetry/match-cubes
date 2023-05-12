import React from "react";

import { maskCurrency } from "../../utils/maskCurrency.js";
import { openModal } from "../../hooks/OpenModal.js";

import Button from "../Button/Button.js";
import Deposit from "../Popups/Deposit.js";
import LevelInfo from "../Popups/LevelInfo.js";

import config from "../../config/config.json";

import match_cubes from "../../img/match_cubes.svg";
import cards from "../../img/cards.svg";
import Icon from "../Icon/Icon.js";

const Header = ({
  module,
  maxRank,
  balance,
  progress,
  onChangeModule,
}) => {
  const levelModal = (
    <LevelInfo
      size={"medium"}
    />
  );

  const depositModal = (
    <Deposit
      size={"small"}
    />
  );

  return (
    <div id="header">
      <div>
        <div className="left">
          {/* {
            module ?
              <h1 className="logo" onClickCapture={() => onChangeModule("")}>
                Cassino - {config.modules.find(item => item.id === module).name}
              </h1>
            : */}
              <h1 className="logo" onClickCapture={() => onChangeModule("")}>
                Cassino
              </h1>
              {/* <img src={match_cubes} className="logo" onClick={() => onChangeModule("")} />
          } */}
        </div>
        <div className="right">
          <div className="level" onClick={() => openModal(levelModal)}>
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
            onClick={() => openModal(depositModal)}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
