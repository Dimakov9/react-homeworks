import "./Task.css";

function Task({ number, text, done }) {
  let decoration = "";
  let checkeds;
  if (done === true) {
    decoration = "line-through";
    checkeds = true;
  } else {
    decoration = "none";
    checkeds = false;
  }
  const styles = {
    textDecoration: decoration,
  };

  return (
    <label className="TaskLable">
      <input type="checkbox" checked={checkeds} />
      <span style={styles}>
        {number + ". "}
        <p>{text}</p>
      </span>
    </label>
  );
}

export default Task;
