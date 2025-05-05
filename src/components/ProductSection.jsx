import ProductCard from "./ProductCard";

export default function ProductSection({ base, sectionName }) {
  return (
    <>
      <div className="flex flex-row w-full justify-center items-center space-x-1 px-5 mb-10 mt-5">
        <h4 className="font-bold text-2xl">{sectionName}</h4>
        <div className="w-full bg-gray-600 h-[0.5px]"></div>
      </div>
      <div className="space-y-10 lg:space-y-0px-5 mb-10 lg:space-x-10 lg:flex lg:flex-row lg:overflow-x-auto lg:max-w-screen lg:px-10">
        {base.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            price={product.price}
            promotion={product.promotion}
            promotionValue={product.promotionValue}
            promotionPercent={product.promotionPercent}
          />
        ))}
      </div>
    </>
  );
}
