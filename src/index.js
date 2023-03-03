import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Components/Main";
import "./styles/style.css";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>
);
