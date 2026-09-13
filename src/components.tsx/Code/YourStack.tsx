
import { toast, Bounce } from "react-toastify";
import type { Dispatch, SetStateAction } from "react";
import type { Icard } from "./Type";

interface YourStackProps {
  selectedCards: Icard[];
  setSelectedCards: Dispatch<SetStateAction<Icard[]>>;
}

const YourStack = ({
  selectedCards,
  setSelectedCards,
}: YourStackProps) => {
  // Remove one card
  const handleRemove = (id: string) => {
    const removedCard = selectedCards.find(
      (card) => card.id === id
    );

    setSelectedCards(
      selectedCards.filter((card) => card.id !== id)
    );

    toast.success(
      `${removedCard?.name} removed from your stack!`,
      {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      }
    );
  };

  // Remove all cards
  const handleRemoveAll = () => {
    setSelectedCards([]);

    toast.success("All technologies removed from your stack!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="border border-gray-100 rounded-xl bg-white p-5 shadow-sm">

      {/* Title */}
      <h2 className="text-sm font-bold text-slate-800">
        Your Stack
      </h2>

      {/* Selected Count */}
      <p className="text-[9px] text-slate-400 mt-1">
        {selectedCards.length} Technology Selected
      </p>

      {/* Selected Cards */}
      {selectedCards.length === 0 ? (
        <p className="text-center text-xs text-slate-400 py-8">
          Your Stack is empty.
        </p>
      ) : (
        <div className="mt-4 space-y-2">

          {selectedCards.map((card) => (
            <div
              key={card.id}
              className="flex items-center justify-between border border-gray-100 rounded-lg p-2"
            >

              {/* Card Info */}
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
                className="btn btn-ghost btn-xs text-gray-400 hover:text-red-500 text-xl"
              >
                ×
              </button>

            </div>
          ))}

        </div>
      )}

      {/* Remove All */}
      <button
        onClick={handleRemoveAll}
        disabled={selectedCards.length === 0}
        className="w-full border border-red-200 text-red-500 text-[9px] py-2 rounded-md mt-4 disabled:opacity-40 hover:bg-red-50 transition-colors"
      >
        Remove All
      </button>

    </div>
  );
};

export default YourStack;
