import "./Box.css";

function Box({ lable, cssClass }) {
  return <div className={cssClass}>{lable}</div>;
}

export default Box;
