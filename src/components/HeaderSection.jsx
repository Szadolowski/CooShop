import { useEffect, useState, useRef } from "react";
import { AnimatePresence } from "motion/react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

export default function HeaderSection() {
  const [headerIMG, setHeaderIMG] = useState(0);
  const intervalRef = useRef(null);

  const images = [
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  // Funkcja resetująca timer
  const resetTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setHeaderIMG((prev) => (prev + 1) % images.length);
    }, 7000);
  };

  const handleImageChange = (number) => {
    setHeaderIMG(number);
    resetTimer();
  };

  const ImageChoose = ({ number }) => {
    return (
      <div
        className={`${
          headerIMG == number ? "bg-pink-800 w-9" : "border border-pink-800 w-6 bg-[#a3004c1a]"
        } rounded-2xl h-2`}
        onClick={() => handleImageChange(number)}
      ></div>
    );
  };

  useEffect(() => {
    resetTimer();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="relative snap-start h-screen overflow-hidden">
      <AnimatePresence>
        <motion.img
          src={images[headerIMG]}
          key={headerIMG}
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -200, opacity: 0 }}
          alt="image1"
          className="absolute top-0 left-0 w-full h-screen object-cover"
        />
      </AnimatePresence>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col items-start py-10 z-10">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 0.4 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col items-start space-y-3 xl:ml-36 mt-56 ml-10"
        >
          <h1 className="font-bold text-5xl text-white text-shadow-2xl">
            Discover the Latest <br /> Collection
          </h1>
          <h3 className="text-white text-shadow-2xl">
            The most fashionable clothes and jewelry in one place. Find your <br /> style and
            express yourself through fashion.
          </h3>
          <div className="static space-x-4 flex-row">
            <button className="relative bg-pink-600 border-pink-600 border text-white font-medium px-6 py-2 rounded-2xl transform hover:scale-105 transition duration-300 hover:cursor-pointer">
              buy now {"->"}
            </button>
            <button className="relative border-white border text-white font-medium px-6 py-2 rounded-2xl hover:bg-white hover:text-black transform hover:scale-105 transition duration-300 hover:cursor-pointer">
              learn more
            </button>
          </div>
        </motion.div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
          <ImageChoose number={0} />
          <ImageChoose number={1} />
          <ImageChoose number={2} />
        </div>
      </div>
    </div>
  );
}
