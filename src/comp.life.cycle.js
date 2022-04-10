import React, { useEffect, useState } from "react";

const Demo = () => {
  const [myDate, setMyDate] = useState(String(new Date()));

  useEffect(() => {
    console.log("mounted");
    const stop = setInterval(() => {
      setMyDate(String(new Date()));
    }, 1000);

    return () => {
      clearInterval(stop);
    };
  }, [myDate]);

  return (
    <div>
      <h1>Component Life cycle</h1>
      <h2>{myDate}</h2>
    </div>
  );
};
export default Demo;
