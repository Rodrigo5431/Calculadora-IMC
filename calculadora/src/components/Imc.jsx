import React, { useEffect, useState } from "react";
import "./Imc.css";
import obesidade from "../assets/obesidade.jpg";

export default function IMC() {
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [imc, setImc] = useState();
  const [pesoCorporal, setPesoCorporal] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [showTable, setShowTable] = useState(false);

  function calcular() {
    if (peso > 0 && altura > 0) {
      let alturaM = altura / 100;
      let imcCalculado = (peso / (alturaM * alturaM)).toFixed(2);
      setImc(imcCalculado);
      verificaPesoCorporal(imcCalculado);
    } else {
      alert("Peso e altura devem ser maior q 0");
    }
  }
  function verificaPesoCorporal(imcCalculado) {
    if (imcCalculado < 18.5) {
      setPesoCorporal("Esta abaixo do peso");
    } else if (imcCalculado >= 18.5 && imcCalculado <= 24.9) {
      setPesoCorporal("Eutrofia, Esta no Peso ideal");
    } else if (imcCalculado >= 25 && imcCalculado <= 29.9) {
      setPesoCorporal("Esta no Sobrepeso");
    } else if (imcCalculado >= 30.0 && imcCalculado <= 34.9) {
      setPesoCorporal("Esta com Obesidade Grau 1");
    } else if (imcCalculado >= 35.0 && imcCalculado <= 39.9) {
      setPesoCorporal("Esta com Obesidade Grau 2");
    } else if (imcCalculado > 40.0) {
      setPesoCorporal("Esta com Obesidade Grau Extrema");
    }
    setShowResults(true);
  }

  return (
    <form className="calculadora">
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
              calcular();
            }}
          >
            Calcular
          </button>
        </div>

        {showResults && (
          <section className="resultados">
            <div className="imc">
              <p>Imc: {imc}</p>
            </div>
            <div className="pesoC">
              <p>{pesoCorporal}</p>
            </div>
            <div className="verTabela">
              <a
                href=""
                className="botaoTabela"
                onClick={(e) => {
                  e.preventDefault(), setShowTable(!showTable);
                }}
              >
                {showTable ? "Fechar Tabela" : "Ver tabela"}
              </a>
            </div>
          </section>
        )}  
        {showTable && (
          <section className="tabela">
            <img className="imagem" src={obesidade} alt="" />
          </section>
        )}
      </main>
    </form>
  );
}
