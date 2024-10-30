import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [imc, setImc] = useState();
  const [pesoCorporal, setPesoCorporal] = useState("");

  function calcular() {
    if (peso > 0 && altura > 0) {
      let alturaM = altura / 100;
      setImc(peso / (alturaM * alturaM).toFixed(2));
    } else {
      alert("Peso e altura devem ser maior q 0");
    }
  }
  function verificaPesoCorporal() {
    if (imc < 18.5) {
      setPesoCorporal("Esta abaixo do peso");
    } else if (imc >= 18.5 && imc < 24.9) {
      setPesoCorporal("Esta no Peso ideal");
    } else if (imc >= 25 && imc < 29.3) {
      setPesoCorporal("Esta no Sobrepeso");
    } else if (imc >= 29.3 && imc < 34.9) {
      setPesoCorporal("Esta com Obesidade Grau 1");
    } else if (imc >= 34.9 && imc < 39.9) {
      setPesoCorporal("Esta com Obesidade Grau 2");
    } else if (imc >= 39.9) {
      setPesoCorporal("Esta com Obesidade Grau Extrema");
    }
  }

  return (
    <body>
      <header>
        <div className="titulo">
          <h1>Calculadora de IMC</h1>
        </div>
      </header>
      <div className="calculadora">
        <main>
          <div className="peso">
            <label>Peso: </label>
            <input
              type="number"
              value={peso}
              placeholder="Digite seu Peso"
              onChange={(e) => setPeso(parseFloat(e.target.value))}
            />
          </div>

          <div className="altura">
            <label>Altura: </label>
            <input
              type="number"
              value={altura}
              placeholder="Digite sua Altura"
              onChange={(e) => setAltura(parseFloat(e.target.value))}
            />
          </div>
          <div className="botao">
            <button
              className="enviar"
              type="button"
              onClick={() => {
                calcular(), verificaPesoCorporal();
              }}
            >
              Calcular
            </button>
          </div>
          <section className="resultados">
            <div className="imc">
              <p>Seu Imc é: {imc}</p>
            </div>
            <div className="pesoC">
              <p>{pesoCorporal}</p>
            </div>
          </section>
        </main>

        
      </div>
    </body>
  );
}
