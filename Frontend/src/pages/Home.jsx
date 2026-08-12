import MCU from "../components/MCU";
import JohnWick from "../components/JohnWick";
import TheLordOfTheRings from "../components/TheLordOfTheRings";
import DCEU from "../components/DCEU";
import HarryPotter from "../components/HarryPotter";
import PiratesOfTheCaribbean from "../components/PiratesOfTheCaribbean";
import BreakingBad from "../components/BreakingBad";
import GameOfThrones from "../components/GameOfThrones";
import Vikings from "../components/Vikings";
import Dark from "../components/Dark";
import From from "../components/From";
import StrangerThings from "../components/StrangerThings";
import PeakyBlinders from "../components/PeakyBlinders";
import DCU from "../components/DCU";
import StarWars from "../components/StarWars";
import TheConjuring from "../components/TheConjuring";
import MonsterVerse from "../components/MonsterVerse";
import XMEN from "../components/XMEN";
import { Plane } from "lucide-react";
import PlanetOfTheApes from "../components/PlanetOfTheApes";
import TheHungerGames from "../components/TheHungerGames";
import JurassicPark from "../components/JurassicPark";
import Alien from "../components/Alien";
import MissionImpossible from "../components/MissionImpossible";
import FastAndFurious from "../components/FastAndFurious";
import JamesBond from "../components/JamesBond";
import TransFormers from "../components/TransFormers";
import Predator from "../components/Predator";
import Terminator from "../components/Terminator";
import StarTrek from "../components/StarTrek";
import RockyCreed from "../components/RockyCreed";
import MadMax from "../components/MadMax";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {

  const [progressMap, setProgressMap] = useState({});

  useEffect(() => {

  const userId = localStorage.getItem("userId");

  if (!userId) return;

  axios
    .get(`https://filmgallery.onrender.com/api/progres/${userId}`)
    .then((response) => {

      const map = {};

      response.data.forEach((item) => {
        map[item.contentId] =
          item.lastCompletedPosition;
      });

      setProgressMap(map);

      console.log(map);

    })
    .catch((error) => {
      console.error(error);
    });

}, []);

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        {/* Page Header */}
        <div className="mb-8 sm:mb-10">
          <h1 className="text-lg sm:text-2xl font-extrabold tracking-tight ml-6">
            Film Gallery
          </h1>

          <p className="mt-2 text-[10px] sm:text-base text-zinc-400 ml-6">
            Movies, Series & Franchises
          </p>
        </div>
        {/* ================= FRANCHISES ================= */}
<section className="mb-12">
  <h2 className="text-sm sm:text-xl font-bold ml-7 mb-4 text-orange-400">
    Cinematic Universe
  </h2>

  <div className="space-y-4 ml-4">
    <MCU progressMap={progressMap} />
    <DCEU progressMap={progressMap}/>
    <DCU progressMap={progressMap}/>
    <StarWars progressMap={progressMap}/>
    <TheConjuring progressMap={progressMap}/>
    <MonsterVerse progressMap={progressMap}/>
    <XMEN progressMap={progressMap}/>
  </div>
</section>
        {/* ================= FRANCHISES ================= */}
<section className="mb-12">
  <h2 className="text-sm sm:text-xl font-bold ml-4 mb-4 text-orange-400">
    Franchises
  </h2>

  <div className="space-y-4 ml-4">
   

    <TheLordOfTheRings progressMap={progressMap}/>
    <JohnWick progressMap={progressMap}/>
    <HarryPotter progressMap={progressMap}/>
    <PiratesOfTheCaribbean progressMap={progressMap}/>
    <PlanetOfTheApes progressMap={progressMap}/>
    <TheHungerGames progressMap={progressMap}/>
    <JurassicPark progressMap={progressMap}/>
    <Alien progressMap={progressMap}/>
    <MissionImpossible progressMap={progressMap}/>
    <FastAndFurious progressMap={progressMap}/>
    <JamesBond progressMap={progressMap}/>
    <TransFormers progressMap={progressMap}/>
    <Predator progressMap={progressMap}/>
    <Terminator progressMap={progressMap}/>
    <StarTrek progressMap={progressMap}/>
    <RockyCreed progressMap={progressMap}/>
    <MadMax progressMap={progressMap}/>
  </div>
</section>

{/* ================= TV / WEB SERIES ================= */}
<section className="mb-12">
  <h2 className="text-sm sm:text-xl font-bold ml-4 mb-4 text-orange-400">
    TV / Web Series
  </h2>

  <div className="text-zinc-500 ml-4 space-y-4">
    <BreakingBad progressMap={progressMap}/>
    <GameOfThrones progressMap={progressMap}/>
    <Vikings progressMap={progressMap}/>
    <Dark progressMap={progressMap}/>
    <From progressMap={progressMap}/>
    <StrangerThings progressMap={progressMap}/>
    <PeakyBlinders progressMap={progressMap}/>
  </div>
</section>

{/* ================= STANDALONE MOVIES ================= */}
<section className="mb-12">
  <h2 className="text-sm sm:text-xl font-bold ml-4 mb-4 text-orange-400">
    Standalone Movies
  </h2>

  <div className="text-zinc-500 ml-4">
    No movies added yet.
  </div>
</section>

{/* ================= DUOLOGIES ================= */}
<section className="mb-12">
  <h2 className="text-sm sm:text-xl font-bold ml-4 mb-4 text-orange-400">
    Duologies
  </h2>

  <div className="text-zinc-500 ml-4">
    No duologies added yet.
  </div>
</section>

{/* ================= TRILOGIES ================= */}
<section className="mb-12">
  <h2 className="text-sm sm:text-xl font-bold ml-4 mb-4 text-orange-400">
    Trilogies
  </h2>

  <div className="text-zinc-500 ml-4">
    No trilogies added yet.
  </div>
</section>

{/* ================= TETRALOGIES ================= */}
<section className="mb-12">
  <h2 className="text-sm sm:text-xl font-bold ml-4 mb-4 text-orange-400">
    Tetralogies
  </h2>

  <div className="text-zinc-500 ml-4">
    No Tetralogies added yet.
  </div>
</section>
{/* ================= PENTALOGIES ================= */}
<section className="mb-12">
  <h2 className="text-sm sm:text-xl font-bold ml-4 mb-4 text-orange-400">
    Pentalogies
  </h2>

  <div className="text-zinc-500 ml-4"  >
    No Pentalogies added yet.
  </div>
</section>
{/* ================= HEXALOGIES ================= */}
<section className="mb-12">
  <h2 className="text-sm sm:text-xl font-bold ml-4 mb-4 text-orange-400">
    Hexalogies
  </h2>

  <div className="text-zinc-500 ml-4">
    No Hexalogies added yet.
  </div>
</section>
{/* ================= HEPTALOGIES ================= */}
<section className="mb-12">
  <h2 className="text-sm sm:text-xl font-bold ml-4 mb-4 text-orange-400">
    Heptalogies
  </h2>

  <div className="text-zinc-500 ml-4">
    No Heptalogies added yet.
  </div>
</section>
{/* ================= OCTALOGIES ================= */}
<section className="mb-12">
  <h2 className="text-sm sm:text-xl font-bold ml-4 mb-4 text-orange-400">
    Octologies
  </h2>

  <div className="text-zinc-500 ml-4">
    No Octologies added yet.
  </div>
</section>
{/* ================= NONALOGIES ================= */}
<section className="mb-12">
  <h2 className="text-sm sm:text-xl font-bold ml-4 mb-4 text-orange-400">
    Nonalogies
  </h2>

  <div className="text-zinc-500 ml-4">
    No Nonalogies added yet.
  </div>
</section>
{/* ================= DOCALOGIES ================= */}
<section className="mb-12">
  <h2 className="text-sm sm:text-xl font-bold ml-4 mb-4 text-orange-400">
    Decalogies
  </h2>

  <div className="text-zinc-500 ml-4">
    No Decalogies added yet.
  </div>
</section>



{/* ================= ANIME ================= */}
<section className="mb-12">
  <h2 className="text-sm sm:text-xl font-bold ml-4 mb-4 text-orange-400">
    Anime
  </h2>

  <div className="text-zinc-500 ml-4">
    No anime added yet.
  </div>
</section>

      </div>
    </div>
  );
}

export default Home;