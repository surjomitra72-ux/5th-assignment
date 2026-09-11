import "./App.css";
import Banner from "./components.tsx/Banner";
import Nav from "./components.tsx/Nav";
import TechnologyCards from "./components.tsx/TechnologyCards";

function App() {
  return (
    <>
      <Nav />
      <main className="pt-[80px]"></main>
      <Banner />
      <TechnologyCards />
    </>
  );
}

export default App;