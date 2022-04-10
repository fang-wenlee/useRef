import "./styles.css";
import React from "react";
//import Demo from "./comp.life.cycle";
import TimeTicker from "./timer";
import ButtonRef from "./button.ref.js";

export default function App() {
  return (
    <div className="App">
      <ButtonRef />
      <TimeTicker />
    </div>
  );
}
