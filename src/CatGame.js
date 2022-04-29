import { useState } from "react";

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
    position: "absolute",
    backgroundColor: rndCol,
    width: "100px",
    height: "100px",
    borderRadius: "100px",
    left: rndPosX + "px",
    top: rndPosY + "px",
    border: "1px solid black",
  };
  const container = {
    margin: "0 auto",
    position: "relative",
    width: "1000px",
    height: "1000px",
    border: "1px solid black",
  };
  return (
    <div style={container}>
      <div
        style={catGameCss}
        onClick={() => {
          setRndCol(
            "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")"
          );
          setPosX(getRandomInt(900));
          setPosY(getRandomInt(900));
        }}
      ></div>
    </div>
  );
}

export default CatGame;
