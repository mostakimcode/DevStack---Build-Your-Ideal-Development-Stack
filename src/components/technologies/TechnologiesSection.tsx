import { useState } from "react";
import { toast } from "react-toastify";
import type { ITechnology } from "../../types/technology";
import TechGrid from "./TechGrid";
import YourStack from "./YourStack";
import { GRADIENT_TEXT } from "../../utils/theme";

interface ITechnologiesSectionProps {
  technologies: ITechnology[];
}

const TechnologiesSection = ({ technologies }: ITechnologiesSectionProps) => {
  const [stack, setStack] = useState<ITechnology[]>([]);

  const handleAddToStack = (tech: ITechnology) => {
    const alreadyAdded = stack.some((item) => item.id === tech.id);

    if (alreadyAdded) {
      toast.warning(`${tech.name} is already in your stack`);
      return;
    }

    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack`);
  };

  const handleRemoveFromStack = (tech: ITechnology) => {
    setStack(stack.filter((item) => item.id !== tech.id));
    toast.error(`${tech.name} removed from your stack`);
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.error("Your stack has been cleared");
  };

  return (
    <div className=" lg:max-w-[85%] md:max-w-[90%] sm:max-w-[96%] mx-auto px-4 py-10">
      <h2 className="font-bold text-3xl mb-1 text-center lg:text-left">
        Explore the <span className={GRADIENT_TEXT}>Technologies</span>
      </h2>
      <p className="text-base-content/60 mb-8 text-center lg:text-left">
       Pick one technology per category to build your ideal stack.
      </p>

      <div className="max-w-[92%] md:max-w-full mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <TechGrid technologies={technologies} stack={stack} handleAddToStack={handleAddToStack} />
        </div>

        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-24">
            <YourStack
              stack={stack}
              handleRemoveFromStack={handleRemoveFromStack}
              handleRemoveAll={handleRemoveAll}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesSection;