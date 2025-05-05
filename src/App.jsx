import React from "react";
import HeaderSection from "./components/HeaderSection";
import ProductSection from "./components/ProductSection";
import FooterSection from "./components/FooterSection";
import NavSection from "./components/NavSection";
import { PromotionCloth, PromotionJewelry } from "./data.js";

function App() {
  return (
    <>
      <NavSection />
      <div>
        <HeaderSection />
        <div className="relative flex flex-col items-center justify-items-start bg-gray-100 p-5 pb-52">
          <h2 className="text-center font-bold text-4xl">Featured Products</h2>
          <p className="text-center text-pretty font-light mt-2 mb-14 px-5">
            Discover our carefully selected collection of the latest fashion and jewelry trends.
          </p>
          <ProductSection base={PromotionCloth} sectionName={"Clothes"} />
          <ProductSection base={PromotionJewelry} sectionName={"Jewelry"} />
          <button className="border-2 border-black rounded-3xl px-14 py-2 text-xl hover:bg-black hover:text-white transition duration-300 ease-in-out hover:cursor-pointer">
            More Products
          </button>
        </div>
        <div className="relative flex flex-col items-center justify-items-start bg-gray-100 p-5 pb-52">
          <h2 className="text-center font-bold text-4xl">Category</h2>
          <section className="relative overflow-hidden rounded-lg bg-gray-100 h-80 w-80 group m-10 group">
            <img
              src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&w=1310&auto=format&fit=crop"
              alt=""
              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-50 "></div>
          </section>
        </div>
        <FooterSection />
      </div>
    </>
  );
}

export default App;
