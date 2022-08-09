"use strict";

import React from "react";
import { set } from "@symbo.ls/scratch";
import CONFIG_DEFAULT from '@symbo.ls/config-default'

const context = /*#__PURE__*/ React.createContext({
  config: {},
});
const Provider = context.Provider;

export const SymbolsProvider = ({ config, children }) => {
  const defaultConfig = config || CONFIG_DEFAULT
  set(defaultConfig);

  return /*#__PURE__*/ React.createElement(
    Provider,
    {
      value: {
        config: config,
      },
    },
    children
  );
};
