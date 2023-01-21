"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from2, except, desc) => {
  if (from2 && typeof from2 === "object" || typeof from2 === "function") {
    for (let key of __getOwnPropNames(from2))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// uikit/atoms/index.js
var atoms_exports = {};
__export(atoms_exports, {
  Animation: () => Animation,
  Block: () => Block,
  Caption: () => Caption,
  Clickable: () => Clickable,
  Direction: () => Direction,
  Flex: () => Flex,
  Focusable: () => Focusable,
  FocusableComponent: () => FocusableComponent,
  Form: () => Form,
  Grid: () => Grid,
  H1: () => H1,
  H2: () => H2,
  H3: () => H3,
  H4: () => H4,
  H5: () => H5,
  H6: () => H6,
  Hoverable: () => Hoverable,
  Iframe: () => Iframe,
  Img: () => Img,
  Interaction: () => Interaction,
  Italic: () => Italic,
  Media: () => Media,
  Overflow: () => Overflow,
  P: () => P,
  Picture: () => Picture,
  Position: () => Position,
  Pseudo: () => Pseudo,
  SVG: () => SVG,
  Shape: () => Shape,
  Span: () => Span,
  Strong: () => Strong,
  Text: () => Text,
  Theme: () => Theme,
  Timing: () => Timing,
  Transform: () => Transform,
  Underline: () => Underline,
  XYZ: () => XYZ,
  convertPropsToClass: () => convertPropsToClass,
  getSystemTheme: () => getSystemTheme,
  initUpdate: () => initUpdate,
  splitTransition: () => splitTransition,
  transformDuration: () => transformDuration,
  transformShadow: () => transformShadow,
  transformTransition: () => transformTransition
});
module.exports = __toCommonJS(atoms_exports);

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
var exec = (param, element, state) => {
  if (isFunction(param))
    return param(element, state || element.state);
  return param;
};
var merge = (element, obj) => {
  for (const e in obj) {
    const elementProp = element[e];
    const objProp = obj[e];
    if (elementProp === void 0) {
      element[e] = objProp;
    }
  }
  return element;
};
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
var merge2 = (obj, original) => {
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

// node_modules/@symbo.ls/scratch/src/utils/color.js
var hexToRgbArray = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
  return [r, g, b];
};
var rgbArrayToHex = ([r, g, b]) => {
  return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};
var rgbToHSL = (r, g, b) => {
  const a = Math.max(r, g, b);
  const n = a - Math.min(r, g, b);
  const f = 1 - Math.abs(a + a - n - 1);
  const h = n && (a == r ? (g - b) / n : a == g ? 2 + (b - r) / n : 4 + (r - g) / n);
  return [60 * (h < 0 ? h + 6 : h), f ? n / f : 0, (a + a - n) / 2];
};
var hslToRgb = (h, s, l, a = s * Math.min(l, 1 - l), f = (n, k = (n + h / 30) % 12) => l - a * Math.max(
  Math.min(k - 3, 9 - k, 1),
  -1
)) => [f(0), f(8), f(4)];
var getColorShade = (col, amt) => {
  const num = parseInt(col, 16);
  let r = (num >> 16) + amt;
  if (r > 255)
    r = 255;
  else if (r < 0)
    r = 0;
  let b = (num >> 8 & 255) + amt;
  if (b > 255)
    b = 255;
  else if (b < 0)
    b = 0;
  let g = (num & 255) + amt;
  if (g > 255)
    g = 255;
  else if (g < 0)
    g = 0;
  return (g | b << 8 | r << 16).toString(16);
};

// node_modules/@symbo.ls/scratch/src/utils/font.js
var getDefaultOrFirstKey = (LIBRARY, key) => {
  if (LIBRARY[key])
    return LIBRARY[key].value;
  if (LIBRARY.default)
    return LIBRARY[LIBRARY.default].value;
  const hasValue = Object.keys(LIBRARY)[0];
  return hasValue && LIBRARY[hasValue] && LIBRARY[hasValue].value;
};
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
var toCamelCase = (str) => {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, "");
};
var toDashCase = (val) => val.replace(/[A-Z]/g, (match2, offset) => (offset > 0 ? "-" : "") + match2.toLowerCase()).replace(".", "-");

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
  const next2 = value * ratio;
  const diff = next2 - value;
  const smallscale = diff / 1.618;
  const valueRounded = ~~value;
  const nextRounded = ~~next2;
  const diffRounded = nextRounded - valueRounded;
  let arr = [];
  const first = next2 - smallscale;
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
  const prefix2 = "--" + (type && type.replace(".", "-")) + "-";
  for (let i = 0; i <= n; i++) {
    const key = range[1] - i;
    const letterKey = numToLetterMap[key];
    const value = switchSequenceOnNegative(key, base, ratio);
    const scaling = ~~(value / base * 100) / 100;
    const variable = prefix2 + letterKey;
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
  const prefix2 = `--${toDashCase(sequenceProps.type.replace(".", "-"))}-`;
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
  const varValue = (v) => `var(${prefix2}${v}${mediaName})`;
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
    const varValue2 = `var(${prefix2}${absValue}${mediaName})`;
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

// node_modules/@symbo.ls/scratch/src/system/color.js
var getColor = (value, key) => {
  const CONFIG2 = getActiveConfig();
  if (!isString(value)) {
    if (CONFIG2.verbose)
      console.warn(value, "- type for color is not valid");
    return;
  }
  if (value.slice(0, 2) === "--")
    return `var(${value})`;
  if (key && value[key])
    value = value[key];
  const [name, alpha, tone] = isArray(value) ? value : value.split(" ");
  const { COLOR: COLOR2, GRADIENT: GRADIENT2 } = CONFIG2;
  let val = COLOR2[name] || GRADIENT2[name];
  if (!val) {
    if (CONFIG2.verbose)
      console.warn("Can't find color ", name);
    return value;
  }
  if (key) {
    if (val[key])
      val = val[key];
    else if (CONFIG2.verbose)
      console.warn(value, " - does not have ", key);
  }
  let rgb = val.rgb;
  if (rgb) {
    if (tone) {
      if (!val[tone]) {
        const toHex = rgbArrayToHex(rgb.split(", ").map((v) => parseFloat(v)));
        if (tone.slice(0, 1) === "-" || tone.slice(0, 1) === "+") {
          rgb = hexToRgbArray(getColorShade(toHex, parseFloat(tone))).join(", ");
        } else {
          const [r, g, b] = [...rgb.split(", ").map((v) => parseInt(v))];
          const hsl = rgbToHSL(r, g, b);
          const [h, s, l] = hsl;
          const newRgb = hslToRgb(h, s, parseFloat(tone) / 100 * 255);
          rgb = newRgb;
        }
        val[tone] = { rgb, var: `${val.var}-${tone}` };
      } else
        rgb = val[tone].rgb;
    }
    if (alpha)
      return `rgba(${rgb}, ${alpha})`;
    return CONFIG2.useVariable ? `var(${val.var})` : `rgb(${rgb})`;
  } else
    return CONFIG2.useVariable ? `var(${val.var})` : val.value;
};
var getMediaColor = (value, property, globalTheme) => {
  const CONFIG2 = getActiveConfig();
  if (!globalTheme)
    globalTheme = CONFIG2.globalTheme;
  if (!isString(value)) {
    if (CONFIG2.verbose)
      console.warn(value, "- type for color is not valid");
    return;
  }
  if (value.slice(0, 2) === "--")
    return { [property]: `var(${value})` };
  const [name] = isArray(value) ? value : value.split(" ");
  const { COLOR: COLOR2, GRADIENT: GRADIENT2 } = CONFIG2;
  const val = COLOR2[name] || GRADIENT2[name];
  const isObj = isObject(val);
  if (isObj && val.value)
    return { [property]: getColor(value, globalTheme) };
  else if (isObj) {
    if (globalTheme)
      return { [property]: getColor(value, `@${globalTheme}`) };
    else {
      const obj = {};
      for (const mediaName in val) {
        const query = CONFIG2.MEDIA[mediaName.slice(1)];
        const media = `@media screen and ${query}`;
        obj[media] = { [property]: getColor(value, mediaName) };
      }
      return obj;
    }
  } else {
    if (CONFIG2.verbose)
      console.warn("Can't find color", value);
    return { [property]: value };
  }
};

// node_modules/@symbo.ls/scratch/src/system/theme.js
var recursiveTheme = (val) => {
  const CONFIG2 = getActiveConfig();
  const obj = {};
  for (const param in val) {
    const symb = param.slice(0, 1);
    if (isObjectLike(val[param])) {
      if (symb === "@") {
        const query = CONFIG2.MEDIA[param.slice(1)];
        const media = `@media screen and ${query}`;
        obj[media] = recursiveTheme(val[param]);
      } else if (symb === ":") {
        obj[`&${param}`] = recursiveTheme(val[param]);
      }
    } else
      obj[param] = val[param];
  }
  return obj;
};
var findModifierFromArray = (val, modifierArray) => {
  const currentMod = modifierArray.shift();
  if (val[currentMod])
    return findModifierFromArray(val[currentMod], modifierArray);
  return val;
};
var findModifier = (val, modifier) => {
  if (isArray(modifier))
    return findModifierFromArray(val, modifier);
  else if (isString(modifier) && val[modifier])
    return val[modifier];
  else
    return val;
};
var getMediaTheme = (val, mod) => {
  const CONFIG2 = getActiveConfig();
  if (isString(val) && val.slice(0, 2) === "--")
    val = getMediaTheme(val.slice(2));
  if (!val || !isString(val)) {
    if (CONFIG2.verbose)
      console.warn(val, "- theme is not string");
    return;
  }
  const [name, ...modifier] = isArray(val) ? val : val.split(" ");
  let value = CONFIG2.THEME[name];
  if (value && (modifier || mod)) {
    value = findModifier(value, modifier.length ? modifier : mod);
  }
  const r = recursiveTheme(value);
  return r;
};

// node_modules/@symbo.ls/scratch/src/system/font.js
var getFontFamily = (key, factory) => {
  const CONFIG2 = getActiveConfig();
  const { FONT_FAMILY: FONT_FAMILY2 } = CONFIG2;
  return getDefaultOrFirstKey(factory || FONT_FAMILY2, key);
};

// node_modules/@symbo.ls/scratch/src/system/typography.js
var getFontSizeByKey = (value) => {
  const CONFIG2 = getActiveConfig();
  const { TYPOGRAPHY: TYPOGRAPHY2 } = CONFIG2;
  return getSequenceValuePropertyPair(
    value,
    "fontSize",
    TYPOGRAPHY2
  );
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
      sequenceProps = SPACING2[spacingRatio] = merge2({
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

// node_modules/@symbo.ls/scratch/src/system/timing.js
var getTimingFunction = (value) => {
  const CONFIG2 = getActiveConfig();
  const { TIMING: TIMING2 } = CONFIG2;
  return TIMING2[value] || TIMING2[toCamelCase(value)] || value;
};
var getTimingByKey = (value, property = "timing") => {
  const CONFIG2 = getActiveConfig();
  const { TIMING: TIMING2 } = CONFIG2;
  return getSequenceValuePropertyPair(
    value,
    property,
    TIMING2
  );
};

// uikit/atoms/Block.js
var transfromGap = (gap) => isString2(gap) && {
  gap: gap.split(" ").map((v) => getSpacingByKey(v, "gap").gap).join(" ")
};
var Block = {
  class: {
    boxSizing: ({ props }) => props.boxSizing ? { boxSizing: props.boxSizing } : {
      boxSizing: "border-box"
    },
    display: ({ props }) => props.display && { display: props.display },
    hide: ({ props }) => props.hide && { display: "none" },
    width: ({ props }) => props.width && getSpacingBasedOnRatio(props, "width"),
    height: ({ props }) => props.height && getSpacingBasedOnRatio(props, "height"),
    boxSize: ({ props }) => {
      if (typeof props.boxSize !== "string")
        return;
      const [height, width] = props.boxSize.split(" ");
      return {
        ...getSpacingByKey(height, "height"),
        ...getSpacingByKey(width || height, "width")
      };
    },
    maxWidth: ({ props }) => props.maxWidth && getSpacingBasedOnRatio(props, "maxWidth"),
    minWidth: ({ props }) => props.minWidth && getSpacingBasedOnRatio(props, "minWidth"),
    widthRange: ({ props }) => {
      if (typeof props.widthRange !== "string")
        return;
      const [minWidth, maxWidth] = props.widthRange.split(" ");
      return {
        ...getSpacingByKey(minWidth, "minWidth"),
        ...getSpacingByKey(maxWidth || minWidth, "maxWidth")
      };
    },
    maxHeight: ({ props }) => props.maxHeight && getSpacingBasedOnRatio(props, "maxHeight"),
    minHeight: ({ props }) => props.minHeight && getSpacingBasedOnRatio(props, "minHeight"),
    heightRange: ({ props }) => {
      if (typeof props.heightRange !== "string")
        return;
      const [minHeight, maxHeight] = props.heightRange.split(" ");
      return {
        ...getSpacingByKey(minHeight, "minHeight"),
        ...getSpacingByKey(maxHeight || minHeight, "maxHeight")
      };
    },
    direction: ({ props }) => props.direction && { direction: props.direction },
    aspectRatio: ({ props }) => props.aspectRatio && { aspectRatio: props.aspectRatio },
    borderWidth: ({ props }) => props.borderWidth ? getSpacingBasedOnRatio(props, "borderWidth") : null,
    padding: ({ props }) => props.padding ? getSpacingBasedOnRatio(props, "padding") : null,
    paddingInline: ({ props }) => {
      if (typeof props.paddingInline !== "string")
        return;
      const [paddingInlineStart, paddingInlineEnd] = props.paddingInline.split(" ");
      return {
        ...getSpacingByKey(paddingInlineStart, "paddingInlineStart"),
        ...getSpacingByKey(paddingInlineEnd || paddingInlineStart, "paddingInlineEnd")
      };
    },
    paddingBlock: ({ props }) => {
      if (typeof props.paddingBlock !== "string")
        return;
      const [paddingBlockStart, paddingBlockEnd] = props.paddingBlock.split(" ");
      return {
        ...getSpacingByKey(paddingBlockStart, "paddingBlockStart"),
        ...getSpacingByKey(paddingBlockEnd || paddingBlockStart, "paddingBlockEnd")
      };
    },
    paddingInlineStart: ({ props }) => props.paddingInlineStart ? getSpacingBasedOnRatio(props, "paddingInlineStart") : null,
    paddingInlineEnd: ({ props }) => props.paddingInlineEnd ? getSpacingBasedOnRatio(props, "paddingInlineEnd") : null,
    paddingBlockStart: ({ props }) => props.paddingBlockStart ? getSpacingBasedOnRatio(props, "paddingBlockStart") : null,
    paddingBlockEnd: ({ props }) => props.paddingBlockEnd ? getSpacingBasedOnRatio(props, "paddingBlockEnd") : null,
    margin: ({ props }) => props.margin ? getSpacingBasedOnRatio(props, "margin") : null,
    marginInline: ({ props }) => {
      if (typeof props.marginInline !== "string")
        return;
      const [marginInlineStart, marginInlineEnd] = props.marginInline.split(" ");
      return {
        ...getSpacingByKey(marginInlineStart, "marginInlineStart"),
        ...getSpacingByKey(marginInlineEnd || marginInlineStart, "marginInlineEnd")
      };
    },
    marginBlock: ({ props }) => {
      if (typeof props.marginBlock !== "string")
        return;
      const [marginBlockStart, marginBlockEnd] = props.marginBlock.split(" ");
      return {
        ...getSpacingByKey(marginBlockStart, "marginBlockStart"),
        ...getSpacingByKey(marginBlockEnd || marginBlockStart, "marginBlockEnd")
      };
    },
    marginInlineStart: ({ props }) => props.marginInlineStart ? getSpacingBasedOnRatio(props, "marginInlineStart") : null,
    marginInlineEnd: ({ props }) => props.marginInlineEnd ? getSpacingBasedOnRatio(props, "marginInlineEnd") : null,
    marginBlockStart: ({ props }) => props.marginBlockStart ? getSpacingBasedOnRatio(props, "marginBlockStart") : null,
    marginBlockEnd: ({ props }) => props.marginBlockEnd ? getSpacingBasedOnRatio(props, "marginBlockEnd") : null,
    gap: ({ props }) => props.gap ? transfromGap(props.gap) : null,
    gridArea: ({ props }) => props.gridArea && { gridArea: props.gridArea },
    flex: ({ props }) => props.flex && { flex: props.flex },
    flexDirection: ({ props }) => props.flexDirection && { flexDirection: props.flexDirection },
    alignItems: ({ props }) => props.alignItems && { alignItems: props.alignItems },
    alignContent: ({ props }) => props.alignContent && { alignContent: props.alignContent },
    justifyContent: ({ props }) => props.justifyContent && { justifyContent: props.justifyContent },
    justifyItems: ({ props }) => props.justifyItems && { justifyItems: props.justifyItems },
    alignSelf: ({ props }) => props.alignSelf && { alignSelf: props.alignSelf },
    order: ({ props }) => props.order && { order: props.order },
    flexWrap: ({ props }) => props.flexWrap && {
      display: "flex",
      flexFlow: props.flexWrap
    },
    flexFlow: ({ props }) => props.flexFlow && {
      display: "flex",
      flexFlow: props.flexFlow
    },
    flexAlign: ({ props }) => {
      if (typeof props.flexAlign !== "string")
        return;
      const [alignItems, justifyContent] = props.flexAlign.split(" ");
      return {
        display: "flex",
        alignItems,
        justifyContent
      };
    },
    gridColumn: ({ props }) => props.gridColumn && { gridColumn: props.gridColumn },
    gridColumnStart: ({ props }) => props.columnStart ? { gridColumnStart: props.columnStart } : null,
    gridRow: ({ props }) => props.gridRow && { gridRow: props.gridRow },
    gridRowStart: ({ props }) => props.rowStart ? { gridRowStart: props.rowStart } : null,
    size: ({ props }) => {
      if (typeof props.heightRange !== "string")
        return;
      const [minHeight, maxHeight] = props.heightRange.split(" ");
      return {
        ...getSpacingByKey(minHeight, "minHeight"),
        ...getSpacingByKey(maxHeight || minHeight, "maxHeight")
      };
    },
    columns: ({ props }) => props.columns && { columns: props.columns }
  }
};
var Span = { tag: "span" };

// uikit/atoms/Direction.js
var Direction = {
  props: {
    direction: "ltr"
  },
  class: {
    direction: ({ props }) => ({ direction: props.direction })
  }
};

// uikit/atoms/Flex.js
var Flex = {
  props: {
    display: "flex"
  },
  class: {
    flow: ({ props }) => props.flow && { flexFlow: props.flow },
    wrap: ({ props }) => props.wrap && { flexWrap: props.wrap },
    align: ({ props }) => {
      if (typeof props.align !== "string")
        return;
      const [alignItems, justifyContent] = props.align.split(" ");
      return { alignItems, justifyContent };
    }
  }
};

// uikit/atoms/Grid.js
var Grid = {
  props: { display: "grid" },
  class: {
    area: ({ props }) => props.area ? { gridArea: props.area } : null,
    template: ({ props }) => props.template ? { gridTemplate: props.template } : null,
    templateAreas: ({ props }) => props.templateAreas ? { gridTemplateAreas: props.templateAreas } : null,
    column: ({ props }) => props.column ? { gridColumn: props.column } : null,
    columns: ({ props }) => props.columns ? { gridTemplateColumns: props.columns } : null,
    templateColumns: ({ props }) => props.templateColumns ? { gridTemplateColumns: props.templateColumns } : null,
    autoColumns: ({ props }) => props.autoColumns ? { gridAutoColumns: props.autoColumns } : null,
    columnStart: ({ props }) => props.columnStart ? { gridColumnStart: props.columnStart } : null,
    row: ({ props }) => props.row ? { gridRow: props.row } : null,
    rows: ({ props }) => props.rows ? { gridTemplateRows: props.rows } : null,
    templateRows: ({ props }) => props.templateRows ? { gridTemplateRows: props.templateRows } : null,
    autoRows: ({ props }) => props.autoRows ? { gridAutoRows: props.autoRows } : null,
    rowStart: ({ props }) => props.rowStart ? { gridRowStart: props.rowStart } : null,
    autoFlow: ({ props }) => props.autoFlow ? { gridAutoFlow: props.autoFlow } : null,
    columnGap: ({ props }) => props.columnGap ? getSpacingBasedOnRatio(props, "columnGap") : null,
    rowGap: ({ props }) => props.rowGap ? getSpacingBasedOnRatio(props, "rowGap") : null
  }
};

// uikit/atoms/Img.js
var Img = {
  tag: "img",
  props: {
    src: "",
    alt: "",
    title: ""
  },
  attr: {
    src: ({ props }) => props.src,
    alt: ({ props }) => props.alt,
    title: ({ props }) => props.title || props.alt
  }
};

// uikit/atoms/Form.js
var Form = {
  tag: "form",
  props: {},
  attr: {
    action: ({ props }) => props.action,
    method: ({ props }) => props.method,
    enctype: ({ props }) => props.enctype
  }
};

// uikit/atoms/Timing.js
var transformTransition = (transition) => {
  const arr = transition.split(" ");
  if (!arr.length)
    return transition;
  return arr.map((v) => {
    if (v.slice(0, 2) === "--")
      return `var(${v})`;
    if (v.length < 3 || v.includes("ms")) {
      const mapWithSequence = getTimingByKey(v);
      return mapWithSequence.timing || v;
    }
    if (getTimingFunction(v))
      return getTimingFunction(v);
    return v;
  }).join(" ");
};
var transformDuration = (duration, props, propertyName) => {
  if (!isString(duration))
    return;
  return duration.split(",").map((v) => getTimingByKey(v).timing || v).join(",");
};
var splitTransition = (transition) => {
  const arr = transition.split(",");
  if (!arr.length)
    return;
  return arr.map(transformTransition).join(",");
};
var Timing = {
  class: {
    transition: ({ props }) => props.transition && {
      transition: splitTransition(props.transition)
    },
    willChange: ({ props }) => props.willChange && {
      willChange: props.willChange
    },
    transitionDuration: ({ props }) => props.transitionDuration && {
      transitionDuration: transformDuration(props.transitionDuration)
    },
    transitionDelay: ({ props }) => props.transitionDelay && {
      transitionDelay: transformDuration(props.transitionDelay)
    },
    transitionTimingFunction: ({ props }) => props.transitionTimingFunction && {
      transitionTimingFunction: getTimingFunction(props.transitionTimingFunction)
    },
    transitionProperty: ({ props }) => props.transitionProperty && {
      transitionProperty: props.transitionProperty,
      willChange: props.transitionProperty
    }
  }
};

// uikit/atoms/Shape/style.js
var depth = {
  4: { boxShadow: `rgba(0,0,0,.10) 0 2${UNIT.default} 4${UNIT.default}` },
  6: { boxShadow: `rgba(0,0,0,.10) 0 3${UNIT.default} 6${UNIT.default}` },
  10: { boxShadow: `rgba(0,0,0,.10) 0 4${UNIT.default} 10${UNIT.default}` },
  16: { boxShadow: `rgba(0,0,0,.10) 0 8${UNIT.default} 16${UNIT.default}` },
  26: { boxShadow: `rgba(0,0,0,.10) 0 14${UNIT.default} 26${UNIT.default}` },
  42: { boxShadow: `rgba(0,0,0,.10) 0 20${UNIT.default} 42${UNIT.default}` }
};
var getComputedBackgroundColor = ({ props }) => {
  return getColor(props.borderColor) || getColor(props.backgroundColor) || getColor(props.background);
};
var inheritTransition = (el) => {
  const exec2 = Timing.class.transition(el);
  return exec2 && exec2["transition"];
};
var SHAPES = {
  rectangle: {},
  circle: { borderRadius: "100%" },
  bubble: {},
  tv: {
    borderRadius: "1.15em/2.5em"
  },
  tooltip: (el) => ({
    position: el.props.position || "relative",
    "&:before": {
      content: '""',
      display: "block",
      width: "0px",
      height: "0px",
      border: `.35em solid`,
      borderColor: getComputedBackgroundColor(el),
      transition: inheritTransition(el),
      transitionProperty: "border-color",
      position: "absolute",
      borderRadius: ".15em"
    }
  }),
  tooltipDirection: {
    top: {
      "&:before": {
        top: "0",
        left: "50%",
        transform: "translate(-50%, -50%) rotate(45deg)"
      }
    },
    right: {
      "&:before": {
        top: "50%",
        right: "0",
        transform: "translate(50%, -50%) rotate(45deg)"
      }
    },
    bottom: {
      "&:before": {
        bottom: "0",
        left: "50%",
        transform: "translate(-50%, 50%) rotate(45deg)"
      }
    },
    left: {
      "&:before": {
        top: "50%",
        left: "0",
        transform: "translate(-50%, -50%) rotate(45deg)"
      }
    }
  },
  tag: (el) => ({
    position: "relative",
    "&:before": {
      content: '""',
      display: "block",
      background: getComputedBackgroundColor(el),
      transition: inheritTransition(el),
      transitionProperty: "background",
      borderRadius: ".25em",
      position: "absolute",
      zIndex: "-1",
      aspectRatio: "1/1",
      top: "50%",
      transformOrigin: "50% 50%",
      height: "73%"
    }
  }),
  tagDirection: {
    top: {
      "&:before": {
        bottom: "100%",
        left: "50%",
        transform: "translate(-50%, 50%) rotate(45deg)"
      }
    },
    right: {
      "&:before": {
        top: "50%",
        left: "100%",
        transform: "translate(-50%, -50%) rotate(45deg)"
      }
    },
    bottom: {
      "&:before": {
        top: "100%",
        left: "50%",
        transform: "translate(-50%, -50%) rotate(45deg)"
      }
    },
    left: {
      "&:before": {
        top: "50%",
        right: "100%",
        transform: "translate(50%, -50%) rotate(45deg)"
      }
    }
  },
  hexagon: (el) => ({
    position: "relative",
    "&:before, &:after": {
      content: '""',
      display: "block",
      position: "absolute",
      zIndex: "-1",
      borderRadius: ".25em",
      aspectRatio: "1/1",
      top: "50%",
      transformOrigin: "50% 50%",
      height: "73%",
      background: getComputedBackgroundColor(el),
      transition: inheritTransition(el),
      transitionProperty: "background"
    },
    "&:before": {
      left: "0",
      transform: "translate3d(-50%, -50%, 1px) rotate(45deg)"
    },
    "&:after": {
      left: "100%",
      transform: "translate3d(-50%, -50%, 1px) rotate(45deg)"
    }
  }),
  chevron: (el) => ({
    position: "relative",
    // overflow: 'hidden',
    "&:before, &:after": {
      content: '""',
      display: "block",
      position: "absolute",
      zIndex: "-1",
      aspectRatio: "1/1",
      top: "50%",
      transformOrigin: "50% 50%",
      transition: inheritTransition(el),
      transitionProperty: "background"
    },
    "&:before": {
      background: `linear-gradient(225deg, ${getComputedBackgroundColor(el)} 25%, transparent 25%), linear-gradient(315deg, ${getComputedBackgroundColor(el)} 25%, transparent 25%)`
    },
    "&:after": {
      background: getComputedBackgroundColor(el),
      borderRadius: ".25em"
    }
  }),
  chevronDirection: {
    left: {
      "&:before": {
        height: "100%",
        left: "100%",
        transform: "translate3d(-1%, -50%, 1px) scale(-1, 1)"
      },
      "&:after": {
        height: "73%",
        left: "0",
        transform: "translate3d(-50%, -50%, 1px) rotate(45deg)"
      }
    },
    right: {
      "&:before": {
        height: "100%",
        left: "0",
        transform: "translate3d(-99%, -50%, 1px)"
      },
      "&:after": {
        height: "73%",
        left: "100%",
        transform: "translate3d(-50%, -50%, 1px) rotate(45deg)"
      }
    }
  }
};

// uikit/atoms/Theme.js
var isBorderStyle = (str) => ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset", "initial"].some((v) => str.includes(v));
var transformBorder = (border) => {
  const arr = border.split(", ");
  return arr.map((v) => {
    v = v.trim();
    if (v.slice(0, 2) === "--")
      return `var(${v})`;
    else if (isBorderStyle(v))
      return v || "solid";
    else if (v.slice(-2) === "px" || v.slice(-2) === "em")
      return v;
    else if (getColor(v).length > 2)
      return getColor(v);
    return getSpacingByKey(v, "border").border;
  }).join(" ");
};
var transformTextStroke = (stroke) => ({
  WebkitTextStroke: stroke.split(", ").map((v) => {
    if (v.slice(0, 2) === "--")
      return `var(${v})`;
    if (v.includes("px"))
      return v;
    else if (getColor(v))
      return getColor(v);
  }).join(" ")
});
var transformShadow = (shadows) => shadows.split("|").map((shadow) => {
  return shadow.split(", ").map((v) => {
    v = v.trim();
    if (v.slice(0, 2) === "--")
      return `var(${v})`;
    if (getColor(v).length > 2)
      return getColor(v);
    if (v.includes("px") || v.slice(-2) === "em")
      return v;
    const arr = v.split(" ");
    if (!arr.length)
      return v;
    return arr.map((v2) => getSpacingByKey(v2, "shadow").shadow).join(" ");
  }).join(" ");
}).join(",");
var transformBackgroundImage = (backgroundImage, ctx, globalTheme) => ({
  backgroundImage: backgroundImage.split(", ").map((v) => {
    if (v.slice(0, 2) === "--")
      return `var(${v})`;
    if (v.includes("url") || v.includes("gradient"))
      return v;
    else if (ctx.system.GRADIENT[backgroundImage]) {
      return getMediaColor(backgroundImage, "backgroundImage", globalTheme);
    }
    return `url(${v})`;
  }).join(" ")
});
var getSystemTheme = (element, state) => {
  const { context } = element;
  const rootState = element.__root ? element.__root.state : element.state;
  return rootState.globalTheme || context.system.globalTheme;
};
var Theme = {
  class: {
    depth: ({ props }) => depth[props.depth],
    theme: (element) => {
      const { props } = element;
      const globalTheme = getSystemTheme(element);
      if (!props.theme)
        return;
      return getMediaTheme(props.theme, `@${props.themeModifier || globalTheme}`);
    },
    color: (element) => {
      const { props } = element;
      const globalTheme = getSystemTheme(element);
      if (!props.color)
        return;
      return getMediaColor(props.color, "color", globalTheme);
    },
    background: (element) => {
      const { props } = element;
      const globalTheme = getSystemTheme(element);
      if (!props.background)
        return;
      return getMediaColor(props.background, "background", globalTheme);
    },
    backgroundColor: (element) => {
      const { props } = element;
      const globalTheme = getSystemTheme(element);
      if (!props.backgroundColor)
        return;
      return getMediaColor(props.backgroundColor, "backgroundColor", globalTheme);
    },
    backgroundImage: (element) => {
      const { props, context } = element;
      const globalTheme = getSystemTheme(element);
      if (!props.backgroundImage)
        return;
      return transformBackgroundImage(props.backgroundImage, context, globalTheme);
    },
    backgroundSize: ({ props }) => props.backgroundSize ? { backgroundSize: props.backgroundSize } : null,
    backgroundPosition: ({ props }) => props.backgroundPosition ? { backgroundPosition: props.backgroundPosition } : null,
    textStroke: ({ props }) => props.textStroke ? transformTextStroke(props.textStroke) : null,
    outline: ({ props }) => props.outline && {
      outline: transformBorder(props.outline)
    },
    border: ({ props }) => props.border && {
      border: transformBorder(props.border)
    },
    borderColor: ({ props }) => props.borderColor && getMediaColor(props.borderColor, "borderColor"),
    borderStyle: ({ props }) => props.borderStyle && { borderStyle: props.borderStyle },
    borderLeft: ({ props }) => props.borderLeft && {
      borderLeft: transformBorder(props.borderLeft)
    },
    borderTop: ({ props }) => props.borderTop && {
      borderTop: transformBorder(props.borderTop)
    },
    borderRight: ({ props }) => props.borderRight && {
      borderRight: transformBorder(props.borderRight)
    },
    borderBottom: ({ props }) => props.borderBottom && {
      borderBottom: transformBorder(props.borderBottom)
    },
    boxShadow: ({ props }) => props.boxShadow && {
      boxShadow: transformShadow(props.boxShadow)
    },
    textShadow: ({ props }) => props.textShadow && {
      textShadow: transformShadow(props.textShadow)
    },
    opacity: ({ props }) => props.opacity && { opacity: props.opacity },
    visibility: ({ props }) => props.visibility && { visibility: props.visibility }
  }
};

// uikit/atoms/Media.js
var keySetters = {
  "@": (key, props, result, element, isSubtree) => applyMediaProps(key, props, isSubtree ? result : result.media, element),
  ":": (key, props, result, element, isSubtree) => applySelectorProps(key, props, isSubtree ? result : result.selector, element),
  "[": (key, props, result, element, isSubtree) => applySelectorProps(key, props, isSubtree ? result : result.selector, element),
  "&": (key, props, result, element, isSubtree) => applySelectorProps(key, props, isSubtree ? result : result.selector, element),
  $: (key, props, result, element, isSubtree) => applyCaseProps(key, props, isSubtree ? result : result.case, element),
  ".": (key, props, result, element, isSubtree) => applyConditionalCaseProps(key, props, isSubtree ? result : result.case, element),
  "!": (key, props, result, element, isSubtree) => applyConditionalFalsyProps(key, props, isSubtree ? result : result.case, element)
};
var execClass = (key, props, result, element) => {
  const { class: className } = element;
  const classnameExec = className[key];
  if (typeof classnameExec !== "function")
    return;
  let classExec = classnameExec({
    props,
    context: element.context,
    state: element.state
  });
  if (isArray(classExec)) {
    classExec = classExec.reduce((a, c) => merge(a, c), {});
  }
  for (const finalProp in classExec) {
    result[finalProp] = classExec[finalProp];
  }
  return classExec;
};
var convertPropsToClass = (props, result, element) => {
  const propsClassObj = {};
  for (const key in props) {
    const setter = keySetters[key.slice(0, 1)];
    if (setter) {
      setter(key, props[key], propsClassObj, element, true);
      continue;
    } else {
      execClass(key, props, propsClassObj, element);
    }
  }
  return propsClassObj;
};
var applyMediaProps = (key, props, result, element) => {
  const { context } = element;
  if (!context.system || !context.system.MEDIA)
    return;
  const globalTheme = getSystemTheme(element);
  const { MEDIA: MEDIA2 } = context.system;
  const mediaName = MEDIA2[key.slice(1)];
  const generatedClass = convertPropsToClass(props, result, element);
  const name = key.slice(1);
  const isTheme = ["dark", "light"].includes(name);
  const matchesGlobal = name === globalTheme;
  if (globalTheme && isTheme) {
    if (matchesGlobal)
      return merge(result, generatedClass);
    return;
  }
  const mediaKey = `@media screen and ${mediaName}`;
  result[mediaKey] = generatedClass;
  return result[mediaKey];
};
var applySelectorProps = (key, props, result, element) => {
  const selectorKey = `&${key}`;
  result[selectorKey] = convertPropsToClass(props, result, element);
  return result[selectorKey];
};
var applyCaseProps = (key, props, result, element) => {
  const { CASES: CASES2 } = element.context && element.context.system;
  const caseKey = key.slice(1);
  const isPropTrue = element.props[caseKey];
  if (!CASES2[caseKey] && !isPropTrue)
    return;
  return merge(result, convertPropsToClass(props, result, element));
};
var applyConditionalCaseProps = (key, props, result, element) => {
  const caseKey = key.slice(1);
  const isPropTrue = element.props[caseKey] || element.state[caseKey] === true;
  if (!isPropTrue)
    return;
  return merge(result, convertPropsToClass(props, result, element));
};
var applyConditionalFalsyProps = (key, props, result, element) => {
  const caseKey = key.slice(1);
  const isPropTrue = element.props[caseKey] || element.state[caseKey] === true;
  if (!isPropTrue)
    return merge(result, convertPropsToClass(props, result, element));
};
var applyTrueProps = (props, result, element) => merge(result, convertPropsToClass(props, result, element));
var beforeClassAssign = (element, s) => {
  const { props, class: className } = element;
  const CLASS_NAMES = {
    media: {},
    selector: {},
    case: {}
  };
  for (const key in props) {
    const setter = keySetters[key.slice(0, 1)];
    if (setter)
      setter(key, props[key], CLASS_NAMES, element);
  }
  merge(className, CLASS_NAMES);
};
var initUpdate = (element) => {
  const { props, class: className } = element;
  const globalTheme = getSystemTheme(element);
  const parentProps = element.parent.props;
  if (parentProps && parentProps.spacingRatio && parentProps.inheritSpacingRatio) {
    element.setProps({
      spacingRatio: parentProps.spacingRatio,
      inheritSpacingRatio: true
    }, {
      preventRecursive: true,
      ignoreInitUpdate: true
    });
  }
  if (globalTheme) {
    const CLASS_NAMES = {
      media: {},
      selector: {},
      case: {}
    };
    for (const key in props) {
      const setter = keySetters[key.slice(0, 1)];
      if (key === "theme") {
        props.update({
          themeModifier: globalTheme
        }, { preventRecursive: true, ignoreInitUpdate: true, preventDefineUpdate: "$setStateCollection" });
      } else if (key === "true")
        applyTrueProps(props[key], CLASS_NAMES, element);
      if (setter)
        setter(key, props[key], CLASS_NAMES, element);
    }
    if (Object.keys(CLASS_NAMES.media).length) {
      className.media = CLASS_NAMES.media;
    }
    className.selector = CLASS_NAMES.selector;
    className.case = CLASS_NAMES.case;
  }
};
var Media = {
  on: { beforeClassAssign, initUpdate }
};

// uikit/atoms/Iframe.js
var Iframe = {
  tag: "iframe",
  props: {
    position: "relative",
    minWidth: "H",
    minHeight: "H"
  },
  attr: {
    src: ({ props }) => props.src,
    loading: ({ props }) => props.loading,
    allowfullscreen: ({ props }) => props.allowfullscreen,
    referrerpolicy: ({ props }) => props.referrerpolicy
  }
};

// uikit/atoms/Interaction.js
var Interaction = {
  class: {
    userSelect: ({ props }) => props.userSelect && { userSelect: props.userSelect },
    pointerEvents: ({ props }) => props.pointerEvents && { pointerEvents: props.pointerEvents },
    cursor: ({ props }) => props.cursor && { cursor: props.cursor }
  }
};

// uikit/atoms/InteractiveComponent.js
var style = {
  appearance: "none",
  border: "none",
  cursor: "pointer",
  fontFamily: "inherit"
};
var Hoverable = {
  props: {
    transition: "C defaultBezier",
    transitionProperty: "opacity, transform",
    opacity: 0.85,
    ":hover": {
      opacity: 0.9,
      transform: "scale(1.015)"
    },
    ":active": {
      opacity: 1,
      transform: "scale(1.015)"
    },
    ".active": {
      opacity: 1,
      transform: "scale(1.015)",
      ":hover": { opacity: 1 }
    }
  }
};
var Clickable = {
  extend: Hoverable,
  props: {
    ":active": {
      opacity: 1,
      transform: "scale(1.015)"
    },
    ".active": {
      opacity: 1
    }
  }
};
var Focusable = {
  props: {
    border: "none",
    outline: "solid, 0, blue .3",
    ":focus-visible": {
      opacity: 1,
      outline: "solid, X, blue .3"
    }
  },
  attr: {
    placeholder: ({ props }) => props.placeholder,
    tabIndex: ({ props }) => props.tabIndex
  }
};
var FocusableComponent = {
  extend: Focusable,
  tag: "button",
  props: {
    fontSize: "A",
    type: "button",
    border: "none",
    textDecoration: "none",
    lineHeight: "1",
    whiteSpace: "nowrap",
    fontFamily: "inherit",
    style
  },
  attr: {
    type: ({ props }) => props.type
  }
};

// uikit/atoms/Overflow.js
var Overflow = {
  class: {
    overflow: ({ props }) => props.overflow && { overflow: props.overflow }
  }
};

// uikit/atoms/Position.js
var Position = {
  props: {},
  class: {
    position: ({ props }) => props.position && { position: props.position },
    inset: ({ props }) => {
      const { inset } = props;
      if (typeof inset !== "string")
        return;
      return { inset: inset.split(" ").map((v) => getSpacingByKey(v, "k").k).join(" ") };
    },
    left: ({ props }) => getSpacingByKey(props.left, "left"),
    top: ({ props }) => getSpacingByKey(props.top, "top"),
    right: ({ props }) => getSpacingByKey(props.right, "right"),
    bottom: ({ props }) => getSpacingByKey(props.bottom, "bottom")
  }
};

// uikit/atoms/Picture.js
var Picture = {
  tag: "picture",
  childExtend: {
    tag: "source",
    attr: {
      media: (element) => {
        const { props, key, context } = element;
        const { MEDIA: MEDIA2 } = context.system;
        const globalTheme = getSystemTheme(element);
        const mediaName = (props.media || key).slice(1);
        if (mediaName === globalTheme)
          return "(min-width: 0px)";
        else if (mediaName === "dark" || mediaName === "light")
          return "(max-width: 0px)";
        return MEDIA2[mediaName];
      },
      srcset: ({ props }) => props.srcset
    }
  }
  // Img: ({ props }) => ({
  //   width: 'inherit',
  //   height: 'inherit',
  //   src: props.src
  // })
};

// uikit/atoms/Pseudo.js
var Pseudo = {
  class: {
    content: ({ props }) => props.content && { content: props.content }
  }
};

// uikit/atoms/SVG.js
var useSVGSymbol = (file) => `<use xlink:href="${file}" />`;
var SVG = {
  tag: "svg",
  props: {
    style: { "*": { fill: "currentColor" } }
  },
  attr: {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  },
  html: ({ key, props }) => useSVGSymbol(props.src)
};

// uikit/atoms/Shape/index.js
var transformBorderRadius = (radius, props, propertyName) => {
  if (!isString(radius))
    return;
  return {
    borderRadius: radius.split(" ").map((v, k) => getSpacingBasedOnRatio(props, propertyName, v)[propertyName]).join(" ")
  };
};
var Shape = {
  extend: Pseudo,
  class: {
    shape: (element) => {
      const { props } = element;
      const { shape } = props;
      return shape ? exec(SHAPES[shape], element) : null;
    },
    shapeDirection: ({ props }) => {
      const { shape, shapeDirection } = props;
      if (!shape || !shapeDirection)
        return;
      const shapeDir = SHAPES[shape + "Direction"];
      return shape && shapeDir ? shapeDir[shapeDirection || "left"] : null;
    },
    shapeDirectionColor: (el) => {
      const { props } = el;
      const { background, backgroundColor } = props;
      const borderColor = getMediaColor(background || backgroundColor, "borderColor");
      return props.shapeDirection ? borderColor : null;
    },
    round: ({ props, key, ...el }) => transformBorderRadius(props.round || props.borderRadius, props, "round"),
    borderRadius: ({ props, key, ...el }) => transformBorderRadius(props.borderRadius || props.round, props, "borderRadius")
  }
};

// uikit/atoms/Text.js
var Text = {
  text: ({ key, props, state }) => {
    if (props.text === true)
      return state && state[key] || props && props[key];
    return props.text;
  },
  class: {
    fontSize: ({ props }) => props.fontSize ? getFontSizeByKey(props.fontSize) : null,
    fontFamily: ({ props }) => props.fontFamily && { fontFamily: getFontFamily(props.fontFamily) || props.fontFamily },
    lineHeight: ({ props }) => props.lineHeight && { lineHeight: props.lineHeight },
    // lineHeight: ({ props }) => props.lineHeight && getSpacingBasedOnRatio(props, 'lineHeight', null, ''),
    textDecoration: ({ props }) => props.textDecoration && { textDecoration: props.textDecoration },
    textTransform: ({ props }) => props.textTransform && { textTransform: props.textTransform },
    whiteSpace: ({ props }) => props.whiteSpace && { whiteSpace: props.whiteSpace },
    letterSpacing: ({ props }) => props.letterSpacing && { letterSpacing: props.letterSpacing },
    textAlign: ({ props }) => props.textAlign && { textAlign: props.textAlign },
    fontWeight: ({ props }) => props.fontWeight && {
      fontWeight: props.fontWeight,
      fontVariationSettings: '"wght" ' + props.fontWeight
    }
  }
};
var H1 = { tag: "h1" };
var H2 = { tag: "h2" };
var H3 = { tag: "h3" };
var H4 = { tag: "h4" };
var H5 = { tag: "h5" };
var H6 = { tag: "h6" };
var P = { tag: "p" };
var Caption = { tag: "caption" };
var Strong = {
  tag: "strong",
  props: { fontWeight: "700" }
};
var Underline = { tag: "u" };
var Italic = { tag: "i" };

// uikit/atoms/Transform.js
var Transform = {
  class: {
    transform: ({ props }) => props.transform && { transform: props.transform },
    transformOrigin: ({ props }) => props.transformOrigin && { transformOrigin: props.transformOrigin }
  }
};

// uikit/atoms/XYZ.js
var XYZ = {
  class: {
    zIndex: ({ props }) => props.zIndex && { zIndex: props.zIndex }
  }
};

// node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js
function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  }
}
function createStyleElement(options) {
  var tag = document.createElement("style");
  tag.setAttribute("data-emotion", options.key);
  if (options.nonce !== void 0) {
    tag.setAttribute("nonce", options.nonce);
  }
  tag.appendChild(document.createTextNode(""));
  tag.setAttribute("data-s", "");
  return tag;
}
var StyleSheet = /* @__PURE__ */ function() {
  function StyleSheet2(options) {
    var _this = this;
    this._insertTag = function(tag) {
      var before;
      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options.speedy === void 0 ? false : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce;
    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }
  var _proto = StyleSheet2.prototype;
  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag = this.tags[this.tags.length - 1];
    if (true) {
      var isImportRule3 = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;
      if (isImportRule3 && this._alreadyInsertedOrderInsensitiveRule) {
        console.error("You're attempting to insert the following rule:\n" + rule + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.");
      }
      this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule3;
    }
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (!/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(rule)) {
          console.error('There was a problem inserting the following rule: "' + rule + '"', e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function(tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
    if (true) {
      this._alreadyInsertedOrderInsensitiveRule = false;
    }
  };
  return StyleSheet2;
}();

// node_modules/stylis/src/Enum.js
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";

// node_modules/stylis/src/Utility.js
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length2) {
  return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search) {
  return value.indexOf(search);
}
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join("");
}

// node_modules/stylis/src/Tokenizer.js
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type, props, children, length2) {
  return { value, root, parent, type, props, children, line, column, length: length2, return: "" };
}
function copy(root, props) {
  return assign(node("", null, null, "", null, null, 0), root, { length: -root.length }, props);
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index) {
  while (!token(peek()))
    next();
  return slice(index, position);
}

// node_modules/stylis/src/Parser.js
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
            ampersand = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset:
            if (property > 0 && strlen(characters2) - length2)
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append(reference = ruleset(characters2, root, parent, index, offset, rules, points, type, props = [], children = [], length2), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
              else
                switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                  case 100:
                  case 109:
                  case 115:
                    parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                }
        }
        index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length2) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i = 0, j = 0, k = 0; i < index; ++i)
    for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
      if (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x])))
        props[k++] = z;
  return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2);
}
function comment(value, root, parent) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
function declaration(value, root, parent, length2) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
}

