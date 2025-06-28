import { type ReactNode, useEffect, useState } from "react";

const INTERVAL = 100;

export default function Case6(): ReactNode {
  const [index, setIndex] = useState(7);

  useEffect(() => {
    const timerId = setInterval(() => {
      setIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex > 29 ? 7 : nextIndex;
      });
    }, INTERVAL);
    return () => clearInterval(timerId);
  }, []);

  return (
    <>
      {Array.from(Array(10000).keys()).map((x) => (
        <img
          key={x}
          alt="explosion"
          src={`/frames/explosion/explosion_${`${index}`.padStart(2, "0")}.png`}
        />
      ))}
    </>
  );
}
