import React, { useEffect, useState } from "react";

const CounterTime = () => {
  const [timeData] = useState(() => {
    const calculatedEndDate = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 7);
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
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
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
    <div>
      <div>Promocja trwa do {endDate.toLocaleString}</div>
      <div>{formatTime(remainingSeconds)}</div>
    </div>
  );
};

export default CounterTime;
