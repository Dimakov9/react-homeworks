import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Text from "./Text";
import Box from "./Box";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <Box label="Small box" cssClass="smallBox" />
      <Box label="Medium Box" cssClass="mediumBox" />
      <Box label="Big box" cssClass="bigBox" />
    </div>
  </React.StrictMode>
);
