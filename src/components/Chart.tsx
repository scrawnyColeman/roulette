import React, { forwardRef } from "react";

const Chart = forwardRef<
  HTMLDivElement,
  { options: { background: string; content: string }[] }
>(({ options }, ref) => (
  <div
    ref={ref}
    className="bg-emerald-500 overflow-hidden w-52 h-52 rounded-full relative"
  >
    {options.map(({ background, content }, index) => (
      <div
        key={`${index}:${content}`}
        className="w-full h-full origin-top-left absolute slice top-1/2 left-1/2"
        style={{
          transform:
            index + 1 !== options.length
              ? `rotate(${index * (360 / options.length)}deg)`
              : `rotate(${index * (360 / options.length) - 90}deg)`,

          zIndex: index,
          background,
        }}
      >
        {index}:{content}
      </div>
    ))}
  </div>
));

export default Chart;
