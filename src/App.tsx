import "./App.css";

import Banner from "./components.tsx/Banner";
import Nav from "./components.tsx/Nav";
import TechnologyCards from "./components.tsx/TechnologyCards";

import Cards from "./components.tsx/Code/Cards";
import YourStack from "./components.tsx/Code/YourStack";

import { Suspense, useState } from "react";
import type { Icard } from "./components.tsx/Code/Type";

const CardsFetch = async (): Promise<Icard[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();

  return data;
};

const CardsPromise = CardsFetch();

function App() {
  const [selectedCards, setSelectedCards] = useState<Icard[]>([]);

  return (
    <>
      <Nav />

      <main className="pt-[80px]">
        <Banner />

        <TechnologyCards />

        <Suspense fallback={<h2>Loading...</h2>}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              
              {/* Available Cards */}
              <div className="lg:col-span-3">
                <Cards
                  CardsPromise={CardsPromise}
                  selectedCards={selectedCards}
                  setSelectedCards={setSelectedCards}
                />
              </div>

              {/* Your Stack */}
              <div className="lg:col-span-1">
                <YourStack
                  selectedCards={selectedCards}
                  setSelectedCards={setSelectedCards}
                />
              </div>

            </div>
          </div>
        </Suspense>
      </main>
    </>
  );
}

export default App;