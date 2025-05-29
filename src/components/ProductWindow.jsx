import { motion } from "framer-motion"; // eslint-disable-line
import { createPortal } from "react-dom";

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
  return createPortal(
    <section className="fixed top-0 left-0 z-20 flex items-center justify-center w-full h-full px-0 py-10">
      <div
        className="fixed top-0 left-0 w-full h-full bg-black opacity-20"
        onClick={handleClose}
      ></div>
      <motion.section
        layoutId={layoutId}
        className="relative z-40 flex flex-col items-center justify-center w-3/4 overflow-x-hidden overflow-y-scroll bg-white shadow-lg h-11/12 rounded-2xl"
      >
        <span
          className="absolute right-4 font-black text-5xl rotate-[-45deg] top-0 cursor-pointer hover:transform hover:scale-90 transition-all duration-200"
          onClick={handleClose}
        >
          X
        </span>
        <img src={image} className="object-cover object-center w-full h-screen" />
        <div className="flex flex-col justify-start w-full p-4 items-left">
          <h3 className="text-4xl font-bold">{title}</h3>
          {promotion && (
            <div className="bg-red-700 absolute top-2 left-2 rounded-4xl px-1 py-0.5 font-light text-[0.85rem] text-white">
              {promotionValue}
            </div>
          )}
          {promotionPercent ? (
            <div className="flex flex-row items-start space-x-2">
              <span className="text-gray-500 line-through">$ {price}</span>
              <span className="font-medium text-red-700">
                $ {Math.round((price - price * (promotionPercent / 100)) * 100) / 100}
              </span>
            </div>
          ) : (
            <span className="font-medium">$ {price}</span>
          )}
        </div>
      </motion.section>
    </section>,
    document.getElementById("window-root")
  );
};

export default ProductWindow;
