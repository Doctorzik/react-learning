import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [h, changeH] = useState("Here");
  const [copy, setCopy] = useState("Copy");
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  // UseCallBack let me cache a function definition between re-renders
  // It prevent the re-runnig or calculations of code
  // by  holding it values as long as much changes do not happen
  const generatePassword = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumberAllowed) {
      string += "0123456789";
    }
    if (charAllowed) {
      string += "!@#$%^^&&*(";
    }

    for (let i = 1; i < length; ++i) {
      const char = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(char);
    }

    setPassword(pass);
  }, [length, isNumberAllowed, charAllowed]);
  const passwordRef = useRef();

  const copyPasswordToClipBoard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    setTimeout(() => {
      setCopy(() => "copied");
    });
  };

  // UseEffect allows for the re-running of code based on the given scenerios

  useEffect(() => {
    generatePassword();
    // In the dependecy array below,
    // useEffect will authomatically run the generatepassowrd functiion
    // if any of the  length, isNumberAllowed, charAllowed values changes
  }, [length, isNumberAllowed, charAllowed, h]);
  const changeMe = () => {
    changeH(() => "2");
  };

  return (
    <>
      <div onMouseEnter={changeMe} className="w-full py-3 px-4 my-B">
        I am {h} now
      </div>
      <div
        className="w-full max-w-md mx-auto shadow-md rounded-lg
    px-4 py-3 my-B bg-gray-800 text-orange-500"
      >
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
          />
          <button
            onClick={copyPasswordToClipBoard}
            className="outline-none bg-blue-700 text-white px-3
  py-0.5 shrink-0"
          >
            {copy}
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <input
            onChange={(e) => setLength(e.target.value)}
            className="cursor-pointer"
            type="range"
            min={6}
            max={100}
            value={length}
            name=""
            id=""
            ref={passwordRef}
          />
          <label htmlFor="length">Length {length}</label>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name=""
              id=""
              defaultChecked={isNumberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="number">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name=""
              id=""
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
