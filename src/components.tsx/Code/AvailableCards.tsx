import type { Icard } from "./Type";

interface AvailableCardsProps {
  Cards: Icard[];
}

const getBadgeStyle = (badge: string) => {
  if (badge === "Popular") return "badge-primary";
  if (badge === "New") return "badge-success";
  if (badge === "Trending") return "badge-warning";

  return "badge-neutral";
};

const AvailableCards = ({ Cards }: AvailableCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto px-4 sm:px-6">
      {Cards.map((card) => (
        <div
          key={card.id}
          className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm flex flex-col justify-between transition-all hover:shadow-md"
        >
          <div>
            {/* Icon + Badge */}
            <div className="flex justify-between items-start">
              <img
                src={card.icon}
                alt={card.name}
                className="w-9 h-9 object-contain"
              />

              <span className={`badge ${getBadgeStyle(card.badge)}`}>
                {card.badge}
              </span>
            </div>

            {/* Name */}
            <h3 className="text-base font-bold text-slate-800 mt-4">
              {card.name}
            </h3>

            {/* Description */}
            <p className="text-xs text-slate-400 mt-2 leading-relaxed min-h-[40px]">
              {card.description}
            </p>
          </div>

          <div>
            {/* Category + Difficulty + Rating */}
            <div className="flex items-center gap-2 mt-4 text-xs">
              <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded text-[11px] font-medium">
                {card.category}
              </span>

              <span className="text-slate-400 text-[11px]">
                {card.difficulty}
              </span>

              <span className="ml-auto flex items-center gap-1 font-semibold text-slate-700 text-xs">
                <span className="text-amber-400">★</span>
                {card.rating}
              </span>
            </div>

            {/* Button */}
            <button className="w-full bg-[#080C14] hover:bg-slate-800 text-white text-xs font-semibold py-2.5 rounded-lg mt-4 transition-colors">
              Add to Stack
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailableCards;