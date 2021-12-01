import React, { useState, useEffect } from "react";
import "./timer.css";

const Timer = () => {
  const [time, setTime] = useState({
    seconds: "0",
    minutes: "0",
    hours: "0",
  });
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime({
          seconds: counter % 60,
          minutes: Math.floor(counter / 60) % 60,
          hours: Math.floor(counter / 3600),
        });

        setCounter((counter) => counter + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, counter]);

  const restartTimer = () => {
    setIsActive(false);
    setTime({
      seconds: "0",
      minutes: "0",
      hours: "0",
    });
    setCounter(0);
  };

  return (
    <div className="container">
      <div className="time">
        <span className="minute">{time.hours}</span>
        <span>:</span>
        <span className="minute">{time.minutes}</span>
        <span>:</span>
        <span className="second">{time.seconds}</span>
      </div>
      <div className="buttons">
        <button onClick={() => setIsActive(!isActive)}>
          {isActive ? "PAUSE" : "START"}
        </button>
        <button onClick={restartTimer}>RESTART</button>
      </div>
    </div>
  );
};

export default Timer;
