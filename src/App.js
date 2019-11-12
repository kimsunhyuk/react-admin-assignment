import React from "react";
import SimpleTabs from "./components/SimpleTabs";
import "./App.css";

export default function App() {
  return (
    <div className="pokemon">
      <div className="pokemonTab">
        <SimpleTabs></SimpleTabs>
      </div>
    </div>
  );
}
