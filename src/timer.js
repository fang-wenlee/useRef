import React, { useEffect, useState } from "react";

const TimeTicker = () => {
  const [isTicking, setIsTicking] = useState(false);
  const [count, setCount] = useState(0);
  const timerToggle = () => {
    setIsTicking(!isTicking);
  };
  const setToZero = () => {
    setCount(0);
    setIsTicking(false);
  };
  useEffect(() => {
    let interval;
    if (isTicking) {
      interval = setInterval(() => {
        setCount(count + 1);
      }, 500);
    } else if (!isTicking) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isTicking, count]);
  return (
    <div>
      <p>{count} count</p>
      <button onClick={timerToggle}> {isTicking ? "Pause" : "Start"}</button>
      <button onClick={setToZero}> Reset</button>
    </div>
  );
};
export default TimeTicker;
