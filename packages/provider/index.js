"use strict";

import React from "react";
import { set } from "@symbo.ls/scratch";

const context = /*#__PURE__*/ React.createContext({
  config: {},
});
const Provider = context.Provider;

export const SymbolsProvider = ({ config, children }) => {
  set(config);

  return /*#__PURE__*/ React.createElement(
    Provider,
    {
      config: config,
    },
    children
  );
};
