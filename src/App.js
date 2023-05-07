import React, { useState } from "react";

import { ToastContainer } from "react-toastify";

import Header from "./components/Header/Header.js";
import Cassino from "./components/Cassino/Cassino";

import config from "./config/config.json";

const App = () => {
  const [balance, setBalance] = useState(config.initialBalance);
  const [progress, setProgress] = useState(config.initialRank);

  const onChangeBalance = (e) => {
    setBalance(e);
  };

  const onChangeProgress = (e) => {
    setProgress(e);
  };

  return (
    <>
      <ToastContainer />

      <Header
        maxRank={config.maxRank}
        balance={balance}
        progress={progress}
      />

      <Cassino
        balance={balance}
        progress={progress}
        onChangeBalance={(e) => onChangeBalance(e)}
        onChangeProgress={(e) => onChangeProgress(e)}
      />
    </>
  );
}

export default App;
