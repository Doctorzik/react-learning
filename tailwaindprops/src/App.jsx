import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./components/Card";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text3xl bg-green-500 round-md p-3">Vitewith Ezekiel</h1>
      <Card username="Ezekiel" post="Senior Developer" />
      <Card username="Happy Boy"  />
    </>
  );
}

export default App;
