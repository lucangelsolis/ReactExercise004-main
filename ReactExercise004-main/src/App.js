import { useState } from "react";
import './App.css';

function App() {

  function generadorNum() {
    const x = Math.trunc(Math.random() * 10);
    setNumero(x)
  }

  const [numero, setNumero] = useState(0);

  return (
    <div>
      <h1>Random Number</h1>
      <h2>{numero}</h2>
      <button onClick={generadorNum} className="btn-gen">Click me</button>
    </div>
  );
}

export default App;