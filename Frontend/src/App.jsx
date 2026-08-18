import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MCU from "./components/universe/MCU";
import DCEU from "./components/universe/DCEU";
import DCU from "./components/universe/DCU";
import StarWars from "./components/universe/StarWars";
import { fetchProgress } from "./store/progressSlice";
import TheConjuring from "./components/universe/TheConjuring";
import MonsterVerse from "./components/universe/MonsterVerse";
import XMEN from "./components/universe/XMEN";
import Alien from "./components/franchise/Alien";
import BadBoys from "./components/franchise/BadBoys";
import TheLordOfTheRings from "./components/franchise/TheLordOfTheRings";
import JohnWick from "./components/franchise/JohnWick";
import HarryPotter from "./components/franchise/HarryPotter";
import PiratesOfTheCaribbean from "./components/franchise/PiratesOfTheCaribbean";
import PlanetOfTheApes from "./components/franchise/PlanetOfTheApes";
import TheHungerGames from "./components/franchise/TheHungerGames";
import JurassicPark from "./components/franchise/JurassicPark";
import MissionImpossible from "./components/franchise/MissionImpossible";
import { FastForward } from "lucide-react";
import FastAndFurious from "./components/franchise/FastAndFurious";
import JamesBond from "./components/franchise/JamesBond";
import Transformers from "./components/franchise/TransFormers";
import Predator from "./components/franchise/Predator";
import Terminator from "./components/franchise/Terminator";
import StarTrek from "./components/franchise/StarTrek";
import RockyCreed from "./components/franchise/RockyCreed";
import MadMax from "./components/franchise/MadMax";
import BreakingBad from "./components/webseries/BreakingBad";
import GameOfThrones from "./components/webseries/GameOfThrones";
import Vikings from "./components/webseries/Vikings";
import From from "./components/webseries/From";
import Dark from "./components/webseries/Dark";
import StrangerThings from "./components/webseries/StrangerThings";
import PeakyBlinders from "./components/webseries/PeakyBlinders";

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

        <Route path="/harrypotter" element={<HarryPotter />} />

        <Route path="/piratesofthecaribbean" element={<PiratesOfTheCaribbean />} />

        <Route path="/planetoftheapes" element={<PlanetOfTheApes />} />

        <Route path="/thehungergames" element={<TheHungerGames />} />

        <Route path="/jurassicpark" element={<JurassicPark />} />

        <Route path="/missionimpossible" element={<MissionImpossible />} />

        <Route path="/fastandfurious" element={<FastAndFurious />} />

        <Route path="/jamesbond" element={<JamesBond />} />

        <Route path="/transformers" element={<Transformers />} />

        <Route path="/predator" element={<Predator />} />

        <Route path="/terminator" element={<Terminator />} />

        <Route path="/startrek" element={<StarTrek />} />
        
        <Route path="/rockycreed" element={<RockyCreed />} />
        
        <Route path="/madmax" element={<MadMax />} />
        
        <Route path="/breakingbad" element={<BreakingBad />} />
        
        <Route path="/gameofthrones" element={<GameOfThrones />} />
        
        <Route path="/vikings" element={<Vikings />} />
        
        <Route path="/from" element={<From />} />
        
        <Route path="/dark" element={<Dark />} />
        
        <Route path="/strangerthings" element={<StrangerThings />} />
        
        <Route path="/peakyblinders" element={<PeakyBlinders />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
