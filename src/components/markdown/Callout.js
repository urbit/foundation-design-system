import React from "react";
import classNames from "classnames";
const Callout = ({ title, children, className = "bg-wall-100" }) => {
  return (
    <div
      className={classNames(
        "rounded-xl display !p-7 flex flex-col space-y-4",
        className
      )}
    >
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
};

export default Callout;
