import { useState } from "react";
import { MdRepeat, MdRepeatOne } from "react-icons/md";

function Repeat() {
  const [count, setCount] = useState(0);
  const repeatArr = [
    <MdRepeat color="grey" size="5em" />,
    <MdRepeat color="#3667f7" size="5em" />,
    <MdRepeatOne color="#3667f7" size="5em" />,
  ];

  return (
    <div>
      <button
        onClick={() => {
          if (count < 2) {
            setCount(count + 1);
          } else {
            setCount(0);
          }
        }}
      >
        {repeatArr[count]}
      </button>
    </div>
  );
}

export default Repeat;
