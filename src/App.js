import React, { useState, useEffect } from "react";

import { ToastContainer } from "react-toastify";

import { successNotify, errorNotify } from "./hooks/SystemToasts";

import { maskCurrency } from "./utils/maskCurrency";
import { currencyMask } from "./utils/currencyMask";
import { getRandomInt } from "./utils/getRandomInt";
import { transformLeft, transformRigth } from "./utils/transform";

import Header from "./components/Header/Header.js";
import Cubes from "./components/Game/Cubes/Cubes.js";
import Result from "./components/Game/Result/Result.js";
import Historic from "./components/Game/Historic/Historic.js";
import Controller from "./components/Game/Controller/Controller.js";
import Statistics from "./components/Game/Statistics/Statistics.js";

import config from "./config.json";
import Modal from "./components/Modal/Modal";

const App = () => {
  const ranks = {
    bronze(value) {
      if (value >= config.maxRank) {
        successNotify("Rank Prata desbloqueado!");
        setProgress({...progress, rank: "prata", value: 0});
      }
    },
    prata(value) {
      if (value >= config.maxRank) {
        successNotify("Rank Ouro desbloqueado!");
        setProgress({...progress, rank: "ouro", value: 0});
      }
    },
    // ouro
    // diamente
    // esmeralda
  }

  const [cube01, setCube01] = useState(config.cube);
  const [cube02, setCube02] = useState(config.cube);
  const [match, setMatch] = useState(false);

  const [historic, setHistoric] = useState([]);
  const [balance, setBalance] = useState(config.initialBalance);
  const [progress, setProgress] = useState(config.initialRank);
  const [statistics, setStatistics] = useState(config.faces);

  const [value, setValue] = useState(0.00);
  const [multiplication, setMultiplication] = useState(0);
  const [profitVictory, setProfitVictory] = useState(0);
  const [bet, setBet] = useState(0);

  const [startDisabled, setStartDisabled] = useState(true);

  useEffect(() => {
    const c1 = getElement("#cube_01");
    const c2 = getElement("#cube_02");

    const random = getRandomInt(config.min, config.max);

    c1.style.animation = `fall-cube-1-${random} 2s`;
    c2.style.animation = `fall-cube-2-${random} 2s`;

    c1.style.transform = transformLeft[random]();
    c2.style.transform = transformRigth[random]();
  }, []);

  useEffect(() => {
    const getHistoric = localStorage.getItem("matchCubes_historic");

    if (getHistoric) {
      const list = JSON.parse(getHistoric);
      setHistoric([...list]);
    }
  }, []);

  useEffect(() => {
    if (historic.length) {
      localStorage.setItem("matchCubes_historic", JSON.stringify(historic));
    }
  }, [historic]);

  useEffect(() => {
    const getRanks = localStorage.getItem("matchCubes_ranks");

    if (getRanks) {
      const obj = JSON.parse(getRanks);
      setProgress({...obj});
    }
  }, []);

  useEffect(() => {
    if (progress.value) {
      localStorage.setItem("matchCubes_ranks", JSON.stringify(progress));
    }
  }, [progress, progress.value]);

  useEffect(() => {
    ranks?.[progress.rank]?.(progress.value);
  }, [ranks, progress]);

  useEffect(() => {
    if (value && bet && value <= balance) {
      setStartDisabled(false);
    } else {
      setStartDisabled(true);
    }
  }, [balance, value, bet]);

  useEffect(() => {
    const mult = value * 0.02;
    const victory = value * mult;

    setMultiplication(mult);
    setProfitVictory(maskCurrency(victory));
  }, [value]);

  const preStart = () => {
    setStartDisabled(true);
    setCube01({ ...cube01, random: undefined });
    setCube02({ ...cube02, random: undefined });

    if (value <= balance) {
      start();
      return;
    }

    setStartDisabled(true);
    errorNotify(config.errors[1]);
  }

  const start = () => {
    const c1 = getElement("#cube_01");
    const c2 = getElement("#cube_02");

    if (c1.style.animationPlayState === config.paused) {
      c1.style.animationPlayState = config.running;
      c2.style.animationPlayState = config.running;
    } else {
      c1.style.animation = "rotate-cube-1 infinite alternate";
      c1.style.animationDuration = "0.5s";
      c2.style.animation = "rotate-cube-2 infinite alternate";
      c2.style.animationDuration = "0.5s";
    }

    const r_1 = getRandomInt(config.min, config.max);
    const r_2 = getRandomInt(config.min, config.max);

    setTimeout(() => {
      c1.style.animationPlayState = config.paused;
      c2.style.animationPlayState = config.paused;
      c1.style.animation = "";
      c2.style.animation = "";
      c1.style.transform = transformLeft[r_1]();
      c2.style.transform = transformRigth[r_2]();

      const success = r_1 === r_2 && r_1 === bet;
      const operation = !success ?
        balance - value : balance + (multiplication * value);

      calcStatistics(r_1, r_2);

      setBalance(operation);
      setMatch(success);
      setStartDisabled(false);
      setHistoric([...historic, {
        cubes: { 1: r_1, 2: r_2 },
        bet: bet,
        result: success ? "success" : "failed",
        date: new Date(),
      }]);
      setProgress({
        ...progress,
        value: progress.value + (1 * multiplication),
      });
      setCube01({ ...cube01, random: r_1 });
      setCube02({ ...cube02, random: r_2 });
    }, 1000);
  }

  const getElement = (id) => {
    return document.querySelector(id);
  }

  const calcStatistics = (c1, c2) => {
    setStatistics({
      ...statistics,
      [c1]: (statistics[c1] + 1),
      [c2]: (statistics[c2] + 1),
    });
  }

  const onChangeValue = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    let newValue = "";

    if (value.length === 3 && !parseInt(value[0])) {
      newValue = "0." + value[1] + value[2];
    } else {
      const decimal = value.length - 2;

      for (let x = 0; x < value.length; x++) {
        if (x === decimal) {
          newValue += ".";
        }

        newValue += value[x];
      }
    }

    newValue = parseFloat(newValue);

    if (/^\d*\.?\d*$/.test(newValue)) {
      setValue(newValue);

      if (+newValue > balance) {
        errorNotify(config.errors[1]);
      }
    }
  };

  const onChangeBet = (e) => {
    setBet(bet === e ? 0 : e);
  }

  return (
    <>
      <ToastContainer />
      {/* <Modal /> */}

      <div>
        <Header
          maxRank={config.maxRank}
          balance={balance}
          progress={progress}
        />

        <div id="cassino">
          <div>
            <div id="game">
              <Controller
                bet={bet}
                multiplication={multiplication}
                profitVictory={profitVictory}
                startDisabled={startDisabled}
                currencyMask={(e) => currencyMask(e)}
                preStart={() => preStart()}
                onChangeBet={(e) => onChangeBet(e)}
                onChangeValue={(e) => onChangeValue(e)}
              />

              <div id="game-canvas">
                <Result
                  match={match}
                  cube01={cube01}
                  cube02={cube02}
                />

                <Cubes />

                <Statistics statistics={statistics} />
              </div>
            </div>

            <Historic historic={historic} />
          </div>
          {/* <div>
            <div id="graphic">
              teste
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
