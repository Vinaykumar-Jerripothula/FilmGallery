import { useSelector } from "react-redux";

import FranchiseHero from "../template/FranchiseHero";
import FranchiseAccordion from "../template/FranchiseAccordion";
import { theHungerGamesData } from "../../data/franchise/theHungerGamesData";
import thehungergamesImage from "../../images/franchise/thehungergames/thehungergamesImage.jpeg";

function TheHungerGames() {
  const progressMap = useSelector(
    (state) => state.progress.progressMap
  );

  const watched = progressMap.thehungergames || 0;

  const total = theHungerGamesData.length;

  const progress =
    total > 0
      ? Math.round((watched / total) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        <FranchiseHero
          title="The Hunger Games Franchise"
          subtitle="Franchise"
          image={thehungergamesImage}
          watched={watched}
          total={total}
          progress={progress}
        />

        <FranchiseAccordion
          franchiseName="The Hunger Games Franchise"
          content={theHungerGamesData}
          contentId="thehungergames"
          completedCount={watched}
          showHeader={false}
        />

      </div>
    </div>
  );
}

export default TheHungerGames;