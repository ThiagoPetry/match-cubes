import React from "react";

import { openModal } from "../../../hooks/OpenModal";
import { closeModal } from "../../../hooks/CloseModal";

import Modal from "../../Modal/Modal";

const Historic = ({
  historic,
}) => {
  const modalInfo = (
    <Modal onClose={() => closeModal()}>
      teste
    </Modal>
  );

  return (
    <div id="historic">
      <div className="items">
        {
          (historic || []).slice(0).reverse().map((item, index) => (
            <div
              key={index}
              onClick={() => openModal(modalInfo)}
              className={`item ${item.result}`}
            >
              <span>
                <p>{item.bet}</p>
                <p>-</p>
                <p>{item.cubes[1]}</p>
                <p>-</p>
                <p>{item.cubes[2]}</p>
              </span>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Historic;
