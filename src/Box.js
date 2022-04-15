import "./Box.css";

function Box({ label, cssClass }) {
  return <div className={cssClass}>{label}</div>;
}

export default Box;
