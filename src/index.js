import React from "react";
import ReactDOM from "react-dom";

import { FileDrop } from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <FileDrop handleDrop={console.log} />
  </React.StrictMode>,
  rootElement
);
