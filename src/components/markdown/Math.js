import React from "react";
import { MathComponent } from "mathjax-react"

const Math = ({ block = false, children }) => {
    let exp = children?.join ? children.map(e => e?.props?.children ? e.props.children : e).join("") : children;
    exp = exp?.props?.children ? exp.props.children.join("") : exp;
    return <MathComponent display={block} tex={String.raw`${exp}`} />;
};

export default Math;
