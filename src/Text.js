import "./App.css";

function Text({ text, textColor, textSize, textDecoration }) {
  let decoration = "";
  if (textDecoration === true) {
    decoration = "underline";
  } else {
    decoration = "none";
  }
  const styles = {
    fontSize: textSize + "px",
    color: textColor,
    textDecoration: decoration,
  };
  return (
    <div className="Text" style={styles}>
      {text}
    </div>
  );
}

export default Text;
