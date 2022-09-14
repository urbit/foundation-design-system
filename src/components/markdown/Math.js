import React from "react";
import { MathComponent } from "mathjax-react"

const Math = ({ block = false, children }) => {
    const exp = children?.join ? children.map(e => e?.props?.children ? e.props.children : e).join("") : children
    return <MathComponent display={block} tex={String.raw`${exp}`} />;
};

export default Math;
