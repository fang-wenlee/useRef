import React, { useRef, useEffect } from "react";

const InputRef = () => {
  const userNameRef = useRef();

  useEffect(() => {
    userNameRef.current.focus();
  }, []);
  return (
    <div>
      <h2> Login Screen ..</h2>
      <p>
        <label>
          User Name: <input type="text" ref={userNameRef} />
        </label>
      </p>
      <p>
        <label>
          PassWord: <input type="text" />
        </label>
      </p>
      <button>Login</button>
    </div>
  );
};
export default InputRef;
