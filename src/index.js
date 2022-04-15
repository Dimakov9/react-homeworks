import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Task from "./Task";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Task number={1} text="Написать список" done={true} />
    <Task number={2} text="Зачеркнуть первый вариант" />
    <Task number={3} text="Сделать вид, что очень занят работой" />
    <Task number={4} />
    <Task number={5} text="Придумать интересный пункт 4" />
  </React.StrictMode>
);
