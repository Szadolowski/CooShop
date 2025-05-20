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
      <motion.section layoutId={layoutId} className="w-3/4 bg-white z-40">
        <img src={image} className="w-full h-screen object-cover object-center" />
        <div className="w-full flex flex-row justify-between items-center p-4">
          <h3>{title}</h3>
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
