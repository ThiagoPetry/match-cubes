import React from "react";

import Button from "../Button/Button";

const Modal = ({
  onClose,
  children,
}) => {
  return (
    <div id="modal">
      <div id="modal_container">
        <div className="header">
          <div className="title">Título aq</div>
          <Button
            icon={"close"}
            onClick={() => onClose()}
            className={"close material-symbols-outlined"}
          />
        </div>
        <div className="content">
          {children}
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
}

export default Modal;
