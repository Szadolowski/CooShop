import ProductCard from "./ProductCard";

export default function ProductSection({ base, sectionName }) {
  return (
    <>
      <div className="flex flex-row w-full justify-center items-center space-x-1 px-5 mb-10 mt-5">
        <h4 className="font-bold text-2xl">{sectionName}</h4>
        <div className="w-full bg-gray-600 h-[0.5px]"></div>
      </div>
      {/* Kontener przewijania z odstępem lg:gap-x-10 */}
      <div className="space-y-10 lg:space-y-0 lg:flex lg:flex-row lg:justify-start lg:items-start px-5 mb-10 lg:overflow-x-scroll lg:gap-x-10">
        {" "}
        {/* <-- Ta klasa dodaje odstęp */}
        {base.map((product, index) => (
          <div key={index} className="flex-shrink-0 w-64">
            <ProductCard
              image={product.image}
              title={product.title}
              price={product.price}
              promotion={product.promotion}
              promotionValue={product.promotionValue}
              promotionPercent={product.promotionPercent}
            />
          </div>
        ))}
      </div>
    </>
  );
}
