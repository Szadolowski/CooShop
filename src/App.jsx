import React from "react";
import HeaderSection from "./components/HeaderSection";

function App() {
  return (
    <div className=" overflow-y-scroll snap-y snap-mandatory scroll-smooth h-screen transition duration-1000">
      <HeaderSection />
      <div className="h-screen bg-amber-200 snap-start"></div>
    </div>
  );
}

export default App;
