import MCU from "../components/universe/MCU";
import JohnWick from "../components/franchise/JohnWick";
import TheLordOfTheRings from "../components/franchise/TheLordOfTheRings";
import DCEU from "../components/universe/DCEU";
import HarryPotter from "../components/franchise/HarryPotter";
import PiratesOfTheCaribbean from "../components/franchise/PiratesOfTheCaribbean";
import BreakingBad from "../components/webseries/BreakingBad";
import GameOfThrones from "../components/webseries/GameOfThrones";
import Vikings from "../components/webseries/Vikings";
import Dark from "../components/webseries/Dark";
import From from "../components/webseries/From";
import StrangerThings from "../components/webseries/StrangerThings";
import PeakyBlinders from "../components/webseries/PeakyBlinders";
import DCU from "../components/universe/DCU";
import StarWars from "../components/universe/StarWars";
import TheConjuring from "../components/universe/TheConjuring";
import MonsterVerse from "../components/universe/MonsterVerse";
import XMEN from "../components/universe/XMEN";
import { Plane } from "lucide-react";
import PlanetOfTheApes from "../components/franchise/PlanetOfTheApes";
import TheHungerGames from "../components/franchise/TheHungerGames";
import JurassicPark from "../components/franchise/JurassicPark";
import Alien from "../components/franchise/Alien";
import MissionImpossible from "../components/franchise/MissionImpossible";
import FastAndFurious from "../components/franchise/FastAndFurious";
import JamesBond from "../components/franchise/JamesBond";
import TransFormers from "../components/franchise/TransFormers";
import Predator from "../components/franchise/Predator";
import Terminator from "../components/franchise/Terminator";
import StarTrek from "../components/franchise/StarTrek";
import RockyCreed from "../components/franchise/RockyCreed";
import MadMax from "../components/franchise/MadMax";
import { useEffect, useState } from "react";
import axios from "axios";
import BladeRunner from "../components/duology/BladeRunner";
import TopGun from "../components/duology/TopGun";
import JackReacher from "../components/duology/JackReacher";
import SherlockHolmes from "../components/duology/SherlockHolmes";
import KillBill from "../components/duology/KillBill";
import TheRaid from "../components/duology/TheRaid";
import TheDarkKnight from "../components/triology/TheDarkKnight";
import ChroniclesOfNarnia from "../components/triology/ChronicalsOfNarnia";
import MazuRunner from "../components/triology/MazeRunner";
import Before from "../components/triology/Before";
import Millennium from "../components/triology/Millennium";
import TheMatrix from "../components/tetralogy/TheMatrix";
import BadBoys from "../components/tetralogy/BadBoys";
import Expandables from "../components/tetralogy/Expandables";

function Home() {

  const [progressMap, setProgressMap] = useState({});

  useEffect(() => {

  const userId = localStorage.getItem("userId");

  if (!userId) return;

  axios
    .get(`https://filmgallery.onrender.com/api/progress/${userId}`)
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

  <div className="text-zinc-500 ml-4 space-y-4">
    No movies added yet.
  </div>
</section>

{/* ================= DUOLOGIES ================= */}
<section className="mb-12">
  <h2 className="text-sm sm:text-xl font-bold ml-4 mb-4 text-orange-400">
    Duologies
  </h2>

  <div className="text-zinc-500 ml-4 space-y-4  ">
   <BladeRunner progressMap={progressMap}/>
   <TopGun progressMap={progressMap}/>
   <JackReacher progressMap={progressMap} />
   <SherlockHolmes progressMap={progressMap} />
   <KillBill progressMap={progressMap} />
   <TheRaid progressMap={progressMap} />
  </div>
</section>

{/* ================= TRILOGIES ================= */}
<section className="mb-12">
  <h2 className="text-sm sm:text-xl font-bold ml-4 mb-4 text-orange-400">
    Trilogies
  </h2>

  <div className="text-zinc-500 ml-4 space-y-4">
    <TheDarkKnight progressMap={progressMap} />
    <ChroniclesOfNarnia progressMap={progressMap} />
    <MazuRunner progressMap={progressMap} /> 
    <Before progressMap={progressMap} />
    <Millennium progressMap={progressMap} />
  </div>
</section>

{/* ================= TETRALOGIES ================= */}
<section className="mb-12">
  <h2 className="text-sm sm:text-xl font-bold ml-4 mb-4 text-orange-400">
    Tetralogies
  </h2>

  <div className="text-zinc-500 ml-4 space-y-4">
    <TheMatrix progressMap={progressMap} />
    <BadBoys progressMap={progressMap} />
    <Expandables progressMap={progressMap} />
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