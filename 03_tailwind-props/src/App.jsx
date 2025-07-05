import { useState } from "react";
import "./App.css";
import Card from "./components/card.jsx";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "hitesh",
    age: 21,
  };
  let newArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-slate-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>
      <Card
        username="Lorem ipsum dolor sit amet consectetur."
        content="click me"
      />
      <Card username="satyajeet" />
    </>
  );
}

export default App;
