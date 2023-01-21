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

// uikit/user/index.js
var user_exports = {};
__export(user_exports, {
  User: () => User,
  UserBundle: () => UserBundle,
  default: () => user_default
});
module.exports = __toCommonJS(user_exports);

// uikit/user/style.js
var styleUser = {
  cursor: "pointer",
  borderRadius: "100%"
};
var styleUserBundle = {
  display: "flex",
  alignItems: "center",
  textTransform: "capitalize",
  "> div": {
    display: "flex",
    marginRight: "1em",
    "> img": {
      marginRight: "-0.5em"
    }
  }
};

// uikit/user/index.js
var User = {
  props: { boxSize: "B B" },
  style: styleUser,
  tag: "img",
  attr: {
    src: "https://p194.p3.n0.cdn.getcloudapp.com/items/yAubz2KN/IMG_2375.jpg?v=c59a92ea47a959e386e952c3d84c08e5"
  }
};
var UserBundle = {
  style: styleUserBundle,
  users: {
    childExtends: User,
    ...[{}]
  },
  span: "join classroom"
};
var user_default = User;
