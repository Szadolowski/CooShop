import React from "react";
import HeaderSection from "./components/HeaderSection";
import ProductSection from "./components/ProductSection";
import FooterSection from "./components/FooterSection";
import NavSection from "./components/NavSection";
import CounterTime from "./components/CounterTime";
import CategoryCard from "./components/CategoryCard";
import { promotionCloth, promotionJewelry, category } from "./data.js";

function App() {
  const promotionTime = new Date();
  promotionTime.setDate(promotionTime.getDate() + 7);
  return (
    <>
      <NavSection />
      <div>
        <HeaderSection />
        <div className="relative flex flex-col items-center justify-items-start bg-gray-100 pt-10 pb-10">
          <h2 className="text-center font-bold text-4xl">Featured Products</h2>
          <p className="text-center text-pretty font-light mt-2 mb-14 px-5">
            Discover our carefully selected collection of the latest fashion and jewelry trends.
          </p>
          <ProductSection base={promotionCloth} sectionName={"Clothes"} />
          <ProductSection base={promotionJewelry} sectionName={"Jewelry"} />
          <button className="border-2 border-black rounded-3xl px-14 py-2 text-xl hover:bg-black hover:text-white transition duration-300 ease-in-out hover:cursor-pointer">
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
