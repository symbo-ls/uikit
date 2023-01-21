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

// uikit/icon/index.js
var icon_exports = {};
__export(icon_exports, {
  Icon: () => Icon
});
module.exports = __toCommonJS(icon_exports);

// uikit/icon/style.js
var style_default = {
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
  style: style_default,
  define: { name: (param) => param },
  // name: ({ props }) => props.icon,
  attr: { viewBox: "0 0 24 24" },
  src: ({ key, name }) => name || key || "noIcon"
};
