import React from "react";
import "./App.css";
import Header from "./components/Header/index";
import Imc from "./components/Form/Imc";
import Footer from "./components/Footer/Nome";

export default function App() {
  return (
    <body>
      <Header />
      <Imc />
      <Footer nome={"Rodrigo Carvalho Lima"} />
    </body>
  );
}
