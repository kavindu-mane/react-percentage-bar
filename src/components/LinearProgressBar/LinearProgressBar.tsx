import React, { useEffect, useState } from "react";
import { LinearProgressBarProps } from "../../types";
import { toPX } from "../functions";
import "./linear-styles.css";

export const LinearProgressBar = ({
  text,
  textStyle,
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
}:LinearProgressBarProps) => {
  const [state, setState] = useState<number>(0);
  const currentWidth = (p:number) => (toPX(width) * p) / 100;

  let startColor = "#0ea5e9";
  let endColor = "#0ea5e9";
  // stroke color gradient
  if (Array.isArray(color)) {
    startColor = color[0] === undefined ? startColor : color[0];
    endColor = color[1] === undefined ? endColor : color[1];
  } else startColor = endColor = color;

  const track = {
    background: trackColor,
    width: width,
    height: height,
    borderRadius: roundLineCap ? `calc(${height} / 2)` : 0,
  };
  const progressBar = {
    background: `linear-gradient(to ${
      startDirection === "right" ? "left" : "right"
    } , ${startColor}, ${endColor})`,
    height: height,
    width: animation ? currentWidth(state) : currentWidth(percentage),
    right: startDirection === "right" ? 0 : "auto",
    borderRadius: roundLineCap ? `calc(${height} / 2)` : 0,
  };
  textStyle =
    textStyle === null
      ? {
          fontSize: "1.2rem",
          margin: "10px 0",
          fontFamily:
            "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
          fontWeight: "600",
          color: "#00235B",
        }
      : textStyle;
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
      <p style={{...textStyle}}>{text}</p>
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
                display: isOn ? "block" : "none",
                textAlign: percentagePosition === "onleft" ? "left" : "right",
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
  textStyle: null,
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
  percentageAnimation: true,
  roundLineCap: true,
};
