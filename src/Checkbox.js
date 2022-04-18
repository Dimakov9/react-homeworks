import React from "react";

function Checkbox() {
  const [checkbox, setCheckbox] = React.useState("√");

  return (
    <div>
      <button
        onClick={() => {
          if (checkbox === "√") {
            setCheckbox("X");
          } else {
            setCheckbox("√");
          }
        }}
      >
        {checkbox}
      </button>
    </div>
  );
}

export default Checkbox;
