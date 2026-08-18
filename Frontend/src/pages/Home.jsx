import HorizontalCarousel from "../components/template/HorizontalCarousel";
import { franchiseData } from "../data/Collection/franchiseData";
import { universeData } from "../data/Collection/universeData";
import { seriesData } from "../data/Collection/webseries";
import { duologyData } from "../data/Collection/duologyData";
import { triologyData } from "../data/Collection/triologyData";
import { tetralogyData } from "../data/Collection/tetralogyData";

function Home() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* Page Header */}
        <div className="mb-8 sm:mb-10">
          <h1 className="text-lg sm:text-2xl font-extrabold tracking-tight">
            Film Gallery
          </h1>

          <p className="mt-2 text-[10px] sm:text-base text-zinc-400">
            Movies, Series & Franchises
          </p>
        </div>

        {/* ================= CINEMATIC UNIVERSE ================= */}
        <HorizontalCarousel title="Cinematic Universe" items={universeData} />

        {/* ================= FRANCHISES ================= */}
        <HorizontalCarousel title="Franchises" items={franchiseData} />

        {/* ================= TV / Web Series ================= */}
        <HorizontalCarousel title="TV / Web Series" items={seriesData} />
        <HorizontalCarousel title="Duology" items={duologyData} />

        <HorizontalCarousel title="Trilogy" items={triologyData} />

        <HorizontalCarousel title="Tetralogy" items={tetralogyData} />
      </div>
    </div>
  );
}

export default Home;
