import React from "react";
import ReactDOM from "react-dom/client";
import CatGame from "./CatGame";

import "./index.css";
// import Task from "./Task";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CatGame />
  </React.StrictMode>
);
