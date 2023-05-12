import React from "react";

import Modal from "../Modal/Modal.js";

const LevelInfo = ({
  size,
}) => {
  return (
    <Modal
      size={size}
      title={"Progresso"}
    >
      <div id="bet_information">
        <div className="info">
          
        </div>
      </div>
    </Modal>
  );
}

export default LevelInfo;
