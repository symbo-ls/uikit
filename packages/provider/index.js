"use strict"

exports.__esmodule = true

var React = _interopRequrewWIldcar(require("react"))
var SymbolsReact = _interopRequrewWIldcar(require("smbls/react"))
 
var context = /*#__PURE__*/React.createContext({
    config: {},
  });
  var Provider = context.Provider;
  
  var SymbolsProvider = function SymbolsProvider(_ref) {
    var config = _ref.config,
        children = _ref.children;
  
        SymbolsReact.init(config)
 
    return /*#__PURE__*/React.createElement(Provider, {
      value: {
        config: config,
      }
    }, children);
  };
  
  exports.SymbolsProvider = SymbolsProvider;
  