import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  // let counter = 0;

  const operationInc = () => {
    counter = counter + 1;
    setCounter(counter);
  };

  const operationDec = () => {
    counter = counter - 1;
    setCounter(counter);
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value:{counter}</h2>
      <br />
      <button onClick={operationInc}> Inc</button>
      <button onClick={operationDec}> Dec</button>
    </>
  );
}

export default App;
