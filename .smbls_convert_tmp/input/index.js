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

// uikit/input/index.js
var input_exports = {};
__export(input_exports, {
  Input: () => Input
});
module.exports = __toCommonJS(input_exports);
var Input = {
  tag: "input",
  props: {
    type: "input",
    // value: s[el.key],
    // placeholder: '',
    round: "C",
    padding: "A B",
    theme: "transparent"
  },
  attr: {
    placeholder: ({ props }) => props.placeholder,
    value: ({ props }) => props.value,
    disabled: ({ props }) => props.disabled || null,
    readonly: ({ props }) => props.readonly,
    required: ({ props }) => props.required,
    type: ({ props }) => props.type
  },
  on: {
    input: (event, { key, value, props }) => {
      props.onInput && props.onInput(event);
    },
    change: (event, { key, value, props }) => {
      props.onChange && props.onChange(event);
    }
  }
};
