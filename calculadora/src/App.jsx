import React from "react";
import "./App.css";
import Header from "./components/Header/index.jsx";
import Imc from "./components/Form/index.jsx";
import Footer from "./components/Footer/index.jsx";

export default function App() {
  return (
    <body>
      <Header />
      <Imc />
      <Footer nome={"Rodrigo Carvalho Lima"} />
    </body>
  );
}
