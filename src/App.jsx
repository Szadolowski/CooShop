import React from "react";
import HeaderSection from "./components/HeaderSection";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className=" overflow-y-scroll snap-y snap-mandatory scroll-smooth h-screen transition duration-1000">
      <HeaderSection />
      <div className="relative h-screen snap-start flex flex-col items-center justify-items-start bg-gray-100 p-5">
        <h2 className="text-center font-bold text-3xl">Featured Products</h2>
        <p className="text-center text-pretty font-light mt-2 mb-6">
          Discover our carefully selected collection of the latest fashion and jewelry trends.
        </p>
        <div>
          <ProductCard
            image={
              "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1335&auto=format&fit=crop"
            }
            title={"Product 1"}
            price={"$29.99"}
            promotion={true}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
