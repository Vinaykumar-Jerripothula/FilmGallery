import { useSelector } from "react-redux";

import FranchiseHero from "../template/FranchiseHero";
import FranchiseAccordion from "../template/FranchiseAccordion";
import { gameOfThronesData } from "../../data/webseries/gameOfThronesData";
import gameofthronesImage from "../../images/webseries/gameofthrones/gameofthronesImage.jpeg";


function GameOfThrones() {
  const progressMap = useSelector(
    (state) => state.progress.progressMap
  );

  const watched = progressMap.gameofthrones || 0;

  const total = gameOfThronesData.length;

  const progress =
    total > 0
      ? Math.round((watched / total) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        <FranchiseHero
          title="Game of thrones Web Series"
          subtitle="Web series"
          image={gameofthronesImage}
          watched={watched}
          total={total}
          progress={progress}
        />

        <FranchiseAccordion
          franchiseName="Game of thrones Web Series"
          content={gameOfThronesData}
          contentId="gameofthrones"
          completedCount={watched}
          showHeader={false}
        />

      </div>
    </div>
  );
}

export default GameOfThrones;