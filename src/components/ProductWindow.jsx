import { motion } from "framer-motion"; // eslint-disable-line

const ProductWindow = ({
  layoutId,
  handleClose,
  image,
  title,
  price = 0,
  promotion = false,
  promotionValue = "",
  promotionPercent = 0,
}) => {
  return (
    <section className="absolute top-0 left-0 flex justify-center items-center w-full h-full py-10 px-0 z-20">
      <div
        className="absolute top-0 left-0 w-full h-full bg-black opacity-20"
        onClick={handleClose}
      ></div>
      <motion.section
        layoutId={layoutId}
        className="relative w-3/4 bg-white z-40 rounded-2xl shadow-lg overflow-hidden"
      >
        <span
          className="font-black text-5xl rotate-[-45deg] absolute right-2 top-0 cursor-pointer hover:transform hover:scale-90 transition-all duration-200"
          onClick={handleClose}
        >
          X
        </span>
        <img src={image} className="w-full h-screen object-cover object-center" />
        <div className="w-full flex flex-col justify-start items-left p-4">
          <h3 className="font-bold text-4xl">{title}</h3>
          {promotion && (
            <div className="bg-red-700 absolute top-2 left-2 rounded-4xl px-1 py-0.5 font-light text-[0.85rem] text-white">
              {promotionValue}
            </div>
          )}
          {promotionPercent ? (
            <div className="flex flex-row items-start space-x-2">
              <span className="text-gray-500 line-through">$ {price}</span>
              <span className="text-red-700 font-medium">
                $ {Math.round((price - price * (promotionPercent / 100)) * 100) / 100}
              </span>
            </div>
          ) : (
            <span className="font-medium">$ {price}</span>
          )}
        </div>
      </motion.section>
    </section>
  );
};

export default ProductWindow;
