import { toast, Bounce } from "react-toastify";
import type { Dispatch, SetStateAction } from "react";
import type { Icard } from "./Type";

interface AvailableCardsProps {
  Cards: Icard[];
  selectedCards: Icard[];
  setSelectedCards: Dispatch<SetStateAction<Icard[]>>;
}

const badgeColors: Record<string, string> = {
  Popular: "bg-blue-50 text-blue-500",
  Fast: "bg-orange-50 text-orange-500",
  Essential: "bg-cyan-50 text-cyan-500",
  Reliable: "bg-red-50 text-red-500",
  "Top SQL": "bg-purple-50 text-purple-500",
  Containers: "bg-indigo-50 text-indigo-500",
};

const AvailableCards = ({
  Cards,
  selectedCards,
  setSelectedCards,
}: AvailableCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {Cards.map((card) => (
        <div
          key={card.id}
          className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm flex flex-col justify-between hover:shadow-md transition-all"
        >
          {/* Icon + Badge */}
          <div className="flex justify-between items-start">
            <img
              src={card.icon}
              alt={card.name}
              className="w-7 h-7 object-contain"
            />

            <span
              className={`px-2 py-1 rounded-full text-[8px] font-medium ${
                badgeColors[card.badge] || "bg-gray-50 text-gray-500"
              }`}
            >
              {card.badge}
            </span>
          </div>

          {/* Name */}
          <h3 className="text-sm font-bold text-slate-800 mt-3">{card.name}</h3>

          {/* Description */}
          <p className="text-[9px] text-slate-400 mt-1 leading-relaxed min-h-[32px]">
            {card.description}
          </p>

          {/* Category + Difficulty + Rating */}
          <div className="flex items-center gap-1 mt-3 text-[8px]">
            <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded font-medium">
              {card.category}
            </span>

            <span className="text-slate-600">{card.difficulty}</span>

            <span className="ml-auto flex items-center gap-1 font-semibold text-slate-700">
              <span className="text-amber-400">★</span>
              {card.rating}
            </span>
          </div>

          {/* Add to Stack */}
          <button
            disabled={selectedCards.some(
              (selectedCard) => selectedCard.id === card.id,
            )}
            onClick={(e) => {
              e.currentTarget.classList.add("scale-90");

              setTimeout(() => {
                e.currentTarget.classList.remove("scale-90");
              }, 150);

              setSelectedCards((prev) => [...prev, card]);

              toast.success(`${card.name} added to your stack!`, {
                position: "bottom-right",
                autoClose: 2000,
                theme: "light",
                transition: Bounce,
              });
            }}
            className={`w-full text-white text-[9px] font-semibold py-2 rounded-md mt-3 transition-all ${
              selectedCards.some((selectedCard) => selectedCard.id === card.id)
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#080C14] hover:bg-slate-800"
            }`}
          >
            {selectedCards.some((selectedCard) => selectedCard.id === card.id)
              ? "Added to Stack"
              : "Add to Stack"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default AvailableCards;
