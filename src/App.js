import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Auth/Login";
import Bike from "./Pages/Bike";
import Bikecart from "./Pages/Bikecart";
import Bikecard from "./Pages/Bikecard";
import Bikedetail from "./Pages/Bikedetail";
import { Payment } from "@mui/icons-material";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bike" element={<Bike />} />
        <Route path="/cart" element={<Bikedetail />} />
        <Route path="/searchbike" element={<Bikecard />} />
        <Route path="/bikecart" element={<Bikecart />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
