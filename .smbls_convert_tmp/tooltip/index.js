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

// uikit/tooltip/index.js
var tooltip_exports = {};
__export(tooltip_exports, {
  Tooltip: () => Tooltip
});
module.exports = __toCommonJS(tooltip_exports);

// uikit/tooltip/style.js
var style_default = {
  textAlign: "center",
  padding: "1.2em",
  caption: {
    whiteSpace: "nowrap"
  },
  span: {
    opacity: ".5"
  }
};

// uikit/tooltip/index.js
var Tooltip = {
  style: style_default,
  props: { theme: "purple2" },
  caption: "And tooltip is coming",
  span: "and winter too"
};
