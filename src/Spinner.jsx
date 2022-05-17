import { useState } from "react";
import "./Spinner.css";

function Spinner({ animation }) {
  const cssClass = `loader1 ${animation ? "loader1-animated" : ""}`;
  return <div className={cssClass}></div>;
}

function SpinnerControl() {
  const [animation, setAnimation] = useState(false);

  const SpinnerState = () => {
    setAnimation(!animation);
  };

  return (
    <div className="container">
      <button onClick={SpinnerState}>{animation ? "Start" : "Stop"}</button>
      <Spinner animation={animation} />
    </div>
  );
}
export default SpinnerControl;
