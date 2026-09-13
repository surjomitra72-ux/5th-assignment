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
      {Cards.map((card) => {
        const isSelected = selectedCards.some(
          (selectedCard) => selectedCard.id === card.id,
        );

        return (
          <div
            key={card.id}
            className={`rounded-xl border bg-white p-3 shadow-sm flex flex-col justify-between hover:shadow-md transition-all ${
              isSelected ? "border-pink-500" : "border-gray-100"
            }`}
          >

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


            <h3 className="text-sm font-bold text-slate-800 mt-3">
              {card.name}
            </h3>

       
            <p className="text-[11px] text-slate-400 mt-2 leading-5 min-h-[60px]">
              {card.description}
            </p>

       
            <div className="flex items-center mt-3 text-[10px]">
              <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded font-medium">
                {card.category}
              </span>

              <span className="flex-1 text-center text-slate-500">
                {card.difficulty}
              </span>

              <span className="flex items-center gap-1 font-semibold text-slate-700">
                <span className="text-amber-400">★</span>
                {card.rating}
              </span>
            </div>

      
            <button
              disabled={isSelected}
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
              className={`w-full text-[9px] font-semibold py-2 rounded-md mt-3 transition-all ${
                isSelected
                  ? "bg-pink-100 text-pink-500 cursor-not-allowed"
                  : "bg-[#080C14] text-white hover:bg-slate-800"
              }`}
            >
              {isSelected ? "✓ Added to Stack" : "Add to Stack"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AvailableCards;