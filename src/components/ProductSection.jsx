import ProductCard from "./ProductCard";
import ProductWindow from "./ProductWindow";

export default function ProductSection({ base, sectionName }) {
  return (
    <>
      <div className="flex flex-row items-center justify-center w-full px-5 mt-5 mb-10 space-x-1">
        <h4 className="text-2xl font-bold">{sectionName}</h4>
        <div className="w-full bg-gray-600 h-[0.5px]"></div>
      </div>
      <div className="w-full mb-10 space-y-10 lg:space-y-0px-5 lg:space-x-10 lg:flex lg:flex-row lg:overflow-x-auto lg:max-w-screen lg:px-10 sm:px-32 px-14">
        {base.map((product, index) => (
          <ProductCard
            key={index}
            id={index}
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