// node_modules/stylis/src/Serializer.js
function serialize(children, callback) {
  var output = "";
  var length2 = sizeof(children);
  for (var i = 0; i < length2; i++)
    output += callback(children[i], i, children, callback) || "";
  return output;
}
function stringify(element, index, children, callback) {
  switch (element.type) {
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      element.value = element.props.join(",");
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}

// node_modules/stylis/src/Middleware.js
function middleware(collection) {
  var length2 = sizeof(collection);
  return function(element, index, children, callback) {
    var output = "";
    for (var i = 0; i < length2; i++)
      output += collection[i](element, index, children, callback) || "";
    return output;
  };
}

// node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn(arg);
    return cache[arg];
  };
}
var emotion_memoize_esm_default = memoize;

// node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js
var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index) {
  var previous = 0;
  var character2 = 0;
  while (true) {
    previous = character2;
    character2 = peek();
    if (previous === 38 && character2 === 12) {
      points[index] = 1;
    }
    if (token(character2)) {
      break;
    }
    next();
  }
  return slice(begin, position);
};
var toRules = function toRules2(parsed, points) {
  var index = -1;
  var character2 = 44;
  do {
    switch (token(character2)) {
      case 0:
        if (character2 === 38 && peek() === 12) {
          points[index] = 1;
        }
        parsed[index] += identifierWithPointTracking(position - 1, points, index);
        break;
      case 2:
        parsed[index] += delimit(character2);
        break;
      case 4:
        if (character2 === 44) {
          parsed[++index] = peek() === 58 ? "&\f" : "";
          points[index] = parsed[index].length;
          break;
        }
      default:
        parsed[index] += from(character2);
    }
  } while (character2 = next());
  return parsed;
};
var getRules = function getRules2(value, points) {
  return dealloc(toRules(alloc(value), points));
};
var fixedElements = /* @__PURE__ */ new WeakMap();
var compat = function compat2(element) {
  if (element.type !== "rule" || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }
  var value = element.value, parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== "rule") {
    parent = parent.parent;
    if (!parent)
      return;
  }
  if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
    return;
  }
  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;
  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel2(element) {
  if (element.type === "decl") {
    var value = element.value;
    if (
      // charcode for l
      value.charCodeAt(0) === 108 && // charcode for b
      value.charCodeAt(2) === 98
    ) {
      element["return"] = "";
      element.value = "";
    }
  }
};
var ignoreFlag = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason";
var isIgnoringComment = function isIgnoringComment2(element) {
  return element.type === "comm" && element.children.indexOf(ignoreFlag) > -1;
};
var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm2(cache) {
  return function(element, index, children) {
    if (element.type !== "rule" || cache.compat)
      return;
    var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);
    if (unsafePseudoClasses) {
      var isNested = element.parent === children[0];
      var commentContainer = isNested ? children[0].children : (
        // global rule at the root level
        children
      );
      for (var i = commentContainer.length - 1; i >= 0; i--) {
        var node2 = commentContainer[i];
        if (node2.line < element.line) {
          break;
        }
        if (node2.column < element.column) {
          if (isIgnoringComment(node2)) {
            return;
          }
          break;
        }
      }
      unsafePseudoClasses.forEach(function(unsafePseudoClass) {
        console.error('The pseudo class "' + unsafePseudoClass + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + unsafePseudoClass.split("-child")[0] + '-of-type".');
      });
    }
  };
};
var isImportRule = function isImportRule2(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};
var isPrependedWithRegularRules = function isPrependedWithRegularRules2(index, children) {
  for (var i = index - 1; i >= 0; i--) {
    if (!isImportRule(children[i])) {
      return true;
    }
  }
  return false;
};
var nullifyElement = function nullifyElement2(element) {
  element.type = "";
  element.value = "";
  element["return"] = "";
  element.children = "";
  element.props = "";
};
var incorrectImportAlarm = function incorrectImportAlarm2(element, index, children) {
  if (!isImportRule(element)) {
    return;
  }
  if (element.parent) {
    console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
    nullifyElement(element);
  } else if (isPrependedWithRegularRules(index, children)) {
    console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
    nullifyElement(element);
  }
};
function prefix(value, length2) {
  switch (hash(value, length2)) {
    case 5103:
      return WEBKIT + "print-" + value + value;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
    case 5443:
      return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
    case 4675:
      return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
    case 5548:
      return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
    case 5292:
      return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
    case 6060:
      return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value) - 1 - length2 > 6)
        switch (charat(value, length2 + 1)) {
          case 109:
            if (charat(value, length2 + 4) !== 45)
              break;
          case 102:
            return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
          case 115:
            return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length2) + value : value;
        }
      break;
    case 4949:
      if (charat(value, length2 + 1) !== 115)
        break;
    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
        case 107:
          return replace(value, ":", ":" + WEBKIT) + value;
        case 101:
          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
      }
      break;
    case 5936:
      switch (charat(value, length2 + 11)) {
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
      return WEBKIT + value + MS + value + value;
  }
  return value;
}
var prefixer = function prefixer2(element, index, children, callback) {
  if (element.length > -1) {
    if (!element["return"])
      switch (element.type) {
        case DECLARATION:
          element["return"] = prefix(element.value, element.length);
          break;
        case KEYFRAMES:
          return serialize([copy(element, {
            value: replace(element.value, "@", "@" + WEBKIT)
          })], callback);
        case RULESET:
          if (element.length)
            return combine(element.props, function(value) {
              switch (match(value, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return serialize([copy(element, {
                    props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")]
                  })], callback);
                case "::placeholder":
                  return serialize([copy(element, {
                    props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")]
                  }), copy(element, {
                    props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")]
                  }), copy(element, {
                    props: [replace(value, /:(plac\w+)/, MS + "input-$1")]
                  })], callback);
              }
              return "";
            });
      }
  }
};
var defaultStylisPlugins = [prefixer];
var createCache = function createCache2(options) {
  var key = options.key;
  if (!key) {
    throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\nIf multiple caches share the same key they might \"fight\" for each other's style elements.");
  }
  if (key === "css") {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(ssrStyles, function(node2) {
      var dataEmotionAttribute = node2.getAttribute("data-emotion");
      if (dataEmotionAttribute.indexOf(" ") === -1) {
        return;
      }
      document.head.appendChild(node2);
      node2.setAttribute("data-s", "");
    });
  }
  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
  if (true) {
    if (/[^a-z-]/.test(key)) {
      throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + key + '" was passed');
    }
  }
  var inserted = {};
  var container;
  var nodesToHydrate = [];
  {
    container = options.container || document.head;
    Array.prototype.forEach.call(
      // this means we will ignore elements which don't have a space in them which
      // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
      document.querySelectorAll('style[data-emotion^="' + key + ' "]'),
      function(node2) {
        var attrib = node2.getAttribute("data-emotion").split(" ");
        for (var i = 1; i < attrib.length; i++) {
          inserted[attrib[i]] = true;
        }
        nodesToHydrate.push(node2);
      }
    );
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  if (true) {
    omnipresentPlugins.push(createUnsafeSelectorsAlarm({
      get compat() {
        return cache.compat;
      }
    }), incorrectImportAlarm);
  }
  {
    var currentSheet;
    var finalizingPlugins = [stringify, true ? function(element) {
      if (!element.root) {
        if (element["return"]) {
          currentSheet.insert(element["return"]);
        } else if (element.value && element.type !== COMMENT) {
          currentSheet.insert(element.value + "{}");
        }
      }
    } : rulesheet(function(rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis2(styles) {
      return serialize(compile(styles), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      if (serialized.map !== void 0) {
        currentSheet = {
          insert: function insert2(rule) {
            sheet.insert(rule + serialized.map);
          }
        };
      }
      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }
  var cache = {
    key,
    sheet: new StyleSheet({
      key,
      container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};
var emotion_cache_browser_esm_default = createCache;

// node_modules/@emotion/hash/dist/emotion-hash.esm.js
function murmur2(str) {
  var h = 0;
  var k, i = 0, len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
    k = /* Math.imul(k, m): */
    (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
    k ^= /* k >>> r: */
    k >>> 24;
    h = /* Math.imul(k, m): */
    (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 255;
      h = /* Math.imul(h, m): */
      (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  }
  h ^= h >>> 13;
  h = /* Math.imul(h, m): */
  (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}
var emotion_hash_esm_default = murmur2;

// node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var emotion_unitless_esm_default = unitlessKeys;

// node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js
var ILLEGAL_ESCAPE_SEQUENCE_ERROR = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`;
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty2(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue2(value) {
  return value != null && typeof value !== "boolean";
};
var processStyleName = /* @__PURE__ */ emotion_memoize_esm_default(function(styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue2(key, value) {
  switch (key) {
    case "animation":
    case "animationName": {
      if (typeof value === "string") {
        return value.replace(animationRegex, function(match2, p1, p2) {
          cursor = {
            name: p1,
            styles: p2,
            next: cursor
          };
          return p1;
        });
      }
    }
  }
  if (emotion_unitless_esm_default[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
    return value + "px";
  }
  return value;
};
if (true) {
  contentValuePattern = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
  contentValues = ["normal", "none", "initial", "inherit", "unset"];
  oldProcessStyleValue = processStyleValue;
  msPattern = /^-ms-/;
  hyphenPattern = /-(.)/g;
  hyphenatedCache = {};
  processStyleValue = function processStyleValue3(key, value) {
    if (key === "content") {
      if (typeof value !== "string" || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }
    var processed = oldProcessStyleValue(key, value);
    if (processed !== "" && !isCustomProperty(key) && key.indexOf("-") !== -1 && hyphenatedCache[key] === void 0) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, "ms-").replace(hyphenPattern, function(str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }
    return processed;
  };
}
var contentValuePattern;
var contentValues;
var oldProcessStyleValue;
var msPattern;
var hyphenPattern;
var hyphenatedCache;
var noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return "";
  }
  if (interpolation.__emotion_styles !== void 0) {
    if (interpolation.toString() === "NO_COMPONENT_SELECTOR") {
      throw new Error(noComponentSelectorMessage);
    }
    return interpolation;
  }
  switch (typeof interpolation) {
    case "boolean": {
      return "";
    }
    case "object": {
      if (interpolation.anim === 1) {
        cursor = {
          name: interpolation.name,
          styles: interpolation.styles,
          next: cursor
        };
        return interpolation.name;
      }
      if (interpolation.styles !== void 0) {
        var next2 = interpolation.next;
        if (next2 !== void 0) {
          while (next2 !== void 0) {
            cursor = {
              name: next2.name,
              styles: next2.styles,
              next: cursor
            };
            next2 = next2.next;
          }
        }
        var styles = interpolation.styles + ";";
        if (interpolation.map !== void 0) {
          styles += interpolation.map;
        }
        return styles;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor;
        var result = interpolation(mergedProps);
        cursor = previousCursor;
        return handleInterpolation(mergedProps, registered, result);
      } else if (true) {
        console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      }
      break;
    }
    case "string":
      if (true) {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function(match2, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, "") + "`");
          return "${" + fakeVarName + "}";
        });
        if (matched.length) {
          console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(matched, ["`" + replaced + "`"]).join("\n") + "\n\nYou should wrap it with `css` like this:\n\n" + ("css`" + replaced + "`"));
        }
      }
      break;
  }
  if (registered == null) {
    return interpolation;
  }
  var cached = registered[interpolation];
  return cached !== void 0 ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = "";
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];
      if (typeof value !== "object") {
        if (registered != null && registered[value] !== void 0) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === "NO_COMPONENT_SELECTOR" && true) {
          throw new Error(noComponentSelectorMessage);
        }
        if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (_key) {
            case "animation":
            case "animationName": {
              string += processStyleName(_key) + ":" + interpolated + ";";
              break;
            }
            default: {
              if (_key === "undefined") {
                console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
              }
              string += _key + "{" + interpolated + "}";
            }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var sourceMapPattern;
if (true) {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
}
var cursor;
var serializeStyles = function serializeStyles2(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
    return args[0];
  }
  var stringMode = true;
  var styles = "";
  cursor = void 0;
  var strings = args[0];
  if (strings == null || strings.raw === void 0) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    if (strings[0] === void 0) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }
    styles += strings[0];
  }
  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);
    if (stringMode) {
      if (strings[i] === void 0) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }
      styles += strings[i];
    }
  }
  var sourceMap;
  if (true) {
    styles = styles.replace(sourceMapPattern, function(match3) {
      sourceMap = match3;
      return "";
    });
  }
  labelPattern.lastIndex = 0;
  var identifierName = "";
  var match2;
  while ((match2 = labelPattern.exec(styles)) !== null) {
    identifierName += "-" + // $FlowFixMe we know it's not null
    match2[1];
  }
  var name = emotion_hash_esm_default(styles) + identifierName;
  if (true) {
    return {
      name,
      styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }
  return {
    name,
    styles,
    next: cursor
  };
};

// node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
var isBrowser = true;
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = "";
  classNames.split(" ").forEach(function(className) {
    if (registered[className] !== void 0) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles2(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;
  if (
    // we only need to add the styles to the registered cache if the
    // class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (isStringTag === false || // we need to always store it if we're in compat mode and
    // in node since emotion-server relies on whether a style is in
    // the registered cache to know whether a style is global or not
    // also, note that this check will be dead code eliminated in the browser
    isBrowser === false) && cache.registered[className] === void 0
  ) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles2(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;
  if (cache.inserted[serialized.name] === void 0) {
    var current = serialized;
    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
      current = current.next;
    } while (current !== void 0);
  }
};

// node_modules/@emotion/css/create-instance/dist/emotion-css-create-instance.esm.js
function insertWithoutScoping(cache, serialized) {
  if (cache.inserted[serialized.name] === void 0) {
    return cache.insert("", serialized, cache.sheet, true);
  }
}
function merge3(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);
  if (registeredStyles.length < 2) {
    return className;
  }
  return rawClassName + css(registeredStyles);
}
var createEmotion = function createEmotion2(options) {
  var cache = emotion_cache_browser_esm_default(options);
  cache.sheet.speedy = function(value) {
    if (this.ctr !== 0) {
      throw new Error("speedy must be changed before any rules are inserted");
    }
    this.isSpeedy = value;
  };
  cache.compat = true;
  var css = function css2() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var serialized = serializeStyles(args, cache.registered, void 0);
    insertStyles(cache, serialized, false);
    return cache.key + "-" + serialized.name;
  };
  var keyframes2 = function keyframes3() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    var serialized = serializeStyles(args, cache.registered);
    var animation = "animation-" + serialized.name;
    insertWithoutScoping(cache, {
      name: serialized.name,
      styles: "@keyframes " + animation + "{" + serialized.styles + "}"
    });
    return animation;
  };
  var injectGlobal = function injectGlobal2() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    var serialized = serializeStyles(args, cache.registered);
    insertWithoutScoping(cache, serialized);
  };
  var cx = function cx2() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    return merge3(cache.registered, css, classnames(args));
  };
  return {
    css,
    cx,
    injectGlobal,
    keyframes: keyframes2,
    hydrate: function hydrate(ids) {
      ids.forEach(function(key) {
        cache.inserted[key] = true;
      });
    },
    flush: function flush() {
      cache.registered = {};
      cache.inserted = {};
      cache.sheet.flush();
    },
    // $FlowFixMe
    sheet: cache.sheet,
    cache,
    getRegisteredStyles: getRegisteredStyles.bind(null, cache.registered),
    merge: merge3.bind(null, cache.registered, css)
  };
};
var classnames = function classnames2(args) {
  var cls = "";
  for (var i = 0; i < args.length; i++) {
    var arg = args[i];
    if (arg == null)
      continue;
    var toAdd = void 0;
    switch (typeof arg) {
      case "boolean":
        break;
      case "object": {
        if (Array.isArray(arg)) {
          toAdd = classnames2(arg);
        } else {
          toAdd = "";
          for (var k in arg) {
            if (arg[k] && k) {
              toAdd && (toAdd += " ");
              toAdd += k;
            }
          }
        }
        break;
      }
      default: {
        toAdd = arg;
      }
    }
    if (toAdd) {
      cls && (cls += " ");
      cls += toAdd;
    }
  }
  return cls;
};
var emotion_css_create_instance_esm_default = createEmotion;

