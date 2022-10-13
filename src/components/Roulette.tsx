import React, { FC } from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import type { AnimateOptions } from "@wellyshen/use-web-animations";

import Chart from "./Chart";

const animationOptions: AnimateOptions = {
  keyframes: {
    transform: `rotate(${360 + Math.floor(Math.random() * 360)}deg)`,
  },
  animationOptions: {
    delay: 500,
    duration: 3000,
    easing: "ease-in-out",
  },
  autoPlay: false,
};

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
  const { ref, animate } = useWebAnimations<HTMLDivElement>({
    ...animationOptions,
    onFinish: (props) => {
      console.log("finish", { props });
    },
  });

  return (
    <div>
      <Chart
        ref={ref}
        options={
          chartOptions.length < 4
            ? chartOptions.concat(chartOptions)
            : chartOptions
        }
      />

      <button onClick={() => animate(animationOptions)}>Animate</button>
    </div>
  );
};

export default Roulette;
