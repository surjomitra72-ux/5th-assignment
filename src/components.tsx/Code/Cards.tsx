import { use } from "react";
import type { Icard } from "./Type";
import AvailableCards from "./AvailableCards";

interface CardsProps {
  CardsPromise: Promise<Icard[]>;
}

const Cards = ({ CardsPromise }: CardsProps) => {
  const cards = use(CardsPromise);

  console.log(cards);

  return (
    <div>
      <AvailableCards Cards={cards} />
    </div>
  );
};

export default Cards;