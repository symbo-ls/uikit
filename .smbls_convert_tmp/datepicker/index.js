"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// uikit/datepicker/index.js
var datepicker_exports = {};
__export(datepicker_exports, {
  DatePicker: () => DatePicker
});
module.exports = __toCommonJS(datepicker_exports);

// uikit/datepicker/style.js
var style_default = {
  maxWidth: `${336 / 16}em`,
  maxHeight: `${260 / 16}em`,
  display: "flex",
  padding: "0 1em",
  boxSizing: "border-box",
  borderRadius: "10px",
  button: {
    border: "none",
    outline: "none",
    background: "transparent",
    cursor: "pointer"
  },
  aside: {
    display: "flex",
    flexDirection: "column",
    overflowX: "auto",
    paddingRight: `${10 / 16}em`,
    button: {
      opacity: 0.5,
      marginBottom: `${22 / 12}em`
    }
  },
  main: {
    flex: 1,
    paddingTop: `${14 / 16}em`,
    paddingBottom: `${10 / 16}em`,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    "> header": {
      display: "flex",
      alignItems: "center",
      height: "auto",
      overflow: "hidden",
      width: "100%",
      padding: `0 ${8 / 16}em ${14 / 16}em ${8 / 16}em`,
      boxSizing: "border-box"
    },
    "> header > svg": {
      cursor: "pointer"
    },
    "> header > div": {
      display: "flex",
      overflow: "hidden",
      flex: 1
    },
    "> header span": {
      minWidth: "100%",
      textTransform: "capitalize",
      textAlign: "center",
      fontWeight: "bold"
    },
    section: {
      flex: 1,
      display: "flex",
      flexDirection: "column"
    },
    "section > header": {
      height: "auto",
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      gap: "6px",
      paddingBottom: `${2 / 16}em`
    },
    "section > header span": {
      textAlign: "center",
      fontWeight: "bold"
    },
    "section > header span:nth-child(6)": {
      opacity: 0.5
    },
    "section > header span:nth-child(7)": {
      opacity: 0.5
    },
    "section > div": {
      flex: 1,
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      gap: "6px"
    },
    "section > div button": {},
    "section > div button:nth-child(7n)": {
      opacity: 0.5
    },
    "section > div button:nth-child(7n - 1)": {
      opacity: 0.5
    }
  }
};

// uikit/icon/style.js
var style_default2 = {
  width: "1em",
  height: "1em",
  fill: "currentColor",
  display: "inline-block"
};

// node_modules/@symbo.ls/svg/index.js
var useSVGSymbol = (file) => `<use xlink:href="${file}" />`;
var SVG = {
  tag: "svg",
  attr: {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  },
  define: { src: (param) => param },
  html: ({ key, src, props }) => useSVGSymbol(props.src || src || key)
};

// uikit/icon/index.js
var Icon = {
  extends: SVG,
  style: style_default2,
  define: { name: (param) => param },
  // name: ({ props }) => props.icon,
  attr: { viewBox: "0 0 24 24" },
  src: ({ key, name }) => name || key || "noIcon"
};

// uikit/datepicker/index.js
var DatePicker = {
  props: {
    theme: "lightDark",
    padding: "A",
    round: "Z",
    depth: "16"
  },
  aside: {
    childExtends: { tag: "button" }
  },
  main: {
    header: {
      icon: {
        extends: Icon,
        props: { icon: "arrowMediumLeft" }
      },
      month: {
        childExtends: { tag: "span" }
      },
      icon2: {
        extends: Icon,
        props: { icon: "arrowMediumRight" }
      }
    },
    days: {
      tag: "section",
      header: {
        childExtends: { tag: "span" }
      },
      content: {
        childExtends: { tag: "button" }
      }
    }
  }
};
