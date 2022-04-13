import "./App.css";

function Text({ text, textColor, textSize1, textDecoration }) {
  if (textDecoration === "true") {
    textDecoration = "underline";
  } else {
    textDecoration = "none";
  }
  const styles = {
    fontSize: textSize1 + "px",
    color: textColor,
    textDecoration: textDecoration,
  };
  return (
    <div className="Text" style={styles}>
      {text}
    </div>
  );
}

export default Text;
