import React from "react";

const Callout = ({ title, children }) => {
  return (
    <div className="bg-wall-100 rounded-xl display p-7 flex flex-col space-y-4">
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
};

export default Callout;
