import { useSelector } from "react-redux";

import FranchiseHero from "../template/FranchiseHero";
import FranchiseAccordion from "../template/FranchiseAccordion";
import { breakingBadUniverseData } from "../../data/webseries/breakingBadUniverseData"
import breakingbadImage from "../../images/webseries/breakingbad/breakingbadImage.jpeg";

function BreakingBad() {
  const progressMap = useSelector(
    (state) => state.progress.progressMap
  );

  const watched = progressMap.breakingbad || 0;

  const total = breakingBadUniverseData.length;

  const progress =
    total > 0
      ? Math.round((watched / total) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        <FranchiseHero
          title="Breaking Bad Franchise"
          subtitle="Web series"
          image={breakingbadImage}
          watched={watched}
          total={total}
          progress={progress}
        />

        <FranchiseAccordion
          franchiseName="Breaking Bad Franchise"
          content={breakingBadUniverseData}
          contentId="breakingbad"
          completedCount={watched}
          showHeader={false}
        />

      </div>
    </div>
  );
}

export default BreakingBad;