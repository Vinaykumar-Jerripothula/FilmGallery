import { useParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import PersonCard from "../components/template/PersonCard";
import { useNavigate } from "react-router-dom";
import { actorsData } from "../data/people/actorsData";
import { directorsData } from "../data/people/directorsData";

import { useTheme } from "../context/ThemeContext";
import { colors } from "../themes/colors";

function CategoryPage() {
  const { type } = useParams();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const currentTheme = colors[theme];


  let data = [];

  if (type === "actors") {
    data = actorsData;
  }

  if (type === "directors") {
    data = directorsData;
  }


  return (
    <div className={`min-h-screen ${currentTheme.page} ${currentTheme.text}`}>
      {" "}
      <Navbar enableSearch={false} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <h1 className="text-xl sm:text-2xl font-bold mb-6 capitalize">
          All {type}
        </h1>

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
        <div className="flex justify-center mt-8 sm:mt-10">
          <button
            onClick={() => navigate("/home")}
            className="
      px-4
      py-2
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
