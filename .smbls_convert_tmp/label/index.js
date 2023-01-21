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

// uikit/label/index.js
var label_exports = {};
__export(label_exports, {
  Label: () => Label
});
module.exports = __toCommonJS(label_exports);
var Label = {
  style: { lineHeight: 1 },
  props: {
    emoji: "\u{1F44D}",
    text: "3",
    padding: "X2 Z",
    round: "C",
    depth: 16
  },
  emoji: ({ props }) => props.emoji
};
