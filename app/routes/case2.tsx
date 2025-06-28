import { motion } from "motion/react";
import { type ReactNode, useEffect, useState } from "react";

const INTERVAL = 100;

export default function Case2(): ReactNode {
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const timerId = setInterval(() => {
      setIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex === 29) {
          clearInterval(timerId);
        }
        return nextIndex;
      });
    }, INTERVAL);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      {index <= 6 && (
        <motion.img
          initial={{ x: -350 }}
          animate={{ x: -50 }}
          transition={{ duration: (INTERVAL * 6) / 1000 }}
          src={`/frames/spear/spear_${`${index}`.padStart(2, "0")}.png`}
        />
      )}
      {index > 6 && (
        <img
          alt="explosion"
          src={`/frames/explosion/explosion_${`${index - 6}`.padStart(2, "0")}.png`}
        />
      )}
    </div>
  );
}
