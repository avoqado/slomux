import React, { useEffect, useRef, useState } from "react";
import { Interval } from "../containers/Interval";

export function TimerComponent({ interval, control, disableControl }) {
  const [count, setCount] = useState(0);
  const intervalRef = useRef();

  useEffect(() => () => clearInterval(intervalRef.current), []);

  const updateTimeByInterval = () =>
    setCount(prevState => prevState + interval);

  function handleStart() {
    intervalRef.current = setInterval(updateTimeByInterval, interval * 1000);
    disableControl(true);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
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
