import React, { FC } from "react";

const Chart: FC<{ options: { background: string; content: string }[] }> = ({
  options,
}) => (
  <div className="relative">
    {options.map(({ background, content }, index) => (
      <div
        key={`${index}:${content}`}
        className="w-20 h-20 absolute slice top-1/2 left-1/2 origin-top-left"
        style={{
          zIndex: index,
          background,
          transform: `rotate(${
            (360 / options.length) * index + 1
          }deg) translateX(80px)`,
        }}
      >
        {index}:{content}
      </div>
    ))}
  </div>
);

export default Chart;
