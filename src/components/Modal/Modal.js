import React from "react";

import Button from "../Button/Button";

const Modal = ({
  size,
  title,
  onClose,
  children,
}) => {
  // const modal = document.querySelector("#modal");

  // if (modal) {
  //   modal.addEventListener("keydown", (e) => {
  //     console.log(e);
  //     if (e.key == "Escape") {
  //       onClose();
  //     }
  //   });
  // }

  const a = (e) => {
    console.log(e.keyCode);
  }

  return (
    <div id="modal" onKeyUpCapture={(e) => a(e)}>
      <div id="modal_container" className={size}>
        <div className="header">
          <div className="title">
            {title && title}
          </div>
          <Button
            iconRight
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
