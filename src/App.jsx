import React from "react";
import HeaderSection from "./components/HeaderSection";
import ProductSection from "./components/ProductSection";
import FooterSection from "./components/FooterSection";
import NavSection from "./components/NavSection";
import CounterTime from "./components/CounterTime";
import CategoryCard from "./components/CategoryCard";
import Fetch from "./data/Fetch.jsx";
import { promotionJewelry, category } from "./data.js";

function App() {
  const promotionCloth = [];
  const promotionTime = new Date();
  promotionTime.setDate(promotionTime.getDate() + 7);
  return (
    <>
      <Fetch promotionCloth={promotionCloth} />
      <NavSection />
      <div>
        <HeaderSection />
        <div className="relative flex flex-col items-center pt-10 pb-10 bg-gray-100 justify-items-start">
          <h2 className="text-4xl font-bold text-center">Featured Products</h2>
          <p className="px-5 mt-2 font-light text-center text-pretty mb-14">
            Discover our carefully selected collection of the latest fashion and jewelry trends.
          </p>
          <ProductSection base={promotionCloth} sectionName={"Clothes"} />
          <ProductSection base={promotionJewelry} sectionName={"Jewelry"} />
          <button className="py-2 text-xl transition duration-300 ease-in-out border-2 border-black rounded-3xl px-14 hover:bg-black hover:text-white hover:cursor-pointer">
            More Products
          </button>
        </div>
        <CategoryCard data={category} />
        <CounterTime
          title={"Summer sale"}
          description={
            "Take advantage of this unique opportunity and get a discount of up to 50% on all products from the summer collection. Limited time offer!"
          }
          promotionDate={promotionTime}
          image={
            "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
          }
        />
        <FooterSection />
      </div>
    </>
  );
}

export default App;
