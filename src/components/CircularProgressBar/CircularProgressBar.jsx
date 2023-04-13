import React, { useState } from "react";
import PropTypes from "prop-types";
import { Circle } from "./Circle";
import toPX from "to-px";
import "./circular-styles.css";

export const CircularProgressBar = ({
  color,
  trackColor,
  radius,
  style,
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
  radius = toPX(radius) === null ? radius + "px" : radius;
  size = toPX(size) === null ? size + "px" : size;
  padding = toPX(padding) === null ? padding + "px" : padding;
  const [currentPercentage, setPercentage] = useState(0);
  const returnState = (state) => {
    setPercentage(state);
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
  const o_dia = `calc(${radius}*2)`;
  const i_dia = `calc(calc(${radius} - ${size}) * 2)`;
  innerDiameter = { width: i_dia, height: i_dia };
  outerDiameter = { width: o_dia, height: o_dia };
  const outerBackground = { padding: padding, background: backgroundColor };
  background = {
    borderColor: trackColor,
    borderWidth: size,
    borderStyle: style === "pie-chart" ? "none":"solid",
  };


  return (
    <div
      className={["outer-div", outerShadow].join(" ")}
      style={{ ...outerDiameter, ...outerBackground }}
    >
      <div
        className={["inner-div", innerShadow].join(" ")}
        style={{ ...background, ...innerDiameter }}
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
          style={style}
          chartValue={chartValue}
        />
        <div className="text-area" style={{ ...innerDiameter }}>
          <p
            className={PercentageClass}
            style={{ display: style !== "pie-chart" ? "flex" : "none" }}
          >
            {showPercentage ? `${currentPercentage}%` : ""}
          </p>
          <p
            className={textClass}
            style={{ display: style !== "pie-chart" ? "flex" : "none" }}
          >
            {text}
          </p>
          {children}
        </div>
      </div>
    </div>
  );
};

CircularProgressBar.propTypes = {
  /**
   * What color or color gradient use as progressbar background
   */
  color: PropTypes.string,
  /**
   * What color use as progressbar track color
   */
  trackColor: PropTypes.string,
  /**
   * What is the width and height
   */
  radius: PropTypes.string,
  /**
   * How large should the button be?
   */
  style: PropTypes.oneOf(["solid", "pie-chart", "separators"]),
  /**
   * What is the progress circle width
   */
  size: PropTypes.string,
  /**
   * What is the percentage
   */
  percentage: PropTypes.number,
  /**
   * What is the animation duration (in ms)
   */
  duration: PropTypes.number,
  /**
   * What is the start position of the progress bar. 0 is top most point  , 90 is right most point
   */
  startPosition: PropTypes.number,
  /**
   * Shadow is add or not
   */
  shadow: PropTypes.bool,
  /**
   * Add a custom shadow class for inner side of progress bar
   */
  innerShadowClass: PropTypes.string,
  /**
   * Add a custom shadow class for outer side of progress bar
   */
  outerShadowClass: PropTypes.string,
  /**
   * Add text value in the progress bar
   */
  text: PropTypes.string,
  /**
   * percentage show or not in the progress bar
   */
  showPercentage: PropTypes.bool,
  /**
   * Add a custom percentage class
   */
  PercentageClass: PropTypes.string,
  /**
   * Add a custom text class
   */
  textClass: PropTypes.string,
  /**
   * linecap is round or or not
   */
  roundLineCap: PropTypes.bool,
  /**
   * progress bar animate or not
   */
  animation: PropTypes.bool,
  /**
   * percentage value is animate or not
   */
  percentageAnimation: PropTypes.bool,
  /**
   * Progressbar reverse or not
   */
  reverse: PropTypes.bool,
  /**
   * What is the animation reverse duration (in ms)
   */
  reverseDuration: PropTypes.number,
  /**
   * What is the animation iteration count
   */
  loopCount: PropTypes.number,
  /**
   * What is the animation start delay
   */
  startDelay: PropTypes.number,
  /**
   * What is the animation reverse delay
   */
  reverseDelay: PropTypes.number,
  /**
   * progress bar value increasing direction
   */
  antiClockWize: PropTypes.bool,
  /**
   * Padding between progress bar and background
   */
  padding: PropTypes.string,
  /**
   * What color or color gradient use as background
   */
  backgroundColor: PropTypes.string,
  /**
   * What is the seperator width , separators count , separator color
   */
  separator: PropTypes.array,
  /**
   * What is the chart breakpoin percentages and colors of each part
   */
  chartValue: PropTypes.object,
};

CircularProgressBar.defaultProps = {
  color: "#0ea5e9",
  radius: "5rem",
  style: "solid",
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
