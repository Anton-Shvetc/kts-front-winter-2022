import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App/App";





import { BrowserRouter } from "react-router-dom";

import "@config/configureMobX";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
