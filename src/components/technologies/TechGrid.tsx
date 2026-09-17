import type { ITechnology } from "../../types/technology";
import TechCard from "./TechCard";

interface ITechGridProps {
  technologies: ITechnology[];
  stack: ITechnology[];
  handleAddToStack: (tech: ITechnology) => void;
}

const TechGrid = ({ technologies, stack, handleAddToStack }: ITechGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {technologies.map((tech) => {
        const isAdded = stack.some((item) => item.id === tech.id);

        return <TechCard key={tech.id} tech={tech} isAdded={isAdded} handleAddToStack={handleAddToStack} />;
      })}
    </div>
  );
};

export default TechGrid;