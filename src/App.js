import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar";
import Money from "./Money.js";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AllData from "./AllData";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Money />} exact />

          <Route path="/alldata" element={<AllData />} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
