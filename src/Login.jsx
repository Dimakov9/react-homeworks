import { useState } from "react";
import "./Login.css";

function Login() {
  const [loggedIn, setloggedIn] = useState(false);

  const onCheck = () => {
    setTimeout(() => {
      setloggedIn(!loggedIn);
    }, 2000);
  };

  return (
    <div className="container">
      {loggedIn ? (
        <img
          className="elonImg"
          src="https://media.rbcdn.ru/media/upload_tmp/2021/tg_image_700076544.jpeg"
          alt=""
        />
      ) : (
        <button onClick={onCheck}>Sing in</button>
      )}
    </div>
  );
}

export default Login;
