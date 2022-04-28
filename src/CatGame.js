import { useState } from "react";
import "./CatGame.css";

function CatGame() {
  const [rndCol, setRndCol] = useState("rgb(228,30,12)");
  const [rndPosX, setPosX] = useState("450");
  const [rndPosY, setPosY] = useState("450");

  function random(number) {
    return Math.floor(Math.random() * (number + 1));
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const catGameCss = {
    backgroundColor: rndCol,
    left: rndPosX + "px",
    top: rndPosY + "px",
  };

  return (
    <div className="Container">
      <div
        className="Circle"
        style={catGameCss}
        onClick={() => {
          setRndCol(
            "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")"
          );
          setPosX(getRandomInt(800));
          setPosY(getRandomInt(800));
        }}
      ></div>
    </div>
  );
}

export default CatGame;
