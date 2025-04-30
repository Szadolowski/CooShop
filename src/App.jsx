import React from "react";
import HeaderSection from "./components/HeaderSection";
import ProductSection from "./components/ProductSection";
import FooterSection from "./components/FooterSection";
import NavSection from "./components/NavSection";

const PromotionProduct = [
  {
    image:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1335&auto=format&fit=crop",
    title: "Product 1",
    price: 29.99,
    promotion: true,
    promotionValue: "-20%",
    promotionPercent: 20,
  },
  {
    image:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1335&auto=format&fit=crop",
    title: "Product 1",
    price: 29.99,
    promotion: true,
    promotionValue: "-20%",
    promotionPercent: 20,
  },
  {
    image:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1335&auto=format&fit=crop",
    title: "Product 1",
    price: 29.99,
    promotion: true,
    promotionValue: "-20%",
    promotionPercent: 20,
  },
  {
    image:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1335&auto=format&fit=crop",
    title: "Product 1",
    price: 29.99,
    promotion: true,
    promotionValue: "-20%",
    promotionPercent: 20,
  },
  {
    image:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1335&auto=format&fit=crop",
    title: "Product 1",
    price: 29.99,
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
          <ProductSection base={PromotionProduct} sectionName={"Clothes"} />
        </div>
        <FooterSection />
      </div>
    </>
  );
}

export default App;
