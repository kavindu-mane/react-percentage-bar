import React, { useEffect, useState } from "react";
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
  const toPX = (measure) => {
    if (
      measure.toString().toLowerCase().includes("em") ||
      measure.toString().toLowerCase().includes("em")
    )
      return 16 * parseFloat(measure, 10);
    else return parseFloat(measure, 10);
  };
  const [state, setState] = useState(0);
  const currentWidth = (p) => (toPX(width) * p) / 100;
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
    borderRadius: roundLineCap ? `calc(${height} / 2)` : 0,
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
          <div className="track" style={{ ...track }}></div>
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
