import React, { useRef, useEffect } from "react";

const FormRef = () => {
  const name = useRef();
  const pw = useRef();

  useEffect(() => {
    name.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameVal = name.current.value;
    const pwVal = pw.current.value;
    alert(`your name is ${nameVal} and pw is ${pwVal}`);
    name.current.value = "";
    pw.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input ref={name} type="text" placeholder="your name ..." />
      </p>
      <p>
        {" "}
        <input ref={pw} type="text" placeholder="password ..." />{" "}
      </p>
      <button>Log in</button>
    </form>
  );
};

export default FormRef;
