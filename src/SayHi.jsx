import { useState } from "react";
import "./SayHi.css";

function SayHi() {
  const [loading, setLoading] = useState(false);
  const [greeting, setGreeting] = useState("");

  const isLoading = () => {
    setTimeout(sayHi, 3000);
    setLoading(true);
    setGreeting(""); //сделал чтоб пропадала надпись Hello когда ещё раз нажимаем на кнопку ))
    console.log(loading);
  };

  const sayHi = () => {
    setGreeting("Hello!!!");
    setLoading(false);
    console.log(greeting);
  };

  return (
    <div className="container">
      <button onClick={isLoading}>Say Hi!</button>
      {loading && <div className="loader" />}

      <span>{greeting}</span>
    </div>
  );
}

export default SayHi;
