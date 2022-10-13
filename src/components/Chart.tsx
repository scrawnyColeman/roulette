import React, { FC } from "react";

const Chart: FC<{ options: { background: string; content: string }[] }> = ({
  options,
}) => (
  <div className="relative">
    {options.map(({ background, content }, index) => (
      <div
        key={`${index}:${content}`}
        className="flex justify-center items-center w-20 h-20 absolute slice top-1/2 left-1/2 origin-top-left font-bold rounded-full"
        style={{
          zIndex: index,
          background,
          transform: `rotate(${
            (360 / options.length) * index + 1
          }deg) translateX(${options.length > 8 ? "100px" : "50px"})`,
        }}
      >
        {content}
      </div>
    ))}
  </div>
);

export default Chart;
