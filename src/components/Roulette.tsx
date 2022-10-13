import React, { FC, useEffect, useState } from "react";
import useWebAnimations from "@wellyshen/use-web-animations";

import Chart from "./Chart";

type Option = {
  background: string;
  content: string;
};
type Props = {
  options: Option[];
};

const Roulette: FC<Props> = ({ options }) => {
  const [isFinished, setFinished] = useState<boolean>(false);
  const [hasRun, setHasRun] = useState<boolean>(false);

  const resetState = () => {
    setFinished(false);
    setHasRun(false);
  };

  const rotate = (math: Math) =>
    `rotate(${360 + math.floor(math.random() * 360)}deg)`;

  const { ref, playState, getAnimation } = useWebAnimations<HTMLDivElement>({
    keyframes: {
      transform: rotate(Math),
    },
    animationOptions: {
      delay: 500,
      duration: 3000,
      easing: "ease-in-out",
    },
    autoPlay: true,
  });

  useEffect(() => {
    if (playState === "finished") {
      setFinished(true);
    }
    if (playState === "running") {
      setHasRun(true);
    }
  }, [playState]);

  return (
    <>
      <div
        className="w-full flex flex-col items-center mt-52 gap-4"
        style={{
          transform: isFinished && hasRun ? rotate(Math) : "none",
        }}
      >
        <Chart
          ref={ref}
          options={options.length < 4 ? options.concat(options) : options}
        />
      </div>

      <div>
        <button
          className="border border-rose-400 px-4 py-2 rounded-xl hover:bg-red-300 focus:outline focus:outline-slate-900"
          onClick={() => {
            resetState();
            const animation = getAnimation();
            animation?.cancel();
            animation?.play();
          }}
        >
          Animate
        </button>
      </div>
    </>
  );
};

export default Roulette;
