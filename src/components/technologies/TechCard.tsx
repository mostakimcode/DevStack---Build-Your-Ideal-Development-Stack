import type { ITechnology } from "../../types/technology";
import { FaStar } from "react-icons/fa";
import { categoryColors, difficultyColors } from "../../utils/badgeColors";


interface ITechCardProps {
  tech: ITechnology;
  isAdded: boolean;
  handleAddToStack: (tech: ITechnology) => void;
}

const TechCard = ({ tech, isAdded, handleAddToStack }: ITechCardProps) => {
  return (
    <div className={` rounded-2xl border border-base-300 bg-base-100 shadow-md p-5 flex flex-col ${isAdded? "border-2 border-pink-500" : ""} hover:scale-101 hover:shadow-xl transition-all duration-300 `} >
      <div className="flex items-start justify-between mb-4">
        <img
          src={tech.icon}
          alt={tech.name}
          className="h-12 w-12 object-contain"
          onError={(e) => (e.currentTarget.style.visibility = "hidden")}
        />
        <span className={`badge bg-gray-200 text-black border-none font-semibold`}>
          {tech.badge}
        </span>
      </div>

      <h3 className="text-lg font-bold">{tech.name}</h3>
      <p className="text-sm text-base-content/60 mt-1 mb-4 flex-1">{tech.description}</p>

      <div className="flex justify-between items-center gap-3 flex-wrap border-t border-base-300 pt-4 mb-4">
        <span className={`badge ${categoryColors[tech.category] ?? "badge-neutral"}`}>
          {tech.category}
        </span>
        <span className={`text-xs font-semibold ${difficultyColors[tech.difficulty] ?? ""}`}>
          {tech.difficulty}
        </span>

      
        <span className="flex items-center gap-1 font-semibold">
          <FaStar className="text-yellow-400" />
          {tech.rating}
        </span>
      </div>

        <button
          onClick={() => handleAddToStack(tech)}
          disabled={isAdded}
          className={`btn w-full rounded-xl border-none ${
            isAdded ? "btn-disabled" : `bg-neutral-900 hover:bg-neutral-700 text-white border-none`
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      
    </div>
  );
};

export default TechCard;