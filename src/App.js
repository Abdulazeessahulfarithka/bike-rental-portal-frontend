import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Layout/Header";
import { Route, Routes } from "react-router-dom";

import Forms from "./Components/Layout/Forms";
import Footer from "./Components/Layout/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Forms />
      <Footer />
    </div>
  );
}

export default App;
