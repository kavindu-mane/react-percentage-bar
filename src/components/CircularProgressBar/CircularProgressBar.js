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
  innerShadowStyle,
  outerShadowStyle,
  text,
  showPercentage,
  percentageStyle,
  textStyle,
  children,
  roundLineCap,
  animation,
  percentageAnimation,
  reverse,
  reverseDuration,
  loopCount,
  startDelay,
  reverseDelay,
  antiClockWise,
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
    if (innerShadowStyle !== null) innerShadow = innerShadowStyle;
    else
      innerShadow = {
        boxShadow:
          "inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2), inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7), -0.5px -0.5px 0px rgba(255, 255, 255, 1), 0.5px 0.5px 0px rgba(0, 0, 0, 0.15), 0px 12px 10px -10px rgba(0, 0, 0, 0.05)",
      };

    if (outerShadowStyle !== null) outerShadow = outerShadowStyle;
    else
      outerShadow = {
        boxShadow:
          "6px 6px 10px -1px rgba(0, 0, 0, 0.15), -6px -6px 10px -1px rgba(255, 255, 255, 0.7)",
      };
  } else innerShadow = outerShadow = { boxShadow: "none" };

  // set percentage class
  if (percentageStyle === null)
    percentageStyle = { fontSize: "1.5rem", fontWeight: "600" };

  // set text class
  if (textStyle === null) textStyle = { fontSize: "1.3rem", fontWeight: "500" };

  // set width and height of the inner and outer divs
  const o_dia = toPX(radius) * 2;
  const i_dia = (toPX(radius) - toPX(size)) * 2;
  innerDiameter = { width: i_dia, height: i_dia };
  outerDiameter = { width: o_dia, height: o_dia };
  const outerBackground = {
    width: o_dia + toPX(padding) * 2,
    height: o_dia + toPX(padding) * 2,
    background: backgroundColor,
  };
  background = {
    borderColor: trackColor,
    borderWidth: size,
    borderStyle: styles === "pie-chart" ? "none" : "solid",
    margin: padding,
  };

  return (
    <div className={"outer-div"} style={{ ...outerBackground, ...outerShadow }}>
      <div
        className={"inner-div"}
        style={{ ...background, ...outerDiameter, ...innerShadow }}
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
          antiClockWise={antiClockWise}
          margin={padding}
          separator={separator}
          styles={styles}
          chartValue={chartValue}
        />
        <div className="text-area" style={{ ...innerDiameter }}>
          <p
            style={{
              ...percentageStyle,
              display: styles !== "pie-chart" ? "flex" : "none",
            }}
          >
            {showPercentage ? `${currentPercentage}%` : ""}
          </p>
          <p
            style={{
              ...textStyle,
              display: styles !== "pie-chart" ? "flex" : "none",
            }}
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
  innerShadowStyle: null,
  outerShadowStyle: null,
  text: null,
  showPercentage: true,
  percentageStyle: null,
  textStyle: null,
  roundLineCap: true,
  animation: true,
  percentageAnimation: true,
  reverse: true,
  reverseDuration: 2000,
  loopCount: 0,
  startDelay: 100,
  reverseDelay: 100,
  antiClockWise: false,
  padding: 0,
  backgroundColor: "transparent",
  separator: [5, 12, "#fff"],
  chartValue: { 20: "#9CB4CC", 60: "#0EA293", 100: "#FFA559" },
};
