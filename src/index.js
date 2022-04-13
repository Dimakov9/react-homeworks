import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Text from "./Text";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Text text="Regular text" />
    <Text text="Huge header" textSize={30} />
    <Text text="Danger notification" textColor="red" />
    <Text text="Underlined text" textDecoration={true} />
  </React.StrictMode>
);
