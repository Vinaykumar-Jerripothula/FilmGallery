import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ContentHero from "./ContentHero";
import ContentAccordion from "./ContentAccordion";
import { contentRegistry } from "../../data/Collection/contentRegistry";
import { useTheme } from "../../context/ThemeContext";
import { colors } from "../../themes/colors";

function FranchisePage() {
  const { slug } = useParams();
  const { theme } = useTheme();
  const currentTheme = colors[theme];
  const franchise = contentRegistry[slug];

  const progressMap = useSelector((state) => state.progress.progressMap);

  if (!franchise) {
    return (
      <div className="min-h-screen bg-[#0B0F14] text-white flex items-center justify-center">
        Content not found
      </div>
    );
  }

  const watched = progressMap[franchise.contentId] || 0;

  const total = franchise.content.length || 0;

  const progress = total > 0 ? Math.round((watched / total) * 100) : 0;

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white px-3 py-4 sm:px-4 md:px-6">
      <ContentHero
        title={franchise.title}
        subtitle={franchise.subtitle}
        image={franchise.image}
        watched={watched}
        total={total}
        progress={progress}
      />

      <ContentAccordion
        franchiseName={franchise.title}
        content={franchise.content}
        contentId={franchise.contentId}
        completedCount={watched}
        showHeader={false}
      />
    </div>
  );
}

export default FranchisePage;
