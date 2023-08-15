import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import ReactPlayer from "react-player";

const CustomVideoDisplayer = ({ url, width, height, slidePosition }) => (
  <ScrollAnimation
    animateIn={slidePosition ?? "slideInRight"}
    animateOnce={true}
    duration={10}
    delay={2}
  >
    <ReactPlayer
      url={url ?? "https://www.youtube.com/embed/Bu-KAH4fE10"}
      width={width ?? "100%"}
      height={height ?? null}
    />
  </ScrollAnimation>
);

export default CustomVideoDisplayer;
