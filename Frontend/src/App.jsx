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
import MonsterVerse from "./components/universe/MonsterVerse";
import XMEN from "./components/universe/XMEN";
import Alien from "./components/franchise/Alien";
import BadBoys from "./components/franchise/BadBoys";
import TheLordOfTheRings from "./components/franchise/TheLordOfTheRings";
import JohnWick from "./components/franchise/JohnWick";

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
        
        <Route path="/monsterverse" element={<MonsterVerse />} />
        
        <Route path="/xmen" element={<XMEN />} />

        <Route path="/alien" element={<Alien />} />
        
        <Route path="/badboys" element={<BadBoys />} />
      
        <Route path="/lordoftherings" element={<TheLordOfTheRings />} />
      
        <Route path="/johnwick" element={<JohnWick />} />
      

      </Routes>
    </BrowserRouter>
  );
}

export default App;