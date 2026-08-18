import { useSelector } from "react-redux";

import FranchiseHero from "../template/FranchiseHero";
import FranchiseAccordion from "../template/FranchiseAccordion";
import { strangerThingsData } from "../../data/webseries/strangerThingsData";
import strangerthingsImage from "../../images/webseries/strangerthings/strangerthingsImage.jpeg";

function StrangerThings() {
  const progressMap = useSelector(
    (state) => state.progress.progressMap
  );

  const watched = progressMap.strangerthings || 0;

  const total = strangerThingsData.length;

  const progress =
    total > 0
      ? Math.round((watched / total) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        <FranchiseHero
          title="Stranger Things Web Series"
          subtitle="Web series"
          image={strangerthingsImage}
          watched={watched}
          total={total}
          progress={progress}
        />

        <FranchiseAccordion
          franchiseName="Stranger Things Web Series"
          content={strangerThingsData}
          contentId="strangerthings"
          completedCount={watched}
          showHeader={false}
        />

      </div>
    </div>
  );
}

export default StrangerThings;