import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MCU from "./components/universe/MCU";
import DCEU from "./components/universe/DCEU";
import DCU from "./components/universe/DCU";
import StarWars from "./components/universe/StarWars"
import { fetchProgress } from "./store/progressSlice";
import TheConjuring from "./components/universe/TheConjuring";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      return;
    }

    dispatch(fetchProgress(userId));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="/" element={<Signup />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/login" element={<Login />} />

        <Route path="/mcu" element={<MCU />} />

        <Route path="/dceu" element={<DCEU />} />

        <Route path="/dcu" element={<DCU />} />

        <Route path="/starwars" element={<StarWars />} />

        <Route path="/theconjuring" element={<TheConjuring />} />
        
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;