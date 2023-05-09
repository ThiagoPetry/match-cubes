import React, { useState } from "react";

import { ToastContainer } from "react-toastify";

import Header from "./components/Header/Header.js";
import Cassino from "./components/Cassino/Cassino.js";
import Login from "./pages/Login/Login.js";
import Home from "./pages/Home/Home.js";

import config from "./config/config.json";
import Loading from "./components/Loading/Loading.js";
import Footer from "./components/Footer/Footer.js";

const App = () => {
  const [user, setUser] = useState(config.user);
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState(config.initialBalance);
  const [progress, setProgress] = useState(config.initialRank);

  const access = () => {
    setUser({
      username: "teste",
      password: "teste",
      logged: true,
    });
  };

  const onChangeUsername = (e) => {
    setUser({...user, username: e.target.value});
  };

  const onChangePassword = (e) => {
    setUser({...user, password: e.target.value});
  };

  const onChangeModule = (e) => {
    setUser({...user, module: e});
  };

  const onChangeBalance = (e) => {
    setBalance(e);
  };

  const onChangeProgress = (e) => {
    setProgress(e);
  };

  if (!user.logged) {
    return (
      <Login
        access={() => access()}
        onChangePassword={(e) => onChangePassword(e)}
        onChangeUsername={(e) => onChangeUsername(e)}
      />
    );
  }

  return (
    <>
      {loading &&
        <Loading />
      }

      <ToastContainer />

      <Header
        balance={balance}
        progress={progress}
        maxRank={config.maxRank}
        module={user.module}
        onChangeModule={(e) => onChangeModule(e)}
      />

      {
        user.module ?
          <Cassino
            balance={balance}
            progress={progress}
            onChangeBalance={(e) => onChangeBalance(e)}
            onChangeProgress={(e) => onChangeProgress(e)}
          />
        :
          <Home
            onChangeModule={(e) => onChangeModule(e)}
          />
      }


      {/* <Footer /> */}
    </>
  );
}

export default App;
