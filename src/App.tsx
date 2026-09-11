import "./App.css";

import Banner from "./components.tsx/Banner";
import Nav from "./components.tsx/Nav";
import TechnologyCards from "./components.tsx/technologyCards";

function App() {
  return (
    <>
      <Nav />
      <Banner />
      <TechnologyCards />
    </>
  );
}

export default App;