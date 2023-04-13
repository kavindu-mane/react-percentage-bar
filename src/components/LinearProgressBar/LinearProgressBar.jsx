import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import toPX from "to-px";
import "./linear-styles.css";

export const LinearProgressBar = ({
  text,
  textClass,
  percentageColor,
  percentage,
  showPercentage,
  color,
  trackColor,
  width,
  height,
  duration,
  percentagePosition,
  startDirection,
  animation,
  percentageAnimation,
  roundLineCap,
}) => {
  const [state, setState] = useState(0);
  const currentWidth = (p) =>
    ((toPX(width) === null ? width : toPX(width)) * p) / 100;
  const track = {
    background: trackColor,
    width: width,
    height: height,
    borderRadius: roundLineCap ? `calc(${height} / 2)` : 0,
  };
  const progressBar = {
    background: color,
    height: height,
    width: animation ? currentWidth(state) : currentWidth(percentage),
    justifyContent: percentagePosition === "onleft" ? "left" : "right",
    right: startDirection === "right" ? 0 : "auto",
    borderRadius: roundLineCap ? `calc(${height} / 2)` : 0
  };
  textClass = textClass === null ? "text-linear" : textClass;
  const isLeft = showPercentage && percentagePosition === "left";
  const isRight = showPercentage && percentagePosition === "right";
  const isOn =
    showPercentage && ["onright", "onleft"].includes(percentagePosition);

  useEffect(() => {
    if (animation || percentageAnimation) {
      if (state < percentage) {
        setTimeout(() => {
          setState((prev) => ++prev);
        }, duration / 100);
      }
    } else {
      setState(percentage);
    }
  });

  return (
    <div
      className="outer-div-linear"
      style={{ width: `calc(${width} + 5rem)` }}
    >
      <p className={textClass}>{text}</p>
      <div className="inner-div-linear">
        <p
          style={{
            color: percentageColor,
            display: isLeft ? "flex" : "none",
            marginRight: "10px",
          }}
          className={"percentage-linear"}
        >
          {percentageAnimation ? state : percentage}%
        </p>

        <div className="progress-div" style={{ width: width, height: height }}>
          <div
            className="track"
            style={{ ...track }}
          ></div>
          <div
            className="progress-bar"
            style={{
              ...progressBar,
            }}
          >
            <p
              style={{
                color: percentageColor,
                fontSize: `calc(${height} * 0.8)`,
                display: isOn ? "flex" : "none",
              }}
              className={"on-top-percentage"}
            >
              {percentageAnimation ? state : percentage}%
            </p>
          </div>
        </div>

        <p
          style={{
            color: percentageColor,
            display: isRight ? "flex" : "none",
            marginLeft: "10px",
          }}
          className={"percentage-linear"}
        >
          {percentageAnimation ? state : percentage}%
        </p>
      </div>
    </div>
  );
};

LinearProgressBar.propTypes = {
  /**
   * Add text value in the progress bar
   */
  text: PropTypes.string,
  /**
   * Add a custom text class
   */
  textClass: PropTypes.string,
  /**
   * Add a color for percentage value
   */
  percentageColor: PropTypes.string,
  /**
   * What is the percentage
   */
  percentage: PropTypes.number,
  /**
   * percentage show or not in the progress bar
   */
  showPercentage: PropTypes.bool,
  /**
   * What color or color gradient use as progressbar background
   */
  color: PropTypes.string,
  /**
   * What color use as progressbar track color
   */
  trackColor: PropTypes.string,
  /**
   * What is the max width of the progress bar
   */
  width: PropTypes.string,
  /**
   * What is the height of the progress bar
   */
  height: PropTypes.string,
  /**
   * What is the animation duration (in ms)
   */
  duration: PropTypes.number,
  /**
   * What is the percentage position.
   */
  percentagePosition: PropTypes.oneOf("left", "right", "onright", "onleft"),
  /**
   * progress bar animate or not
   */
  animation: PropTypes.bool,
  /**
   * percentage value is animate or not
   */
  percentageAnimation: PropTypes.bool,
  /**
   * What is the progress bar animation start direction
   */
  startDirection: PropTypes.oneOf("left", "right"),
  /**
   * linecap is round or or not
   */
  roundLineCap: PropTypes.bool,
};

LinearProgressBar.defaultProps = {
  text: null,
  textClass: null,
  percentageColor: "#00235B",
  percentage: 75,
  showPercentage: true,
  color: "#0ea5e9",
  trackColor: "#efefef",
  width: "20rem",
  height: "0.8rem",
  duration: 2000,
  percentagePosition: "right",
  startDirection: "left",
  animation: true,
  percentageAnimation: false,
  roundLineCap: true,
};
