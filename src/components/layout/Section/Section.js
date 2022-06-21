import classnames from "classnames";
import React from "react";

export default function Section({
  children,
  className = "",
  short = false,
  narrow = false,
}) {
  const spacing = classnames({
    "py-8": short,
    "py-20": !short,
    "layout-narrow": narrow,
    layout: !narrow,
  });
  return (
    <section className={`w-full px-4 md:px-8 ${spacing} ${className}`}>
      {children}
    </section>
  );
}
