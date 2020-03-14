import React from "react";

export function IntervalComponent({ interval, control, changeInterval }) {
  const increaseInterval = () => changeInterval(1);
  const decreaseInterval = () => changeInterval(-1);

  return (
    <div>
      <div>Интервал обновления: {interval} сек.</div>
      <span>
        <button onClick={decreaseInterval} disabled={control}>
          -
        </button>
        <button onClick={increaseInterval} disabled={control}>
          +
        </button>
      </span>
    </div>
  );
}
