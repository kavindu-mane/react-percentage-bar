import React, { useState } from "react";
import { Circle } from "./Circle";
import "./circular-styles.css";

export const CircularProgressBar = ({
  color,
  trackColor,
  radius,
  styles,
  size,
  percentage,
  duration,
  startPosition,
  shadow,
  innerShadowClass,
  outerShadowClass,
  text,
  showPercentage,
  PercentageClass,
  textClass,
  children,
  roundLineCap,
  animation,
  percentageAnimation,
  reverse,
  reverseDuration,
  loopCount,
  startDelay,
  reverseDelay,
  antiClockWize,
  padding,
  backgroundColor,
  separator,
  chartValue,
}) => {
  let background;
  let innerDiameter;
  let outerDiameter;
  let innerShadow;
  let outerShadow;
  const [currentPercentage, setPercentage] = useState(0);
  const returnState = (state) => {
    setPercentage(state);
  };
  const toPX = (measure) => {
    if (
      measure.toString().toLowerCase().includes("em") ||
      measure.toString().toLowerCase().includes("em")
    )
      return 16 * parseFloat(measure, 10);
    else return parseFloat(measure, 10);
  };

  // set shadow class
  if (shadow) {
    if (innerShadowClass !== null) innerShadow = innerShadowClass;
    else innerShadow = "inner-shadow";

    if (outerShadowClass !== null) outerShadow = outerShadowClass;
    else outerShadow = "outer-shadow";
  } else innerShadow = outerShadow = "shadow-no";

  // set percentage class
  if (PercentageClass === null) PercentageClass = "percentage";

  // set text class
  if (textClass === null) textClass = "text";

  // set width and height of the inner and outer divs
  const o_dia = toPX(radius) * 2;
  const i_dia = (toPX(radius) - toPX(size)) * 2;
  innerDiameter = { width: i_dia, height: i_dia };
  outerDiameter = { width: o_dia, height: o_dia };
  const outerBackground = { padding: padding, background: backgroundColor };
  background = {
    borderColor: trackColor,
    borderWidth: size,
    borderStyle: styles === "pie-chart" ? "none" : "solid",
  };

  return (
    <div
      className={["outer-div", outerShadow].join(" ")}
      style={{ ...outerDiameter, ...outerBackground }}
    >
      <div
        className={["inner-div", innerShadow].join(" ")}
        style={{ ...background, ...outerDiameter }}
        /// in testing outerDiameter cannot use and innerDiameter use it
      >
        <Circle
          radius={radius}
          size={size}
          percentage={percentage}
          duration={duration}
          color={color}
          startPosition={startPosition}
          returnState={returnState}
          roundLineCap={roundLineCap}
          animation={animation}
          percentageAnimation={percentageAnimation}
          reverse={reverse}
          reverseDuration={reverseDuration}
          loopCount={loopCount}
          startDelay={startDelay}
          reverseDelay={reverseDelay}
          antiClockWize={antiClockWize}
          margin={padding}
          separator={separator}
          styles={styles}
          chartValue={chartValue}
        />
        <div className="text-area" style={{ ...innerDiameter }}>
          <p
            className={PercentageClass}
            style={{ display: styles !== "pie-chart" ? "flex" : "none" }}
          >
            {showPercentage ? `${currentPercentage}%` : ""}
          </p>
          <p
            className={textClass}
            style={{ display: styles !== "pie-chart" ? "flex" : "none" }}
          >
            {text}
          </p>
          {children}
        </div>
      </div>
    </div>
  );
};

CircularProgressBar.defaultProps = {
  color: "#0ea5e9",
  radius: "5rem",
  styles: "solid",
  size: "1rem",
  percentage: 75,
  duration: 2000,
  trackColor: "#efefef",
  startPosition: 0,
  shadow: false,
  innerShadowClass: null,
  outerShadowClass: null,
  text: null,
  showPercentage: true,
  PercentageClass: null,
  textClass: null,
  roundLineCap: true,
  animation: true,
  percentageAnimation: true,
  reverse: true,
  reverseDuration: 2000,
  loopCount: 0,
  startDelay: 100,
  reverseDelay: 100,
  antiClockWize: false,
  padding: 0,
  backgroundColor: "transparent",
  separator: [5, 12, "#fff"],
  chartValue: { 20: "#9CB4CC", 60: "#0EA293", 100: "#FFA559" },
};
