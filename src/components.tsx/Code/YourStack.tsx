import type { Dispatch, SetStateAction } from "react";
import type { Icard } from "./Type";

interface YourStackProps {
  selectedCards: Icard[];
  setSelectedCards: Dispatch<SetStateAction<Icard[]>>;
}

const YourStack = ({ selectedCards, setSelectedCards }: YourStackProps) => {
  const handleRemove = (id: string) => {
    setSelectedCards(selectedCards.filter((card) => card.id !== id));
  };

  const handleRemoveAll = () => {
    setSelectedCards([]);
  };

  return (
    <div className="border border-gray-100 rounded-xl bg-white p-5 shadow-sm">
      <h2 className="text-sm font-bold text-slate-800">Your Stack</h2>

      <p className="text-[9px] text-slate-400 mt-1">
        {selectedCards.length} Technology Selected
      </p>

      {selectedCards.length === 0 ? (
        <p className="text-center text-xs text-slate-400 py-8">
          No technology selected yet.
        </p>
      ) : (
        <div className="mt-4 space-y-2">
          {selectedCards.map((card) => (
            <div
              key={card.id}
              className="flex items-center justify-between border border-gray-100 rounded-lg p-2"
            >
              <div className="flex items-center gap-2">
                <img
                  src={card.icon}
                  alt={card.name}
                  className="w-6 h-6 object-contain"
                />

                <span className="text-xs font-medium text-slate-700">
                  {card.name}
                </span>
              </div>

              {/* X Button */}
              <button
                onClick={() => handleRemove(card.id)}
                className="btn btn-ghost btn-xs text-gray-400 hover:text-red-500 text-2xl"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={handleRemoveAll}
        disabled={selectedCards.length === 0}
        className="w-full border border-red-200 text-red-500 text-[9px] py-2 rounded-md mt-4 disabled:opacity-40"
      >
        Remove All
      </button>
    </div>
  );
};

export default YourStack;
