import { useState } from "react";
import "./SayHi.css";

function SayHi() {
  const [loading, setLoading] = useState(false);
  const [greeting, setGreeting] = useState("");

  const logIn = () => {
    setTimeout(sayHi, 3000);
    setLoading(true);
    setGreeting(""); //сделал чтоб пропадала надпись Hello когда ещё раз нажимаем на кнопку ))
  };

  const sayHi = () => {
    setGreeting("Hello!!!");
    setLoading(false);
  };

  return (
    <div className="container">
      <button onClick={logIn}>Say Hi!</button>
      {loading && <div className="loader" />}

      <span>{greeting}</span>
    </div>
  );
}

export default SayHi;
