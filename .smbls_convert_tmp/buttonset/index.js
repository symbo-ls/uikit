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

// uikit/buttonset/index.js
var buttonset_exports = {};
__export(buttonset_exports, {
  ButtonSet: () => ButtonSet
});
module.exports = __toCommonJS(buttonset_exports);

// node_modules/@domql/utils/types.js
var isObject = (arg) => {
  if (arg === null)
    return false;
  return typeof arg === "object" && arg.constructor === Object;
};
var isString = (arg) => typeof arg === "string";
var isNumber = (arg) => typeof arg === "number";
var isFunction = (arg) => typeof arg === "function";
var isBoolean = (arg) => arg === true || arg === false;
var isNull = (arg) => arg === null;
var isArray = (arg) => Array.isArray(arg);
var isObjectLike = (arg) => {
  if (arg === null)
    return false;
  return typeof arg === "object";
};
var isDefined = (arg) => {
  return isObject(arg) || isObjectLike(arg) || isString(arg) || isNumber(arg) || isFunction(arg) || isArray(arg) || isObjectLike(arg) || isBoolean(arg) || isNull(arg);
};

// node_modules/@domql/utils/object.js
var deepMerge = (element, extend) => {
  for (const e in extend) {
    const elementProp = element[e];
    const extendProp = extend[e];
    if (e === "parent" || e === "props")
      continue;
    if (elementProp === void 0) {
      element[e] = extendProp;
    } else if (isObjectLike(elementProp) && isObject(extendProp)) {
      deepMerge(elementProp, extendProp);
    }
  }
  return element;
};
var deepClone = (obj) => {
  if (isArray(obj)) {
    return obj.map(deepClone);
  }
  const o = {};
  for (const prop in obj) {
    let objProp = obj[prop];
    if (prop === "extend" && isArray(objProp)) {
      objProp = mergeArray(objProp);
    }
    if (isArray(objProp)) {
      o[prop] = objProp.map(deepClone);
    } else if (isObject(objProp)) {
      o[prop] = deepClone(objProp);
    } else
      o[prop] = objProp;
  }
  return o;
};
var mergeArray = (arr) => {
  return arr.reduce((a, c) => deepMerge(a, deepClone(c)), {});
};

// node_modules/@domql/utils/node.js
var createID = function* () {
  let index = 1;
  while (index < index + 1) {
    yield index++;
  }
}();

// node_modules/@symbo.ls/scratch/src/defaultConfig/index.js
var defaultConfig_exports = {};
__export(defaultConfig_exports, {
  ANIMATION: () => ANIMATION,
  BREAKPOINTS: () => BREAKPOINTS,
  CASES: () => CASES,
  COLOR: () => COLOR,
  DEVICES: () => DEVICES,
  DOCUMENT: () => DOCUMENT,
  FONT: () => FONT,
  FONT_FACE: () => FONT_FACE,
  FONT_FAMILY: () => FONT_FAMILY,
  FONT_FAMILY_TYPES: () => FONT_FAMILY_TYPES,
  GRADIENT: () => GRADIENT,
  ICONS: () => ICONS,
  MEDIA: () => MEDIA,
  RESET: () => RESET,
  SEQUENCE: () => SEQUENCE,
  SPACING: () => SPACING,
  THEME: () => THEME,
  TIMING: () => TIMING,
  TYPOGRAPHY: () => TYPOGRAPHY,
  UNIT: () => UNIT
});

// node_modules/@symbo.ls/scratch/src/defaultConfig/sequence.js
var SEQUENCE = {
  "minor-second": 1.067,
  "major-second": 1.125,
  "minor-third": 1.2,
  "major-third": 1.25,
  "perfect-fourth": 1.333,
  "augmented-fourth": 1.414,
  "perfect-fifth": 1.5,
  "minor-sixth": 1.6,
  phi: 1.618,
  // golden-ratio
  "major-sixth": 1.667,
  "square-root-3": 1.732,
  // theodorus
  "minor-seventh": 1.778,
  "major-seventh": 1.875,
  octave: 2,
  "square-root-5": 2.23,
  // pythagoras
  "major-tenth": 2.5,
  "major-eleventh": 2.667,
  "major-twelfth": 3,
  pi: 3.14,
  // archimedes
  "double-octave": 4
};

