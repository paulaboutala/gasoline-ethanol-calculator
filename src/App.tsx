import "./app.css";
import imgGasPump from "./assets/logo.png";
import { useState } from "react";

function App() {
  const [gasolinaInput, setGasolinaInput] = useState(1);
  const [alcoolInput, setAlcoolInput] = useState(1);

  function calcular(event) {
    alert("Teste!");
  }

  return (
    <div>
      <main className="container">
        <img className="imagem" src={imgGasPump} alt="bomba de gasolina" />
        <h1 className="title">Qual a melhor opção?</h1>
        <form className="form" onSubmit={calcular}>
          <label>Álcool (preço por litro):</label>
          <input
            className="input"
            type="number"
            placeholder="Insira o valor"
            min="1"
            step="0.01"
            required
          />

          <label>Gasolina (preço por litro):</label>
          <input
            className="input"
            type="number"
            placeholder="Insira o valor"
            min="1"
            step="0.01"
            required
          />
          <input className="button" type="submit" value="Calcular" />
        </form>
      </main>
    </div>
  );
}

export default App;
