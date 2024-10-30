import React from "react";
import "./App.css";
import IMC from "./components/IMC";
import Nome from "./components/Nome";

export default function App() {

  return (
    <body>
      <header>
        <div className="titulo">
          <h1>Calculadora de IMC</h1>
        </div>
      </header>
      <IMC/>
       <Nome nome={"Rodrigo Carvalho Lima"}/> 
    </body>
  );
}
