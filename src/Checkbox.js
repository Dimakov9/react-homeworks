import React from "react";

function Checkbox() {
  const [checkbox, setCheckbox] = React.useState("√");

  return (
    <div>
      <button
        onClick={() => {
          setCheckbox("X");
          if (checkbox === "X") {
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
