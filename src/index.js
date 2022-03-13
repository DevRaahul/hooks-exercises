import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./AppRoute";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
