import React, { useEffect } from "react";
import { useTimer } from 'react-timer-hook';

function Countdown({ expiryTimestamp, autoStart }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called'), autoStart:false });

  useEffect(() => {
    // console.log("Auto start is ", autoStart)
    if(autoStart) {
      start()
    }
  }, [autoStart])
  
  console.log("Expiry ", expiryTimestamp)
  return (
    <div>
      <div>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      {/* <p>{isRunning ? "Running" : "Not running"}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button
        onClick={() => {
          const time = new Date();
          time.setSeconds(time.getSeconds() + 300);
          restart(time);
        }}
      >
        Restart
      </button> */}
    </div>
  );
};

export default Countdown;
