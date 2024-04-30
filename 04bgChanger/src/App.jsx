import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200 bg-black"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x px-2">
        <div className="w-full max-w-2xl shadow-lg bg-white px-3 rounded-3xl">
          <button
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
            className="outline-none text-black p-3"
          >
            Test
          </button>
          <button
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
            className="outline-none text-black"
          >
            Test 2
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
