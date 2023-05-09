import React from "react";

import { closeModal } from "../../hooks/CloseModal.js";

import Modal from "../Modal/Modal.js";

const LevelInfo = ({
  size,
}) => {
  return (
    <Modal
      size={size}
      title={"Progresso"}
      onClose={() => closeModal()}
    >
      <div id="bet_information">
        <div className="info">
          
        </div>
      </div>
    </Modal>
  );
}

export default LevelInfo;
