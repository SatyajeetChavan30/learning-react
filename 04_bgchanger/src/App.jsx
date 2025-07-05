import { useState } from "react";
import "./App.css";

function App() {
  let [color, setcolor] = useState("olive");
  return (
    <>
      <div
        className="w-full h-screen duration-1000"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex-wrap justify-center bottom-12 p-3 mb-5 inset-x-0 px-2">
          <div className="fixed bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3 bg-white rounded-3xl shadow-2xl p-4">
            <button
              className="p-2 text-white bg-black outline-black rounded-4xl "
              onClick={() => {
                setcolor("white");
              }}
            >
              white
            </button>
            <button
              className="p-2 text-white bg-purple-950 outline-black rounded-4xl "
              onClick={() => {
                setcolor("purple");
              }}
            >
              purple
            </button>
            <button
              className="p-2 text-black bg-white outline-black rounded-4xl "
              onClick={() => {
                setcolor("black");
              }}
            >
              black
            </button>
            <button
              className="p-2 text-white bg-red-600 outline-black rounded-4xl "
              onClick={() => {
                setcolor("red");
              }}
            >
              red
            </button>
            <button
              className="p-2 text-white bg-blue-800 outline-black rounded-4xl "
              onClick={() => {
                setcolor("blue");
              }}
            >
              blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
