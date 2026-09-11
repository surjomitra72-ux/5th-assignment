import "./App.css";

import Banner from "./components.tsx/Banner";
import Nav from "./components.tsx/Nav";
import TechnologyCards from "./components.tsx/TechnologyCards";
import Cards from "./components.tsx/Code/Cards";

import { Suspense } from "react";
import type { Icard } from "./components.tsx/Code/Type";

const CardsFetch = async (): Promise<Icard[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();

  return data;
};

function App() {
  const CardsPromise = CardsFetch();

  return (
    <>
      <Nav />

      <main className="pt-[80px]">
        <Banner />
        <TechnologyCards />
      </main>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Cards CardsPromise={CardsPromise} />
      </Suspense>
    </>
  );
}

export default App;