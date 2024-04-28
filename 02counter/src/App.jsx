import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);
  //
  // let counter = 15
  const addValue = () => {
    // Previous counter holds the counter variable
    // and it does something for you.
    // This callback prevent a concept called bashing.
    //Since react dont update immediatley,
    // It takes each founction in the callback.
    // if they are thesame itpacks just one of them
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };
  const removeValue = () => {
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
  };
  return (
    <>
      <h1>React Counter With Ezekiel</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={removeValue}>Remove Value</button>
      <p>Footer: {counter} </p>
    </>
  );
}

export default App;
