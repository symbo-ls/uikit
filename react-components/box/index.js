import _extends from "@babel/runtime/helpers/esm/extends";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from "react";
import { useRef, useImperativeHandle, forwardRef } from "react";
import { transformClassname, transformEmotion } from 'css-in-props'


var Box = function Box(props, ref) {
  var className = props.className,
    tag = props.tag,
    href = props.href,
    target = props.target,
    ariaLabel = props.ariaLabel,
    src = props.src,
    alt = props.alt,
    title = props.title,
    type = props.type,
    name = props.name,
    checked = props.checked,
    id = props.id,
    onClick = props.onClick,
    restProps = _objectWithoutProperties(props, ["tag", "className"]);

  var domRef = useRef(null);
  useImperativeHandle(ref, function () {
    return domRef.current;
  });

  var extraProps = _objectSpread({}, restProps, restProps.props);

  var tag = props.tag || extraProps.tag || "div";

  var children = props.text ? props.text : props.children;

  const propsClass = transformEmotion(transformClassname(props)) 

  const style = { ...props.style  };

  return /*#DOMQL GOES HERE*/ React.createElement(
    tag,
    _extends({
      className: `${className ?? ""} ${propsClass}` ,
      ref: domRef,
      style: style,
      href,
      target,
      src,
      alt,
      type,
      name,
      checked,
      id,
      onClick,
      title,
      "aria-label": ariaLabel,
    }),
    children
  );
};

export default /*#__PURE__*/ forwardRef(Box);