import { useState } from 'react'
import './App.css'

function App() {

  let city = "Tikapur";
  let bums = [11, 22, 33];
  let age = 20;

  const [num, setNum] = useState(50);

  return (
    <>
      <h1>I am from {city}</h1>
      <p>Lucky numbers: {bums.join(", ")}</p>
      <p>{true ? "TRUE" : "FALSE"}</p>
      <p>{JSON.stringify({ name: "Rohit", age: 40 })}</p>
      <p>{age >= 18 ? "ADULT" : "MINOR"}</p>

      <h2>State value: {num}</h2>

      {/* Increase Button */}
      <button onClick={() => setNum(num + 1)}>
        Increase
      </button>

      {/* Decrease Button */}
      <button onClick={() => setNum(num - 1)} style={{ marginLeft: "10px" }}>
        Decrease
      </button>
    </>
  );
}

export default App;