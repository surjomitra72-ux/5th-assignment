import { use } from "react";
import type { Icard } from "./Type";
import AvailableCards from "./AvailableCards";

interface CardsProps {
  CardsPromise: Promise<Icard[]>;
  selectedCards: Icard[];
  setSelectedCards: React.Dispatch<React.SetStateAction<Icard[]>>;
}

const Cards = ({
  CardsPromise,
  selectedCards,
  setSelectedCards,
}: CardsProps) => {
  const cards = use(CardsPromise);

  return (
    <div>
      <AvailableCards
        Cards={cards}
        selectedCards={selectedCards}
        setSelectedCards={setSelectedCards}
      />
    </div>
  );
};

export default Cards;