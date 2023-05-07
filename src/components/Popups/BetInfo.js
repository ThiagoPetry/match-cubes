import React from "react";

import Modal from "../Modal/Modal";
import Input from "../Input/Input";
import Cube from "../Cube/Cube";

const BetInfo = ({
  info,
  closeModal,
}) => {
  const profit = info.value * info.multiplication;
  console.log(info.value, info.multiplication);

  return (
    <Modal
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
              value={`R$ ${info.value}`}
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
              value={`${!info.win ? "-" : ""}R$ ${profit}`}
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
