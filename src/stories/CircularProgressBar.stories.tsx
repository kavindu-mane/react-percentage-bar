import { CircularProgressBar } from "..";

export default {
  title: "Example/Circular",
  component: CircularProgressBar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export const Circular = {
  args: {
    trackColor: "#e9a1a1",
    backgroundColor: "#ffffff",
    styles: "solid",
    innerShadowStyle: {},
    color: "#000",
    outerShadowStyle: {}
  }
};
