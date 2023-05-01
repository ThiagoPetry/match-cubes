import React from "react";

import Input from "../../Input/Input.js";
import Button from "../../Button/Button.js";

const Controller = ({
  bet,
  error,
  multiplication,
  profitVictory,
  startDisabled,
  currencyMask,
  preStart,
  onChangeBet,
  onChangeValue,
}) => {
  return (
    <div id="game-controller">
      <div>
        <label>Quantia</label>
        <Input
          id={"value"}
          onInput={(e) => currencyMask(e)}
          onChange={(e) => onChangeValue(e)}
        />
      </div>
      <div>
        <label>Multiplicador</label>
        <Input
          id={"multiplication"}
          disabled={true}
          value={`${multiplication}x`}
        />
      </div>
      <div>
        <label>Lucro na Vitória</label>
        <Input
          id={"profit_victory"}
          disabled={true}
          value={profitVictory}
        />
      </div>
      <div>
        <label>Aposta</label>
        <div className="options">
          {
            [1, 2, 3, 4, 5, 6].map((item) => (
              <Button
                key={item}
                className={`bet${bet === item ? " selected" : ""}`}
                label={item}
                onClick={() => onChangeBet(item)}
              />
            ))
          }
        </div>
      </div>
      <div>
        <Button
          id={"start"}
          label={"Começar o jogo"}
          disabled={startDisabled}
          onClick={() => preStart()}
        />
      </div>
      <div id="message">
        {error.msg}
      </div>
    </div>
  );
}

export default Controller;
