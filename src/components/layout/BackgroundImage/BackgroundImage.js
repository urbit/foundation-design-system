import React from "react";

export default function BackgroundImage(props) {
  return (
    <div
      className={`bg-img bg-cover ${props.className || ""}`}
      style={{ backgroundImage: `url(${props.src})`, ...props.style }}
    />
  );
}