// node_modules/@symbo.ls/scratch/src/defaultConfig/unit.js
var UNIT = {
  default: "em"
};

// node_modules/@symbo.ls/scratch/src/defaultConfig/typography.js
var defaultProps = {
  browserDefault: 16,
  base: 16,
  type: "font-size",
  ratio: SEQUENCE["minor-third"],
  range: [-3, 12],
  h1Matches: 6,
  lineHeight: 1.5,
  unit: "em",
  styles: {},
  sequence: {},
  scales: {},
  vars: {}
};
var TYPOGRAPHY = defaultProps;

// node_modules/@symbo.ls/scratch/src/defaultConfig/font.js
var FONT = {};

// node_modules/@symbo.ls/scratch/src/utils/object.js
var isString2 = (arg) => typeof arg === "string";
var isArray2 = (arg) => Array.isArray(arg);
var isObject2 = (arg) => {
  if (arg === null)
    return false;
  return typeof arg === "object" && arg.constructor === Object;
};
var merge = (obj, original) => {
  for (const e in original) {
    const objProp = obj[e];
    const originalProp = original[e];
    if (objProp === void 0) {
      obj[e] = originalProp;
    }
  }
  return obj;
};
var arrayze = (val) => {
  if (isString2(val))
    return val.split(" ");
  if (isObject2(val))
    return Object.keys(val).map((v) => val[v]);
  if (isArray2(val))
    return val;
};

