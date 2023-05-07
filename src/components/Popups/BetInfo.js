import React from "react";

import { maskCurrency } from "../../utils/maskCurrency";
import { currencyMask } from "../../utils/currencyMask";

import Modal from "../Modal/Modal";
import Input from "../Input/Input";

const BetInfo = ({
  info,
  size,
  closeModal,
}) => {
  const profit = maskCurrency(info.value * info.multiplication);

  return (
    <Modal
      size={size}
      title={"Informações da Aposta"}
      onClose={() => closeModal()}
    >
      <div id="bet_information">
        <div className="info">
          <p>#{info.betId} {info.formattedDate}</p>
        </div>
        <div className="info fields">
          <div>
            <label>Aposta</label>
            <Input
              disabled={true}
              value={info.value}
            />
          </div>
          <div>
            <label>Multiplicador</label>
            <Input
              disabled={true}
              value={`${info.multiplication}x`}
            />
          </div>
          <div>
            <label>Lucro na Vitória</label>
            <Input
              disabled={true}
              value={`${!info.win ? "-" : ""}${profit}`}
            />
          </div>
        </div>
        <div className="info results">
          <div className={info.result}>
            {info.bet}
          </div>
          <div className={info.result}>
            {info.cubes[1]}
          </div>
          <div className={info.result}>
            {info.cubes[2]}
          </div>
        </div>
        <div className="info fields big">
          <div>
            <label>Hash</label>
            <Input
              disabled={true}
              value={0}
            />
          </div>
        </div>
        <div className="info fields big">
          <div>
            <label>Seed Server</label>
            <Input
              disabled={true}
              value={0}
            />
          </div>
        </div>
        <div className="info fields big">
          <div>
            <label>Hashed Server Seed</label>
            <Input
              disabled={true}
              value={0}
            />
          </div>
        </div>
        <div className="info fields big">
          <div>
            <label>Seed do cliente</label>
            <Input
              disabled={true}
              value={0}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default BetInfo;
