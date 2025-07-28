import "./app.css";
import imgGasPump from "./assets/logo.png";
import { useState, FormEvent } from "react";

/*
ethanol/gasoline
if the result is less than 0.7, it's better to use ethanol
*/

function App() {
  const [gasolineInput, setGasolineInput] = useState(0);
  const [ethanolInput, setEthanolInput] = useState(0);

  function calculate(event: FormEvent) {
    event.preventDefault();

    const calculation = ethanolInput / gasolineInput;

    if (calculation <= 0.7) {
      alert("It is better to use ethanol");
    } else {
      alert("It is better to use gasoline");
    }
  }

  return (
    <div>
      <main className="container">
        <img className="image" src={imgGasPump} alt="bomba de gasolina" />
        <h1 className="title">What’s the best option?</h1>
        <form className="form" onSubmit={calculate}>
          <label>Ethanol (price per liter)::</label>
          <input
            className="input"
            type="number"
            placeholder="Enter value"
            min="1"
            step="0.01"
            required
            value={ethanolInput}
            onChange={(e) => setEthanolInput(Number(e.target.value))}
          />

          <label>Gasoline (price per liter):</label>
          <input
            className="input"
            type="number"
            placeholder="Enter value"
            min="1"
            step="0.01"
            required
            value={gasolineInput}
            onChange={(e) => setGasolineInput(Number(e.target.value))}
          />
          <input className="button" type="submit" value="Calculate" />
        </form>
      </main>
    </div>
  );
}

export default App;
