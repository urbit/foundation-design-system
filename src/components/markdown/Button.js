import React from "react";
import Link from "next/link";

const Button = ({ label, link = "", color }) => {
  return (
    <Link passHref href={link}>
      <a className={"button-lg max-w-fit " + color}>{label}</a>
    </Link>
  );
};

export default Button;
