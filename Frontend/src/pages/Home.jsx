import MarvelCinematicUniverse from "../components/FranchiseAccordion";
import { mcuData } from "../data/mcuData";
import JohnWick from "../components/JohnWick";
import TheLordOfTheRings from "../components/TheLordOfTheRings";
import DCEU from "../components/DCEU";
import HarryPotter from "../components/HarryPotter";
import PiratesOfTheCaribbean from "../components/PiratesOfTheCaribbean";
import BreakingBad from "../components/BreakingBad";
import GameOfThrones from "../components/GameOfThrones";
import Vikings from "../components/Vikings";

function Home() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        {/* Page Header */}
        <div className="mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-5xl font-extrabold tracking-tight">
            Film Gallery
          </h1>

          <p className="mt-2 text-xs sm:text-base text-zinc-400">
            Movies, Series & Franchises
          </p>
        </div>
        {/* ================= FRANCHISES ================= */}
<section className="mb-12">
  <h2 className="text-xl sm:text-3xl font-bold mb-4 text-orange-400">
    Cinematic Universe
  </h2>

  <div className="space-y-4">
    <MarvelCinematicUniverse
      franchiseName="Marvel Cinematic Universe"
      content={mcuData}
    />
    <DCEU />
    
  </div>
</section>
        {/* ================= FRANCHISES ================= */}
<section className="mb-12">
  <h2 className="text-xl sm:text-3xl font-bold mb-4 text-orange-400">
    Franchises
  </h2>

  <div className="space-y-4">
   

    <TheLordOfTheRings />
    <JohnWick />
    <HarryPotter />
    <PiratesOfTheCaribbean />
  </div>
</section>

{/* ================= TV / WEB SERIES ================= */}
<section className="mb-12">
  <h2 className="text-xl sm:text-3xl font-bold mb-4 text-orange-400">
    TV / Web Series
  </h2>

  <div className="text-zinc-500 space-y-4">
    <BreakingBad />
    <GameOfThrones />
    <Vikings />
  </div>
</section>

{/* ================= STANDALONE MOVIES ================= */}
<section className="mb-12">
  <h2 className="text-xl sm:text-3xl font-bold mb-4 text-orange-400">
    Standalone Movies
  </h2>

  <div className="text-zinc-500">
    No movies added yet.
  </div>
</section>

{/* ================= DUOLOGIES ================= */}
<section className="mb-12">
  <h2 className="text-xl sm:text-3xl font-bold mb-4 text-orange-400">
    Duologies
  </h2>

  <div className="text-zinc-500">
    No duologies added yet.
  </div>
</section>

{/* ================= TRILOGIES ================= */}
<section className="mb-12">
  <h2 className="text-xl sm:text-3xl font-bold mb-4 text-orange-400">
    Trilogies
  </h2>

  <div className="text-zinc-500">
    No trilogies added yet.
  </div>
</section>

{/* ================= TETRALOGIES ================= */}
<section className="mb-12">
  <h2 className="text-xl sm:text-3xl font-bold mb-4 text-orange-400">
    Tetralogies
  </h2>

  <div className="text-zinc-500">
    No Tetralogies added yet.
  </div>
</section>
{/* ================= PENTALOGIES ================= */}
<section className="mb-12">
  <h2 className="text-xl sm:text-3xl font-bold mb-4 text-orange-400">
    Pentalogies
  </h2>

  <div className="text-zinc-500"  >
    No Pentalogies added yet.
  </div>
</section>
{/* ================= HEXALOGIES ================= */}
<section className="mb-12">
  <h2 className="text-xl sm:text-3xl font-bold mb-4 text-orange-400">
    Hexalogies
  </h2>

  <div className="text-zinc-500">
    No Hexalogies added yet.
  </div>
</section>
{/* ================= HEPTALOGIES ================= */}
<section className="mb-12">
  <h2 className="text-xl sm:text-3xl font-bold mb-4 text-orange-400">
    Heptalogies
  </h2>

  <div className="text-zinc-500">
    No Heptalogies added yet.
  </div>
</section>
{/* ================= OCTALOGIES ================= */}
<section className="mb-12">
  <h2 className="text-xl sm:text-3xl font-bold mb-4 text-orange-400">
    Octologies
  </h2>

  <div className="text-zinc-500">
    No Octologies added yet.
  </div>
</section>
{/* ================= NONALOGIES ================= */}
<section className="mb-12">
  <h2 className="text-xl sm:text-3xl font-bold mb-4 text-orange-400">
    Nonalogies
  </h2>

  <div className="text-zinc-500">
    No Nonalogies added yet.
  </div>
</section>
{/* ================= DOCALOGIES ================= */}
<section className="mb-12">
  <h2 className="text-xl sm:text-3xl font-bold mb-4 text-orange-400">
    Decalogies
  </h2>

  <div className="text-zinc-500">
    No Decalogies added yet.
  </div>
</section>



{/* ================= ANIME ================= */}
<section className="mb-12">
  <h2 className="text-xl sm:text-3xl font-bold mb-4 text-orange-400">
    Anime
  </h2>

  <div className="text-zinc-500">
    No anime added yet.
  </div>
</section>

      </div>
    </div>
  );
}

export default Home;