// node_modules/@symbo.ls/create-emotion/index.js
var createEmotion3 = (key = "smbls", container) => {
  return emotion_css_create_instance_esm_default({ key });
};
var emotion = createEmotion3();

// uikit/atoms/Animation.js
var { keyframes } = emotion;
var applyAnimationProps = (animation, element) => {
  if (isObject(animation))
    return { animationName: keyframes(animation) };
  const { ANIMATION: ANIMATION2 } = element.context && element.context.system;
  const record = ANIMATION2[animation];
  return keyframes(record);
};
var Animation = {
  class: {
    animation: (el) => el.props.animation && {
      animationName: applyAnimationProps(el.props.animation, el),
      animationDuration: getTimingByKey(el.props.animationDuration || "A").timing,
      animationDelay: getTimingByKey(el.props.animationDelay || "0s").timing,
      animationTimingFunction: getTimingFunction(el.props.animationTimingFunction || "ease"),
      animationFillMode: el.props.animationFillMode || "both",
      animationPlayState: el.props.animationPlayState,
      animationDirection: el.props.animationDirection
    },
    animationName: (el) => el.props.animationName && {
      animationName: applyAnimationProps(el.props.animationName, el)
    },
    animationDuration: ({ props }) => props.animationDuration && {
      animationDuration: getTimingByKey(props.animationDuration).timing
    },
    animationDelay: ({ props }) => props.animationDelay && {
      animationDelay: getTimingByKey(props.animationDelay).timing
    },
    animationTimingFunction: ({ props }) => props.animationTimingFunction && {
      animationTimingFunction: getTimingFunction(props.animationTimingFunction)
    },
    animationFillMode: ({ props }) => props.animationFillMode && {
      animationFillMode: props.animationFillMode
    },
    animationPlayState: ({ props }) => props.animationPlayState && {
      animationPlayState: props.animationPlayState
    },
    animationIterationCount: ({ props }) => props.animationIterationCount && {
      animationIterationCount: props.animationIterationCount || 1
    },
    animationDirection: ({ props }) => props.animationDirection && {
      animationDirection: props.animationDirection
    }
  }
};
