import React, { useState } from "react";

import Modal from "../Modal/Modal.js";
import Button from "../Button/Button.js";

import config from "../../config/config.json";

const Deposit = ({
  size,
}) => {
  const [step, setStep] = useState("method");
  const [paymentConfig, setPaymentConfig] = useState(config.deposit);

  const onChangeMethod = (e) => {
    setPaymentConfig({
      ...paymentConfig,
      method: e,
      title: "Pagamento",
    });

    setStep("payment");
  }

  const steps = {
    method() {
      return (
        <div id="method_information">
          <div className="info">
            <p>Escolha o seu método de pagamento</p>
          </div>
          <div className="info">
            <Button
              onClick={() => onChangeMethod("PIX")}
              disabled={true}
              label={"Pix"}
            />
          </div>
          <div className="info">
            <Button
              onClick={() => onChangeMethod("CREDIT")}
              disabled={true}
              label={"Cartão de Crédito"}
            />
          </div>
        </div>
      );
    },
    payment() {
      return (
        <div id="payment_information">
          <div className="info">
            
          </div>
          <div className="info">
            
          </div>
          <div className="info">
            
          </div>
        </div>
      );
    },
  };

  return (
    <Modal
      size={size}
      title={paymentConfig.title}
    >
      {steps[step]()}
    </Modal>
  );
}

export default Deposit;
