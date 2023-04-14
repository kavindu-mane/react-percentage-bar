import React, { useEffect, useState } from "react";

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
  startDelay,
  reverseDelay,
  antiClockWise,
  margin,
  separator,
  styles,
  chartValue,
}) => {
  const toPX = (measure) => {
    if (
      measure.toString().toLowerCase().includes("em") ||
      measure.toString().toLowerCase().includes("em")
    )
      return 16 * parseFloat(measure, 10);
    else return parseFloat(measure, 10);
  };
  const [state, setState] = useState(0);
  const [pieState, setPieState] = useState(0);
  const [isReverse, setIsReverse] = useState(false);
  const [currentLoop, setCurrentLoop] = useState(1);
  let pxValue;
  if (styles !== "pie-chart")
    pxValue = 2 * Math.PI * (toPX(radius) - toPX(size) / 2);
  else pxValue = 2 * Math.PI * (toPX(radius) / 2);
  const dashOfset = (state) => {
    return (
      pxValue -
      (pxValue * parseInt(state)) / 100 +
      (![0, 100].includes(state) && roundLineCap && styles !== "pie-chart"
        ? toPX(size) / 4
        : 0)
    );
  };
  let startColor = "#0ea5e9";
  let endColor = "#0ea5e9";
  let transformValue;
  const chartPercentage = Object.keys(chartValue)
    .map(Number)
    .sort((a, b) => b - a);

  //  add delay for animations
  const delaySet = (duration, value) => {
    if (value === 1 && currentLoop !== 1 && state === 0)
      return startDelay + duration / 100;
    else if (value === -1 && state === percentage)
      return reverseDelay + duration / 100;
    else return duration / 100;
  };

  //  check current percentage value in correct value range or if not correct the current value
  const checkPercentage = (value) => {
    if (value > percentage) return percentage;
    else if (value < 0) return 0;
    else return value;
  };

  // progress bar animating
  const animatingFunc = (duration, value) => {
    setTimeout(() => {
      setState((prevState) => checkPercentage(prevState + value));
      returnState(
        !percentageAnimation ? percentage : checkPercentage(state + value)
      );
      if (state + value >= percentage) setIsReverse(true);
      if (state + value <= 0) {
        setIsReverse(false);
        setCurrentLoop((prev) => ++prev);
      }
    }, delaySet(duration, value));
  };

  //  animation
  useEffect(() => {
    // solid and separators style
    if ((animation || percentageAnimation) && styles !== "pie-chart") {
      if (loopCount >= currentLoop) {
        if (percentage > state && !isReverse) animatingFunc(duration, +1);
        else if (state > 0 && reverse && isReverse)
          animatingFunc(reverseDuration, -1);
        else if (state > 0 && !reverse && isReverse) {
          setIsReverse(false);
          setCurrentLoop((prev) => ++prev);
          setState(0);
          returnState(!percentageAnimation ? percentage : 0);
        }
      } else {
        if (percentage > state) animatingFunc(duration, +1);
      }
      // pie chart
    } else if (animation && styles === "pie-chart") {
      if (pieState < 100) {
        setTimeout(() => {
          setPieState((prev) => ++prev);
        }, duration / 100);
      }
    } else {
      setState(percentage);
      returnState(percentage);
    }
  });

  // stroke color gradient
  if (Array.isArray(color)) {
    startColor = color[0] === undefined ? startColor : color[0];
    endColor = color[1] === undefined ? endColor : color[1];
  } else startColor = endColor = color;

  //   add transform value
  if (antiClockWise)
    transformValue = `rotateZ(${startPosition + 90}deg) rotateY(180deg)`;
  else transformValue = `rotateZ(${startPosition - 90}deg)`;

  // define cicle diameter
  const diameter = toPX(radius) * 2;

  // pie chart creating function
  const pieChartCircles = (p) => {
    return (
      <circle
        r="25%"
        cx="50%"
        cy="50%"
        key={p}
        strokeWidth={radius}
        strokeDasharray={pxValue}
        stroke={chartValue[p]}
        display={styles === "pie-chart" ? "flex" : "none"}
        strokeDashoffset={dashOfset(p > pieState && animation ? pieState : p)}
      ></circle>
    );
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={diameter}
      height={diameter}
      viewBox={`0 0 ${diameter} ${diameter}`}
      style={{ transform: transformValue, margin: margin }}
    >
      <defs>
        <linearGradient id="GradientColor">
          <stop offset="0%" stopColor={endColor} />
          <stop offset="100%" stopColor={startColor} />
        </linearGradient>
      </defs>

      <circle
        className="stroke-circles"
        cx={toPX(radius)}
        cy={toPX(radius)}
        r={toPX(radius) - toPX(size) / 2}
        strokeLinecap={roundLineCap ? "round" : "butt"}
        strokeWidth={size}
        display={styles !== "pie-chart" ? "flex" : "none"}
        strokeDasharray={pxValue}
        strokeDashoffset={dashOfset(animation ? state : percentage)}
      />

      <circle
        cx={toPX(radius)}
        cy={toPX(radius)}
        r={toPX(radius) - toPX(size) / 2}
        style={{ stroke: separator[2] }}
        strokeLinecap={"butt"}
        strokeWidth={size}
        display={styles === "separators" ? "flex" : "none"}
        strokeDasharray={`${separator[0]} , ${
          (pxValue - separator[0] * separator[1]) / separator[1]
        } `}
      />

      {chartPercentage.map((p) => {
        return pieChartCircles(p);
      })}
    </svg>
  );
};
