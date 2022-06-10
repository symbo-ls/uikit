"use strict";

import React, { useRef } from "react";

import { transformEmotion } from "@domql/transform-emotion";

import { create } from "domql/allExports";
import { isArray, isString, merge } from "domql/allExports";

export const transformReact = (element, key) => {

  const { ref } = element;
  const { tag, props, ...rest } = ref;
  let children = ref.children;
  if (rest.class) props.className = rest.class;
  if (isArray(children)) {
    children = children
      .map((child) => child.ref.transform.react)
      .filter((x) => x !== undefined);
  }
  if (element.text) {
    if (isArray(children)) children.push(element.ref.text);
    else children = [element.ref.text];
  }
  if (key) props.key = key;
  return {
    type: tag,
    props,
    children,
  };
};

const deepCreateChildren = (child) => {
  const childrenArr = [];
  
  if (typeof child === "string") {
    childrenArr.push(React.createElement("p", { value: child }, child));
  }

  if (typeof child === "object") {
    childrenArr.push(React.createElement(child.type, child.props, child));
  }

  return childrenArr;
};

const deepCreate = (element, key) => {
  // const filteredProps = Object.keys(element.props).filter(item => !Object.keys(element.props.className).includes(item));
  if (element) {
    const children = element && element.children ? element.children : undefined;
    // const { children } = element.props
    let type;

    if (element.type) {
      type =
        element.type === "fragment" || element.type === "text"
          ? React.Fragment
          : element.type;
    } else {
      type =
        element.tag === "fragment" || element.tag === "text"
          ? React.Fragment
          : element.tag;
    }

    // element.props = (Object.keys(element.props.className), element.props)

    if (isArray(children)) {
      element.children = children.map(deepCreate);

      element.props.style = element.props.className;

      return React.createElement(type, element.props, ...element.children);
    } else {
      return React.createElement(type, element.props);
    }
  }
};

const RenderReact = (element, key) => {
  const { ref } = element;
  const { props, transform } = ref;
  const { react } = transform;

  props.ref = useRef(ref);

  return <React.StrictMode>{deepCreate(react)}</React.StrictMode>;
};

// export const transformClass = (element) => {
//   const { ref } = element
//   if(!ref.class){
//     ref.class = {}
//   }

//   for (const key in element.class) {
//     ref.class[key] = exec(element.class[key], element)
//   }

//   return ref.class
// }

export const DOMQLReact = (component, props, state) => {
  const element = create(
    {
      extends: component,
      props,
      state,
    },
    null,
    null,
    {
      transform: {
        emotion: transformEmotion,
        // class: transformClass,
        react: transformReact,
      },
    }
  );

  const ReactElement = RenderReact(element, element.key);
  return ReactElement;
};
