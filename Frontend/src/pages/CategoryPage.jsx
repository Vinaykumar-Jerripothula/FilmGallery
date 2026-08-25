import { useParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import PersonCard from "../components/template/PersonCard";
import { useNavigate } from "react-router-dom";
import { actorsData } from "../data/hollywood/people/actorsData";
import { directorsData } from "../data/hollywood/people/directorsData";
import { universeData } from "../data/Collection/universeData";
import { franchiseData } from "../data/Collection/franchiseData";
import { seriesData } from "../data/Collection/webseries";
import { duologyData } from "../data/Collection/duologyData";
import { triologyData } from "../data/Collection/trilogyData";
import { tetralogyData } from "../data/Collection/tetralogyData";
import ContentCard from "../components/template/ContentCard";

import { useTheme } from "../context/ThemeContext";
import { colors } from "../themes/colors";

function CategoryPage() {
  const { type } = useParams();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const currentTheme = colors[theme];

  let data = [];

  if (type === "actors") data = actorsData;
  if (type === "directors") data = directorsData;

  if (type === "universes") data = universeData;
  if (type === "franchises") data = franchiseData;
  if (type === "series") data = seriesData;
  if (type === "duologies") data = duologyData;
  if (type === "trilogies") data = triologyData;
  if (type === "tetralogies") data = tetralogyData;

  return (
    <div className={`min-h-screen ${currentTheme.page} ${currentTheme.text}`}>
      {" "}
      <Navbar enableSearch={false} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <h1 className="text-xl sm:text-2xl font-bold mb-6 capitalize">
          All {type}
        </h1>

        {type === "actors" || type === "directors" ? (
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {data.map((person) => (
              <PersonCard
                key={person.id}
                id={person.id}
                name={person.name}
                image={person.image}
                route={person.route}
                slug={person.slug}
                type={type === "actors" ? "actor" : "director"}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.map((item) => (
              <ContentCard
                key={item.id}
                title={item.title}
                image={item.image}
                total={item.total}
                route={item.route}
                contentId={item.contentId}
              />
            ))}
          </div>
        )}
        <div className="flex justify-center mt-8 sm:mt-10">
          <button
            onClick={() => navigate("/home")}
            className="
      px-4
      py-1
      rounded-lg
      bg-orange-500
      hover:bg-orange-600
      text-white
      font-medium
      transition-colors
    "
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
export default CategoryPage;
