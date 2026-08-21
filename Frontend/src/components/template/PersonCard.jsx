import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { colors } from "../../themes/colors";

function PersonCard({ name, image, route }) {
  const navigate = useNavigate();

  const { theme } = useTheme();
  const currentTheme = colors[theme];

  return (
    <div
      onClick={() => navigate(route)}
      className="
        cursor-pointer
        flex-shrink-0
        w-[120px]
        sm:w-[140px]
      "
    >
      <div
        className={`
          overflow-hidden
          rounded-xl
          border
          ${currentTheme.border}
          ${currentTheme.card}
          transition-transform
          duration-300
          hover:scale-103
        `}
      >
        <img
          src={image}
          alt={name}
          className="
            w-full
            h-[180px]
            sm:h-[210px]
            object-cover
          "
        />
      </div>

      <h3
        className={`
          mt-2
          text-center
          text-xs
          sm:text-sm
          font-medium
          ${currentTheme.text}
        `}
      >
        {name}
      </h3>
    </div>
  );
}

export default PersonCard;