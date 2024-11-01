import React from "react";
import "./style.css";

export default function Nome({ nome }) {
  return (
    <footer>
      <h1 className="name">Nome: {nome}</h1>
    </footer>
  );
}
