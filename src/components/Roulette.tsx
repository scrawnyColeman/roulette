import React, { FC, useEffect, useState } from "react";
import useWebAnimations from "@wellyshen/use-web-animations";

import Chart from "./Chart";

const wheelSpinDuration = 3000;

const chartOptions = [
  {
    content: "Libs",
    background: "red",
  },
  {
    content: "J",
    background: "cyan",
  },
  {
    content: "Thomas",
    background: "orange",
  },
];

const Roulette: FC = () => {
  const [currentRotation, setCurrentRotation] = useState<number>(0);
  const [targetRotation, setTargetRotation] = useState<number>(0);
  const isAnimating = currentRotation !== targetRotation;

  useEffect(() => {
    if (isAnimating) {
      const tId = setTimeout(() => {
        setCurrentRotation(targetRotation);
      }, wheelSpinDuration);

      return () => clearTimeout(tId);
    }
  }, [isAnimating]);

  return (
    <>
      <div
        className="w-full flex flex-col items-center mt-52 gap-4"
        style={{
          transition: `all ${wheelSpinDuration}ms ease`,
          transform: `rotate(${targetRotation}deg)`,
        }}
      >
        <Chart
          options={
            chartOptions.length < 4
              ? chartOptions.concat(chartOptions)
              : chartOptions
          }
        />
      </div>

      <div>
        <button
          style={{ opacity: isAnimating ? 0.25 : 1 }}
          disabled={isAnimating}
          className="border border-rose-400 px-4 py-2 rounded-xl hover:bg-red-300 focus:outline focus:outline-slate-900"
          onClick={() => {
            if (isAnimating) return;
            const r = 360 + Math.floor(Math.random() * 360);
            setTargetRotation(currentRotation + r);
          }}
        >
          Animate
        </button>
      </div>
    </>
  );
};

export default Roulette;