// node_modules/@symbo.ls/scratch/src/utils/font.js
var getFontFormat = (url) => url.split(/[#?]/)[0].split(".").pop().trim();
var setCustomFont = (name, url, weight) => `
  font-family: '${name}';
  font-style: normal;
  ${weight && `font-weight: ${weight};`}
  src: url('${url}') format('${getFontFormat(url)}');`;
var getFontFaceEach = (name, weights) => {
  const keys = Object.keys(weights);
  return keys.map((key) => {
    const { url, fontWeight } = weights[key];
    return setCustomFont(name, url, fontWeight);
  });
};
var getFontFace = (LIBRARY) => {
  const keys = Object.keys(LIBRARY);
  return keys.map((key) => getFontFaceEach(key, LIBRARY[key].value));
};

// node_modules/@symbo.ls/utils/src/index.js
var toDashCase = (val) => val.replace(/[A-Z]/g, (match, offset) => (offset > 0 ? "-" : "") + match.toLowerCase()).replace(".", "-");

// node_modules/@symbo.ls/scratch/src/utils/sequence.js
var numToLetterMap = {
  "-6": "U",
  "-5": "V",
  "-4": "W",
  "-3": "X",
  "-2": "Y",
  "-1": "Z",
  0: "A",
  1: "B",
  2: "C",
  3: "D",
  4: "E",
  5: "F",
  6: "G",
  7: "H",
  8: "I",
  9: "J",
  10: "K",
  11: "L",
  12: "M",
  13: "N",
  14: "O",
  15: "P",
  16: "Q",
  17: "R",
  18: "S",
  19: "T"
};
var setSequenceValue = (props, sequenceProps) => {
  const { key, variable, value, scaling, index } = props;
  sequenceProps.sequence[key] = {
    key,
    decimal: ~~(value * 100) / 100,
    val: ~~value,
    scaling,
    index,
    variable
  };
  sequenceProps.scales[key] = scaling;
  sequenceProps.vars[variable] = scaling + sequenceProps.unit;
};
var generateSubSequence = (props, sequenceProps) => {
  const { key, base, value, ratio, variable, index } = props;
  const next = value * ratio;
  const diff = next - value;
  const smallscale = diff / 1.618;
  const valueRounded = ~~value;
  const nextRounded = ~~next;
  const diffRounded = nextRounded - valueRounded;
  let arr = [];
  const first = next - smallscale;
  const second = value + smallscale;
  const middle = (first + second) / 2;
  if (diffRounded > 16)
    arr = [first, middle, second];
  else
    arr = [first, second];
  arr.map((v, k) => {
    const scaling = ~~(v / base * 1e3) / 1e3;
    const newVar = variable + (k + 1);
    const props2 = {
      key: key + (k + 1),
      variable: newVar,
      value: v,
      scaling,
      index: index + (k + 1) / 10
    };
    return setSequenceValue(props2, sequenceProps);
  });
};
var switchSequenceOnNegative = (key, base, ratio) => {
  return base * Math.pow(ratio, key);
};
var generateSequence = (sequenceProps) => {
  const { type, base, ratio, range, subSequence } = sequenceProps;
  const n = Math.abs(range[0]) + Math.abs(range[1]);
  const prefix = "--" + (type && type.replace(".", "-")) + "-";
  for (let i = 0; i <= n; i++) {
    const key = range[1] - i;
    const letterKey = numToLetterMap[key];
    const value = switchSequenceOnNegative(key, base, ratio);
    const scaling = ~~(value / base * 100) / 100;
    const variable = prefix + letterKey;
    const props = {
      key: letterKey,
      variable,
      value,
      base,
      scaling,
      ratio,
      index: key
    };
    setSequenceValue(props, sequenceProps);
    if (subSequence)
      generateSubSequence(props, sequenceProps);
  }
  return sequenceProps;
};
var getSequenceValue = (value = "A", sequenceProps) => {
  const CONFIG2 = getActiveConfig();
  const { UNIT: UNIT2 } = CONFIG2;
  const {
    sequence,
    unit = UNIT2.default,
    useVariable
  } = sequenceProps;
  if (isString(value) && value.slice(0, 2) === "--")
    return `var(${value})`;
  const prefix = `--${toDashCase(sequenceProps.type.replace(".", "-"))}-`;
  const startsWithDashOrLetterRegex = /^-?[a-zA-Z]/i;
  const startsWithDashOrLetter = startsWithDashOrLetterRegex.test(value);
  if (value === "none" || value === "auto" || value === "unset" || value === "inherit" || value === "fit-content" || value === "min-content" || value === "max-content" || value.includes("calc") || !startsWithDashOrLetter)
    return value;
  const letterVal = value.toUpperCase();
  const isNegative = letterVal.slice(0, 1) === "-" ? "-" : "";
  let absValue = isNegative ? letterVal.slice(1) : letterVal;
  let mediaName = "";
  if (absValue.includes("-")) {
    mediaName = "-" + absValue.split("-")[1].toLowerCase();
    absValue = absValue.split("-")[0];
  }
  const varValue = (v) => `var(${prefix}${v}${mediaName})`;
  if (absValue.includes("+")) {
    const args = absValue.split("+");
    const [first, second] = args;
    const joint = `${varValue(first)} + ${varValue(second)}`;
    return isNegative ? `calc((${joint}) * -1)` : `calc(${joint})`;
  } else if (absValue.includes("-")) {
    const args = absValue.split("-");
    const [first, second] = args;
    const joint = `${varValue(first)} - ${varValue(second)}`;
    return isNegative ? `calc((${joint}) * -1)` : `calc(${joint})`;
  }
  if (!sequence[absValue] && absValue.length === 2) {
    if (CONFIG2.verbose)
      console.warn(absValue, "- value is not found because `subSequence` is set to false");
    absValue = absValue.slice(0, 1);
  }
  if (useVariable || CONFIG2.useVariable) {
    const varValue2 = `var(${prefix}${absValue}${mediaName})`;
    return isNegative ? `calc(${varValue2} * -1)` : varValue2;
  }
  const sequenceItem = sequence ? sequence[absValue] : null;
  if (!sequenceItem)
    return console.warn("can't find", sequence, absValue);
  if (unit === "ms" || unit === "s") {
    return isNegative + sequenceItem.val + unit;
  }
  return isNegative + sequenceItem.scaling + unit;
};
var getSequenceValuePropertyPair = (value, propertyName, sequenceProps) => {
  if (typeof value !== "string") {
    console.warn(propertyName, value, "is not a string");
    return {};
  }
  if (value === "-" || value === "")
    return {};
  return { [propertyName]: getSequenceValue(value, sequenceProps) };
};

// node_modules/@symbo.ls/scratch/src/utils/var.js
var applySequenceVars = (props, mediaName, options = {}) => {
  const CONFIG2 = getActiveConfig();
  const { UNIT: UNIT2, MEDIA: MEDIA2, TIMING: TIMING2, CSS_VARS: CSS_VARS2 } = CONFIG2;
  const unit = props.unit || UNIT2.default;
  const { sequence, scales } = props;
  for (const key in sequence) {
    const item = sequence[key];
    const value = (props.type === TIMING2.type ? sequence[key].val : scales[key]) + unit;
    if (mediaName) {
      const query = MEDIA2[mediaName];
      if (!query) {
        if (CONFIG2.verbose)
          console.warn("Can't find query ", query);
      }
      let underMediaQuery = CSS_VARS2[`@media ${query}`];
      if (!underMediaQuery)
        underMediaQuery = CSS_VARS2[`@media ${query}`] = {};
      underMediaQuery[item.variable] = `var(${item.variable + "-" + mediaName})`;
      CSS_VARS2[item.variable + "-" + mediaName] = value;
    } else {
      if (options.useDefault === false) {
        CSS_VARS2[item.variable] = value;
      } else {
        CSS_VARS2[item.variable + "-default"] = value;
        CSS_VARS2[item.variable] = `var(${item.variable + "-default"})`;
      }
    }
  }
};

// node_modules/@symbo.ls/scratch/src/defaultConfig/font-family.js
var FONT_FAMILY = {};
var FONT_FAMILY_TYPES = {
  serif: "Helvetica, Arial, sans-serif, --system-default",
  "sans-serif": "Times New Roman, Georgia, serif, --system-default",
  monospace: "Courier New, monospace, --system-default"
};
var FONT_FACE = getFontFace(FONT_FAMILY);

// node_modules/@symbo.ls/scratch/src/defaultConfig/media.js
var MEDIA = {
  tv: "(min-width: 2780px)",
  screenL: "(max-width: 1920px)",
  screenM: "(max-width: 1680px)",
  screenS: "(max-width: 1440px)",
  tabletL: "(max-width: 1366px)",
  tabletM: "(max-width: 1280px)",
  tabletS: "(max-width: 1024px)",
  mobileL: "(max-width: 768px)",
  mobileM: "(max-width: 560px)",
  mobileS: "(max-width: 480px)",
  mobileXS: "(max-width: 375px)",
  light: "(prefers-color-scheme: light)",
  dark: "(prefers-color-scheme: dark)",
  print: "print"
};

// node_modules/@symbo.ls/scratch/src/defaultConfig/spacing.js
var defaultProps2 = {
  base: TYPOGRAPHY.base,
  type: "spacing",
  ratio: SEQUENCE.phi,
  range: [-5, 15],
  subSequence: true,
  unit: "em",
  sequence: {},
  scales: {},
  vars: {}
};
var SPACING = defaultProps2;

// node_modules/@symbo.ls/scratch/src/defaultConfig/color.js
var COLOR = {};
var GRADIENT = {};

// node_modules/@symbo.ls/scratch/src/defaultConfig/theme.js
var THEME = {};

// node_modules/@symbo.ls/scratch/src/defaultConfig/icons.js
var ICONS = {};

// node_modules/@symbo.ls/scratch/src/defaultConfig/timing.js
var defaultProps3 = {
  default: 150,
  base: 150,
  type: "timing",
  ratio: SEQUENCE["perfect-fourth"],
  range: [-3, 12],
  unit: "ms",
  sequence: {},
  scales: {},
  vars: {}
};
var TIMING = defaultProps3;

// node_modules/@symbo.ls/scratch/src/defaultConfig/document.js
var DOCUMENT = {};

// node_modules/@symbo.ls/scratch/src/defaultConfig/responsive.js
var BREAKPOINTS = {
  screenL: 1920,
  screenM: 1680,
  screenS: 1440,
  tabletL: 1366,
  tabletM: 1280,
  tabletS: 1024,
  mobileL: 768,
  mobileM: 560,
  mobileS: 480,
  mobileXS: 375
};
var DEVICES = {
  screenL: [1920, 1024],
  screenM: [1680, 1024],
  screenS: [1440, 978],
  tabletL: [1366, 926],
  tabletM: [1280, 768],
  tabletS: [1024, 768],
  mobileL: [768, 375],
  mobileM: [560, 768],
  mobileS: [480, 768],
  mobileXS: [375, 768]
};

// node_modules/@symbo.ls/scratch/src/defaultConfig/cases.js
var CASES = {};

// node_modules/@symbo.ls/scratch/src/defaultConfig/animation.js
var ANIMATION = {};

// node_modules/@symbo.ls/scratch/src/defaultConfig/index.js
var RESET = {};

// node_modules/@symbo.ls/scratch/src/factory.js
var CSS_VARS = {};
var CONFIG = {
  verbose: false,
  useVariable: true,
  useReset: true,
  CSS_VARS,
  ...defaultConfig_exports
};
var cachedConfig = deepClone(CONFIG);
var FACTORY = {
  active: "0",
  0: CONFIG
};
var getActiveConfig = (def) => {
  if (isDefined(def) && !FACTORY[def]) {
    FACTORY[def] = deepClone(cachedConfig);
    return FACTORY[def];
  }
  return FACTORY[def || FACTORY.active];
};

// node_modules/@symbo.ls/scratch/src/system/spacing.js
var getSequence = (sequenceProps) => {
  const CONFIG2 = getActiveConfig();
  const { SPACING: SPACING2 } = CONFIG2;
  if (!sequenceProps)
    return SPACING2;
  const hasGenerated = Object.keys(sequenceProps.sequence).length > 0;
  return hasGenerated ? sequenceProps : generateSequence(sequenceProps);
};
var getSpacingByKey = (value, propertyName = "padding", sequenceProps) => {
  const sequence = getSequence(sequenceProps);
  const stack = arrayze(value);
  if (!stack)
    return;
  if (isString(value) && value.includes("calc")) {
    return { [propertyName]: value };
  }
  if (stack.length > 1) {
    let suffix = "";
    if (propertyName === "borderWidth") {
      propertyName = "border";
      suffix = "Width";
    }
    const directions = {
      2: ["Block", "Inline"],
      3: ["BlockStart", "Inline", "BlockEnd"],
      4: ["BlockStart", "InlineEnd", "BlockEnd", "InlineStart"]
    };
    const wrapSequenceValueByDirection = (direction, i) => getSequenceValuePropertyPair(
      stack[i],
      propertyName + direction + suffix,
      sequence
    );
    return directions[stack.length].map((dir, key) => wrapSequenceValueByDirection(dir, key));
  }
  return getSequenceValuePropertyPair(
    value,
    propertyName,
    sequence
  );
};
var getSpacingBasedOnRatio = (props, propertyName, val) => {
  const CONFIG2 = getActiveConfig();
  const { SPACING: SPACING2 } = CONFIG2;
  const { spacingRatio, unit } = props;
  const value = val || props[propertyName];
  if (spacingRatio) {
    let sequenceProps = SPACING2[spacingRatio];
    if (!sequenceProps) {
      const { type, base, range, subSequence } = SPACING2;
      sequenceProps = SPACING2[spacingRatio] = merge({
        ratio: spacingRatio,
        type: type + "-" + spacingRatio,
        unit,
        sequence: {},
        scales: {},
        styles: {},
        vars: {}
      }, {
        base,
        range,
        subSequence,
        ratio: SPACING2.ratio,
        unit: SPACING2.unit
      });
    }
    applySequenceVars(sequenceProps, null, { useDefault: false });
    return getSpacingByKey(value, propertyName, sequenceProps);
  }
  return getSpacingByKey(value, propertyName);
};

// node_modules/@symbo.ls/shape/style.js
var depth = {
  4: { boxShadow: `rgba(0,0,0,.10) 0 2${UNIT.default} 4${UNIT.default}` },
  6: { boxShadow: `rgba(0,0,0,.10) 0 3${UNIT.default} 6${UNIT.default}` },
  10: { boxShadow: `rgba(0,0,0,.10) 0 4${UNIT.default} 10${UNIT.default}` },
  16: { boxShadow: `rgba(0,0,0,.10) 0 8${UNIT.default} 16${UNIT.default}` },
  26: { boxShadow: `rgba(0,0,0,.10) 0 14${UNIT.default} 26${UNIT.default}` },
  42: { boxShadow: `rgba(0,0,0,.10) 0 20${UNIT.default} 42${UNIT.default}` }
};

// node_modules/@symbo.ls/theme/style.js
var depth2 = {
  4: { boxShadow: `rgba(0,0,0,.10) 0 2${UNIT.default} 4${UNIT.default}` },
  6: { boxShadow: `rgba(0,0,0,.10) 0 3${UNIT.default} 6${UNIT.default}` },
  10: { boxShadow: `rgba(0,0,0,.10) 0 4${UNIT.default} 10${UNIT.default}` },
  16: { boxShadow: `rgba(0,0,0,.10) 0 8${UNIT.default} 16${UNIT.default}` },
  26: { boxShadow: `rgba(0,0,0,.10) 0 14${UNIT.default} 26${UNIT.default}` },
  42: { boxShadow: `rgba(0,0,0,.10) 0 20${UNIT.default} 42${UNIT.default}` }
};

// node_modules/@symbo.ls/block/index.js
var mapBasedOnRatio = (props, prop, unit) => {
  const { spacingRatio } = props;
  const val = props[prop];
  if (spacingRatio) {
    const params = SPACING[spacingRatio];
    if (!params) {
      SPACING[spacingRatio] = {
        base: SPACING.base,
        type: "spacing",
        ratio: spacingRatio,
        range: [-5, 7],
        subSequence: true,
        sequence: {},
        scales: {}
      };
    }
    return getSpacingBasedOnRatio(val, prop, params);
  }
  return getSpacingBasedOnRatio(val, prop, null, unit);
};

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

// uikit/icon-text/index.js
var IconText = {
  props: {
    flexAlign: "center center",
    display: "flex",
    lineHeight: "1"
  },
  icon: { extends: Icon, if: ({ props }, s) => props.icon },
  text: ({ props }) => props.text
};

// uikit/button/index.js
var Button = {
  extends: IconText,
  tag: "button",
  props: {
    type: "button"
  },
  attr: {
    type: ({ props }) => props.type
  },
  on: {
    click: (event, { key, value, props }) => {
      props.onClick && props.onClick(event);
    }
  }
};
var SquareButton = {
  extends: Button,
  props: {
    fontSize: "A",
    width: "A",
    padding: "Z",
    aspectRatio: "1 / 1",
    round: "Z"
  },
  class: {
    squareButton: {
      justifyContent: "center",
      boxSizing: "content-box"
    }
  }
};

// node_modules/@symbo.ls/flex/index.js
var Flex = {
  props: {
    display: "flex",
    flow: "row"
  },
  class: {
    flow: ({ props }) => props.flow && { flexFlow: props.flow },
    flexDirection: ({ props }) => props.flexDirection && { flexDirection: props.flexDirection },
    alignItems: ({ props }) => props.alignItems && { alignItems: props.alignItems },
    alignContent: ({ props }) => props.alignContent && { alignContent: props.alignContent },
    justifyContent: ({ props }) => props.justifyContent && { justifyContent: props.justifyContent },
    gap: ({ props }) => props.gap && mapBasedOnRatio(props, "gap"),
    align: ({ props }) => {
      if (typeof props.align !== "string")
        return;
      const [alignItems, justifyContent] = props.align.split(" ");
      return {
        display: "flex",
        alignItems,
        justifyContent
      };
    }
  }
};

// uikit/buttonset/index.js
var ButtonSet = {
  tag: "nav",
  extends: Flex,
  childExtends: { extends: SquareButton }
};
