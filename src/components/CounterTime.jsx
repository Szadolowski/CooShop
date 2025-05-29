import React, { useEffect, useState } from "react";

const CounterTime = ({ title, description, promotionDate, image }) => {
  const [timeData] = useState(() => {
    const calculatedEndDate = new Date(promotionDate);
    const endTime = calculatedEndDate.getTime();
    const difference = endTime - new Date().getTime();

    let seconds = 0;
    if (difference > 0) {
      seconds = Math.floor(difference / 1000);
    }
    return {
      endDate: calculatedEndDate,
      remainingSeconds: seconds,
    };
  });

  const [remainingSeconds, setRemainingSeconds] = useState(timeData.remainingSeconds);
  const endDate = timeData.endDate;

  const formatTime = (totalSeconds) => {
    if (totalSeconds <= 0) return "Time's up!";
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);
    const time = [
      { key: `days`, value: days },
      { key: `hours`, value: hours },
      { key: `minutes`, value: minutes },
      { key: `seconds`, value: seconds },
    ];
    return (
      <div className="flex flex-row items-center justify-center space-x-7">
        {time.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center w-15">
            <div className="text-3xl font-bold bg-pink-600 rounded-md p-3 w-full flex items-center justify-center">
              <span className="text-2xl font-bold">{item.value}</span>
            </div>
            <div className="pt-2 text-gray-400">{item.key}</div>
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white border-b-2 border-white flex lg:flex-row flex-col items-center justify-between bg-black p-5  py-10 w-full">
      <div className="flex flex-col justify-center items-center">
        {title && <h2 className="text-center font-bold text-4xl text-white">{title}</h2>}
        {description && (
          <p className="text-center text-pretty font-light mt-2 mb-14 px-5 text-white">
            {description}
          </p>
        )}
        <div className="text-gray-400 font-light pb-2">
          promotion lasts until{" "}
          {`${endDate.getDate()}.${endDate.getMonth() + 1}.${endDate.getFullYear()}`}
        </div>
        <div>{formatTime(remainingSeconds)}</div>
        <button className="mt-10 bg-pink-600 rounded-3xl font-bold px-14 py-2 text-xl w-1/2 hover:font-black hover:bg-pink-700 transition duration-300 ease-in-out hover:cursor-pointer">
          Check now!
        </button>
      </div>
      <div className="w-full p-6">
        <img src={image} alt={"image"} className="w-full" />
      </div>
    </div>
  );
};

export default CounterTime;
