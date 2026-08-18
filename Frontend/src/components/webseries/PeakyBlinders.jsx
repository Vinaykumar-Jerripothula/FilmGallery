import { useSelector } from "react-redux";

import FranchiseHero from "../template/FranchiseHero";
import FranchiseAccordion from "../template/FranchiseAccordion";
import { peakyBlindersData } from "../../data/webseries/peakyBlindersData";
import peakyblindersImage from "../../images/webseries/peakyblinders/peakyblindersImage.jpeg";


function PeakyBlinders() {
  const progressMap = useSelector(
    (state) => state.progress.progressMap
  );

  const watched = progressMap.peakyblinders || 0;

  const total = peakyBlindersData.length;

  const progress =
    total > 0
      ? Math.round((watched / total) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        <FranchiseHero
          title="Peaky Blinders Web Series"
          subtitle="Web series"
          image={peakyblindersImage}
          watched={watched}
          total={total}
          progress={progress}
        />

        <FranchiseAccordion
          franchiseName="Peaky Blinders Web Series"
          content={peakyBlindersData}
          contentId="peakyblinders"
          completedCount={watched}
          showHeader={false}
        />

      </div>
    </div>
  );
}

export default PeakyBlinders;