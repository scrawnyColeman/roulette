import React, { FC, useEffect, useState } from "react";

import Chart from "./Chart";

const wheelSpinDuration = 3000;

type Option = {
  background: string;
  content: string;
};
type Props = {
  options: Option[];
};
const Roulette: FC<Props> = ({ options }) => {
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
          options={options.length < 4 ? options.concat(options) : options}
        />
      </div>

      <div
        style={{
          position: "absolute",
          inset: "auto 1rem 1rem 1rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          style={{ opacity: isAnimating ? 0.25 : 1 }}
          disabled={isAnimating}
          className="border border-rose-400 px-4 py-2 rounded-xl hover:bg-red-300 bg-red-100 focus:outline-slate-900"
          onClick={() => {
            if (isAnimating) return;
            const r = 360 + Math.floor(Math.random() * 360);
            setTargetRotation(currentRotation + r);
          }}
        >
          Spin!
        </button>
      </div>
    </>
  );
};

export default Roulette;
