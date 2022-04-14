import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Text from "./Text";
import Box from "./Box";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <Box lable="Small box" cssClass="smallBox" />
      <Box lable="Medium Box" cssClass="mediumBox" />
      <Box lable="Big box" cssClass="bigBox" />
    </div>
  </React.StrictMode>
);
