import "./app.css";
import imgGasPump from "./assets/logo.png";
import { useState } from "react";
import type { FormEvent } from "react";

/*
ethanol/gasoline
if the result is less than 0.7, it's better to use ethanol
*/

interface ResultProps {
  title: string;
  gasoline: number | string;
  ethanol: number | string;
}

function App() {
  const [gasolineInput, setGasolineInput] = useState(0);
  const [ethanolInput, setEthanolInput] = useState(0);
  const [result, setResult] = useState<ResultProps>();

  function calculate(event: FormEvent) {
    event.preventDefault();

    const calculation = ethanolInput / gasolineInput;

    if (calculation <= 0.7) {
      setResult({
        title: "It is better to use ethanol",
        gasoline: formatCurrency(gasolineInput),
        ethanol: formatCurrency(ethanolInput),
      });
    } else {
      setResult({
        title: "It is better to use gasoline",
        gasoline: formatCurrency(gasolineInput),
        ethanol: formatCurrency(ethanolInput),
      });
    }
  }

  function formatCurrency(value: number) {
    const formattedValue = value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
    return formattedValue;
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
        {result && Object.keys(result).length > 0 && (
          <section className="result">
            <h2 className="result-title">{result.title}</h2>
            <span>Ethanol: {result.ethanol}</span>
            <span>Gasoline: {result.gasoline}</span>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
