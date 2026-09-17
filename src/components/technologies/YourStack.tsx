import type { ITechnology } from "../../types/technology";
import StackItem from "./StackItem";

interface IYourStackProps {
  stack: ITechnology[];
  handleRemoveFromStack: (tech: ITechnology) => void;
  handleRemoveAll: () => void;
}

const YourStack = ({ stack, handleRemoveFromStack, handleRemoveAll }: IYourStackProps) => {
  return (
    <div className="rounded-2xl bg-base-100 border border-base-300 shadow-md p-6">
      <h3 className="font-bold text-xl">Your Stack</h3>
      <p className="text-sm text-base-content/60 mb-4">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} Technology Selected`}
      </p>

      {/* Conditional rendering: empty message vs. the list of picked items */}
      {stack.length === 0 ? (
        <div className="border-2 border-dashed border-base-300 rounded-xl py-10 text-center text-base-content/40">
          Your stack is empty.
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {stack.map((tech) => (
            <StackItem key={tech.id} tech={tech} onRemove={handleRemoveFromStack} />
          ))}
        </div>
      )}

      {stack.length > 0 && (
        <button
          onClick={handleRemoveAll}
          className="btn btn-outline btn-error rounded-full w-full mt-6"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default YourStack;