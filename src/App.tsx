import imgGasPump from "./assets/logo.png";

function App() {
  return (
    <div>
      <main className="container">
        <img className="imagem" src={imgGasPump} alt="bomba de gasolina" />
        <h1 className="title">Qual a melhor opção?</h1>
        <form className="form">
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
