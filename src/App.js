import "./styles.css";
import React from "react";
//import Demo from "./comp.life.cycle";
import TimeTicker from "./timer";
import ButtonRef from "./button.ref.js";
// import FormRef from "./form.ref.js";
import InputRef from "./input.ref.js";

export default function App() {
  return (
    <div className="App">
      <ButtonRef />
      <TimeTicker />
      <br />
      {/* <FormRef /> */}
      <InputRef />
    </div>
  );
}
