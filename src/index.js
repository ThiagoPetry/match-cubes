import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.css";

import App from "./App";
import Login from "./pages/Login/Login";

const root = ReactDOM.createRoot(document.getElementById("container"));

root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);
