import React, { useState, useEffect } from "react";

import Button from "../Button/Button";

const Modal = ({
  size,
  title,
  children,
}) => {
  const [show, setShow] = useState(true);

  const onClose = () => {
    setShow(false);
  }

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (show) {
      document.addEventListener("keydown", handleEscapeKey);
    } else {
      document.removeEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [show, onClose]);

  return (
    <>
      {show &&
        <div id="modal">
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
      }
    </>
  );
}

export default Modal;
