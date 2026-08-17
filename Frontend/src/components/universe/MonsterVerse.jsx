import { useSelector } from "react-redux";

import FranchiseHero from "../template/FranchiseHero";
import FranchiseAccordion from "../template/FranchiseAccordion";

import { monsterVerseData } from "../../data/universe/monsterVerseData";
import monsterVerseImage from "../..//images/universe/monsterverse/monsterVerseImage.jpeg";

function MonsterVerse() {
  const progressMap = useSelector(
    (state) => state.progress.progressMap
  );

  // Progress for the complete MCU is stored under the "mcu" contentId.
  const watched = progressMap.monsterverse || 0;

  const total = monsterVerseData.length;

  const progress =
    total > 0
      ? Math.round((watched / total) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        {/* ================= MCU HERO ================= */}
        <FranchiseHero
          title="Marvel Cinematic Universe"
          subtitle="Cinematic Universe"
          image={monsterVerseImage}
          watched={watched}
          total={total}
          progress={progress}
        />

        {/* ================= MCU CONTENT ================= */}
        <FranchiseAccordion
          franchiseName="Marvel Cinematic Universe"
          content={monsterVerseData}
          contentId="monsterverse"
          completedCount={watched}
          showHeader={false}
        />

      </div>
    </div>
  );
}

export default MonsterVerse;