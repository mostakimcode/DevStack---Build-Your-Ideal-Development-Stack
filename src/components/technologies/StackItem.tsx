import type { ITechnology } from "../../types/technology";
import { TbTrash } from "react-icons/tb";

interface IStackItemProps {
  tech: ITechnology;
  onRemove: (tech: ITechnology) => void;
}

const StackItem = ({ tech, onRemove }: IStackItemProps) => {
  return (
    <div className="flex items-center justify-between gap-3 border border-base-300 rounded-xl px-4 py-3">
      <div className="flex items-center gap-3">
        <img src={tech.icon} alt={tech.name} className="h-8 w-8 object-contain" />
        <div>
          <h4 className="font-semibold">{tech.name}</h4>
          <p className="text-xs text-base-content/50">{tech.category}</p>
        </div>
      </div>

      <button onClick={() => onRemove(tech)} className="text-error text-lg" aria-label="Remove">
        <TbTrash className="hover:bg-red-200 h-6 w-auto rounded-sm p-0.5 cursor-pointer"/>
      </button>
    </div>
  );
};

export default StackItem;