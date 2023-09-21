'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Math({
  block = false,
  className = "",
  children
}) {
  const rootElementRef = React__default["default"].useRef(null);
  let exp = children?.join ? children.map(e => e?.props?.children ? e.props.children : e).join("") : children;
  exp = exp?.props?.children?.join ? exp.props.children.join("\n") : exp?.props?.children ? exp.props.children : exp;
  const classes = className + (block === true ? "block text-center" : "");
  const [isReady, setIsReady] = React__default["default"].useState(__MathJax_State__.isReady);
  React__default["default"].useLayoutEffect(() => {
    if (!isReady) {
      __MathJax_State__.promise.then(() => setIsReady(true));
      return;
    }
    const mathElement = rootElementRef.current;
    mathElement.innerHTML = "";
    MathJax.texReset();
    const options = MathJax.getMetricsFor(mathElement);
    options.display = block;
    MathJax.tex2chtmlPromise(String.raw`${exp}`, options).then(function (node) {
      mathElement.appendChild(node);
      MathJax.startup.document.clear();
      MathJax.startup.document.updateDocument();
    }).catch(function (err) {
      console.error(err);
    });
  }, [exp, block, isReady]);
  return /*#__PURE__*/React__default["default"].createElement("span", {
    className: classes,
    ref: rootElementRef
  });
}

exports["default"] = Math;
