import logo from "./logo.svg";
import "./App.css";
import Money from "./Money.js";
import NavBar from "./NavBar.js";
import Books from "./Pages/Books";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Money />


    </>
  );
}

export default App;
