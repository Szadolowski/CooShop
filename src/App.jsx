import React from "react";
import HeaderSection from "./components/HeaderSection";
import ProductSection from "./components/ProductSection";
import FooterSection from "./components/FooterSection";
import NavSection from "./components/NavSection";

const PromotionCloth = [
  {
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1335&auto=format&fit=crop",
    title: "Product 1",
    price: 29.99,
    promotion: true,
    promotionValue: "-20%",
    promotionPercent: 20,
  },
  {
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1335&auto=format&fit=crop",
    title: "Product 1",
    price: 29.99,
    promotion: true,
    promotionValue: "-20%",
    promotionPercent: 20,
  },
  {
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1335&auto=format&fit=crop",
    title: "Product 1",
    price: 29.99,
    promotion: true,
    promotionValue: "-20%",
    promotionPercent: 20,
  },
  {
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1335&auto=format&fit=crop",
    title: "Product 1",
    price: 29.99,
    promotion: true,
    promotionValue: "-20%",
    promotionPercent: 20,
  },
  {
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1335&auto=format&fit=crop",
    title: "Product 1",
    price: 29.99,
  },
];

const PromotionJewelry = [
  {
    image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&w=1310&auto=format&fit=crop",
    title: "Pierścionek z diamentem",
    price: 499.99,
    promotion: true,
    promotionValue: "-20%",
    promotionPercent: 20,
  },
  {
    image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&w=1310&auto=format&fit=crop",
    title: "Pierścionek z diamentem",
    price: 499.99,
    promotion: true,
    promotionValue: "-20%",
    promotionPercent: 20,
  },
  {
    image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&w=1310&auto=format&fit=crop",
    title: "Pierścionek z diamentem",
    price: 499.99,
  },
  {
    image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&w=1310&auto=format&fit=crop",
    title: "Pierścionek z diamentem",
    price: 499.99,
    promotion: true,
    promotionValue: "-30%",
    promotionPercent: 30,
  },
];

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
          <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center mb-5">
            <button className="border-2 border-black rounded-3xl px-14 py-2 text-xl">More Products</button>
          </div>
        </div>
        <FooterSection />
      </div>
    </>
  );
}

export default App;
