import React, { useState } from "react";
import { Interval } from "../containers/Interval";

export function TimerComponent({ interval, control, disableControl }) {
  const [intervalId, setIntervalId] = useState();
  const [count, setCount] = useState(0);

  const updateTimeByInterval = () =>
    setCount(prevState => prevState + interval);

  function handleStart() {
    const id = setInterval(updateTimeByInterval, interval * 1000);
    disableControl(true);
    setIntervalId(id);
  }

  function handleStop() {
    clearInterval(intervalId);
    disableControl(false);
    setCount(0);
  }

  return (
    <div>
      <Interval />
      <div>Секундомер: {count} сек.</div>
      <div>
        <button onClick={handleStart} disabled={control}>
          Старт
        </button>
        <button onClick={handleStop} disabled={!control}>
          Стоп
        </button>
      </div>
    </div>
  );
}
