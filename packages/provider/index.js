"use strict";

import React from "react";
import { set } from "@symbo.ls/scratch";
import CONFIG_DEFAULT from '@symbo.ls/config-default'

const context = React.createContext({
  config: {},
});
const Provider = context.Provider;

export const SymbolsProvider = ({ config, children }) => {
  const defaultConfig = config || CONFIG_DEFAULT
  set(defaultConfig);

  return React.createElement(
    Provider,
    {
      value: {
        config: config,
      },
    },
    children
  );
};
