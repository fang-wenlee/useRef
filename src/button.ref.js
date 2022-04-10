import React, { useRef } from "react";

const ButtonRef = () => {
  const qtyRef = useRef();
  const increment = () => {
    qtyRef.current.value++;
  };
  const decrement = () => {
    qtyRef.current.value--;
  };
  // alert("Hello Ref");
  return (
    <div>
      <p>
        <label>
          <button onClick={decrement}>-</button>
          <input type="text" ref={qtyRef} />
          <button onClick={increment}>+</button>
        </label>
      </p>
    </div>
  );
};
export default ButtonRef;
