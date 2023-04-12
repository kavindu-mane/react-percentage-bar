import React, { useEffect, useState } from "react";
import toPX from "to-px";

export const Circle = ({
  radius,
  size,
  percentage,
  duration,
  color,
  startPosition,
  returnState,
  roundLineCap,
  animation,
  percentageAnimation,
  reverse,
  reverseDuration,
  loopCount,
}) => {
  const [state, setState] = useState(0);
  const pxValue = 2 * Math.PI * (toPX(radius) - toPX(size) / 2);
  const dashOfset = (state) => {
    return (
      pxValue -
      (pxValue * parseInt(state)) / 100 +
      (![0, 100].includes(state) && roundLineCap ? toPX(size) / 4 : 0)
    );
  };
  let startColor = "#0ea5e9";
  let endColor = "#0ea5e9";

  const reverseProgress = () => {
    if (state > 0 && (animation || percentageAnimation)) {
      setTimeout(() => {
        setState((prevState) => --prevState);
        returnState(!percentageAnimation ? percentage : state -1);
      }, reverseDuration / 100);
    } else {
      setState(0);
      returnState(0);
    }
  };

  //  animation
  useEffect(() => {
    if (percentage > state && (animation || percentageAnimation)) {
      setTimeout(() => {
        setState((prevState) => ++prevState);
        returnState(!percentageAnimation ? percentage : state + 1);
      }, duration / 100);
    } else {
      setState(percentage);
      returnState(percentage);
    }

  });

  if (Array.isArray(color)) {
    startColor = color[0] === undefined ? startColor : color[0];
    endColor = color[1] === undefined ? endColor : color[1];
  } else startColor = endColor = color;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={`calc(${radius} * 2)`}
      height={`calc(${radius} * 2)`}
      style={{ transform: `rotateZ(${startPosition - 90}deg)` }}
    >
      <defs>
        <linearGradient id="GradientColor">
          <stop offset="0%" stop-color={endColor} />
          <stop offset="100%" stop-color={startColor} />
        </linearGradient>
      </defs>
      <circle
        cx={radius}
        cy={radius}
        r={`calc(${radius} - calc(${size})/2)`}
        strokeLinecap={roundLineCap ? "round" : "butt"}
        strokeWidth={size}
        strokeDasharray={pxValue}
        strokeDashoffset={dashOfset(animation ? state : percentage)}
      />
    </svg>
  );
};
