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

// uikit/box/index.js
var box_exports = {};
__export(box_exports, {
  Box: () => Box
});
module.exports = __toCommonJS(box_exports);

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

// node_modules/@symbo.ls/scratch/src/system/theme.js
var setThemeValue = (theme) => {
  const value = {};
  const { state, media, helpers, ...rest } = theme;
  const keys = Object.keys(rest);
  keys.map((key) => {
    const conditions = ["color", "Color", "background", "border"];
    const isColor = conditions.some((k) => key.includes(k));
    return value[key] = isColor ? getColor(theme[key]) : theme[key];
  });
  return value;
};
var getThemeValue = (theme) => {
  if (theme.value)
    return theme.value;
  theme.value = setThemeValue(theme);
  return theme.value;
};
var getTheme = (value, modifier) => {
  const CONFIG2 = getActiveConfig();
  if (CONFIG2.useVariable)
    return getMediaTheme(value, modifier);
  const { THEME: THEME2 } = CONFIG2;
  if (isString(value)) {
    const [theme, subtheme] = value.split(" ");
    const isOurTheme = THEME2[theme];
    if (isOurTheme) {
      if (!subtheme && !modifier)
        return getThemeValue(isOurTheme);
      value = [theme, subtheme || modifier];
    }
  }
  if (isObjectLike(value) && value[1]) {
    const themeName = value[0];
    const subThemeName = value[1];
    const { helpers, media, state } = THEME2[themeName];
    if (media && media[subThemeName])
      return getThemeValue(media[subThemeName]);
    if (helpers && helpers[subThemeName])
      return getThemeValue(helpers[subThemeName]);
    if (state && state[subThemeName])
      return getThemeValue(state[subThemeName]);
  } else if (isObject(value))
    return setThemeValue(value);
};
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
var SHAPES = {
  rectangle: {},
  circle: { borderRadius: "100%" },
  bubble: {},
  tooltip: ({ props }) => ({
    position: "relative",
    "&:before": {
      content: '""',
      display: "block",
      width: "0px",
      height: "0px",
      border: `6px solid ${getColor(props.background) || props.theme && getTheme(props.theme).backgroundColor}`,
      position: "absolute",
      borderRadius: "2px"
    }
  }),
  tooltipDirection: {
    top: {
      "&:before": {
        top: "2px",
        left: "50%",
        transform: "translate(-50%, -50%) rotate(45deg)"
      }
    },
    right: {
      "&:before": {
        top: "50%",
        right: "-10px",
        transform: "translate(-50%, -50%) rotate(45deg)"
      }
    },
    bottom: {
      "&:before": {
        bottom: "-10px",
        left: "50%",
        transform: "translate(-50%, -50%) rotate(45deg)"
      }
    },
    left: {
      "&:before": {
        top: "50%",
        left: "2px",
        transform: "translate(-50%, -50%) rotate(45deg)"
      }
    }
  },
  tag: ({ props }) => ({
    position: "relative",
    "&:before": {
      content: '""',
      display: "block",
      width: "0",
      height: "0",
      border: `16px solid ${getColor(props.background) || props.theme && getTheme(props.theme).backgroundColor}`,
      borderRadius: "6px",
      position: "absolute"
    }
  }),
  tagDirection: {
    top: {
      "&:before": {
        bottom: "100%",
        left: "50%",
        transform: "translate(-50%, 60%) rotate(45deg)"
      }
    },
    right: {
      "&:before": {
        top: "50%",
        left: "100%",
        transform: "translate(-60%, -50%) rotate(45deg)"
      }
    },
    bottom: {
      "&:before": {
        top: "100%",
        left: "50%",
        transform: "translate(-50%, -60%) rotate(45deg)"
      }
    },
    left: {
      "&:before": {
        top: "50%",
        right: "100%",
        transform: "translate(60%, -50%) rotate(45deg)"
      }
    }
  }
};

// node_modules/@symbo.ls/shape/index.js
var Shape = {
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
      return shape ? shapeDir[shapeDirection || "top"] : null;
    },
    shapeDirectionColor: ({ props, ...el }) => props.shapeDirection ? { "&:before": { borderColor: el.class.backgroundColor } } : null
  }
};

// uikit/position/index.js
var Position = {
  props: {},
  class: {
    position: ({ props }) => props.position && { position: props.position },
    inset: ({ props }) => {
      const { inset } = props;
      if (typeof inset !== "string")
        return;
      return { inset: inset.split(" ").map((v) => getSpacingBasedOnRatio(v, "k").k).join(" ") };
    },
    left: ({ props }) => getSpacingBasedOnRatio(props.left, "left"),
    top: ({ props }) => getSpacingBasedOnRatio(props.top, "top"),
    right: ({ props }) => getSpacingBasedOnRatio(props.right, "right"),
    bottom: ({ props }) => getSpacingBasedOnRatio(props.bottom, "bottom")
  }
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

// node_modules/@symbo.ls/theme/index.js
var isBorderStyle = (str) => ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset", "initial"].some((v) => str.includes(v));
var diffBorder = (border, key = "border") => {
  const obj = {};
  const arr = isObject(border) ? Object.values(border) : isArray(border) ? border : border.split(", ");
  arr.map((v) => {
    if (v.includes("px"))
      obj[`${key}Width`] = v;
    else if (isBorderStyle(v))
      obj[`${key}Style`] = v || "solid";
    else if (getColor(v))
      obj[`${key}Color`] = getColor(v);
  });
  return obj;
};
var diffStroke = (stroke) => {
  const WebkitTextStroke = stroke.split(", ").map((v) => {
    if (v.includes("px"))
      return v;
    else if (getColor(v))
      return getColor(v);
  }).join(" ");
  return { WebkitTextStroke };
};
var Theme = {
  class: {
    depth: ({ props }) => depth2[props.depth],
    round: ({ props, key, ...el }) => props.round ? getSpacingBasedOnRatio(props.round, "borderRadius") || { borderRadius: props.round } : null,
    borderRadius: ({ props, key, ...el }) => props.borderRadius ? getSpacingBasedOnRatio(props.borderRadius, "borderRadius") || { borderRadius: props.borderRadius } : null,
    theme: ({ props, key }) => {
      if (!props.theme)
        return;
      return getTheme(props.theme, props.themeModifier);
    },
    color: ({ props }) => props.color ? { color: getColor(props.color) } : null,
    background: ({ props }) => props.background ? { backgroundColor: getColor(props.background) } : null,
    textStroke: ({ props }) => props.textStroke ? diffStroke(props.textStroke) : null,
    border: ({ props }) => props.border ? diffBorder(props.border) : null,
    borderColor: ({ props }) => props.borderColor ? { borderColor: getColor(props.borderColor) } : null,
    borderStyle: ({ props }) => props.borderStyle && { borderStyle: props.borderStyle },
    borderLeft: ({ props }) => props.borderLeft ? diffBorder(props.borderLeft, "borderLeft") : null,
    borderTop: ({ props }) => props.borderTop ? diffBorder(props.borderTop, "borderTop") : null,
    borderRight: ({ props }) => props.borderRight ? diffBorder(props.borderRight, "borderRight") : null,
    borderBottom: ({ props }) => props.borderBottom ? diffBorder(props.borderBottom, "borderBottom") : null,
    opacity: ({ props }) => props.opacity && { opacity: props.opacity },
    visibility: ({ props }) => props.visibility && { visibility: props.visibility }
  }
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
var Block = {
  class: {
    boxSizing: ({ props }) => props.boxSizing ? { display: props.boxSizing } : {
      boxSizing: "border-box"
    },
    display: ({ props }) => props.display && { display: props.display },
    hide: ({ props }) => props.hide && { display: "none" },
    width: ({ props }) => props.width && mapBasedOnRatio(props, "width"),
    height: ({ props }) => props.height && mapBasedOnRatio(props, "height"),
    boxSize: ({ props }) => {
      if (typeof props.boxSize !== "string")
        return;
      const [height, width] = props.boxSize.split(" ");
      return {
        ...getSpacingBasedOnRatio(height, "height"),
        ...getSpacingBasedOnRatio(width, "width")
      };
    },
    maxWidth: ({ props }) => props.maxWidth && mapBasedOnRatio(props, "maxWidth"),
    minWidth: ({ props }) => props.minWidth && mapBasedOnRatio(props, "minWidth"),
    widthRange: ({ props }) => {
      if (typeof props.widthRange !== "string")
        return;
      const [minWidth, maxWidth] = props.widthRange.split(" ");
      return {
        ...getSpacingBasedOnRatio(minWidth, "minWidth"),
        ...getSpacingBasedOnRatio(maxWidth, "maxWidth")
      };
    },
    maxHeight: ({ props }) => props.maxHeight && mapBasedOnRatio(props, "maxHeight"),
    minHeight: ({ props }) => props.minHeight && mapBasedOnRatio(props, "minHeight"),
    heightRange: ({ props }) => {
      if (typeof props.heightRange !== "string")
        return;
      const [minHeight, maxHeight] = props.heightRange.split(" ");
      return {
        ...getSpacingBasedOnRatio(minHeight, "minHeight"),
        ...getSpacingBasedOnRatio(maxHeight, "maxHeight")
      };
    },
    aspectRatio: ({ props }) => props.aspectRatio && { aspectRatio: props.aspectRatio },
    borderWidth: ({ props }) => props.borderWidth ? mapBasedOnRatio(props, "borderWidth") : null,
    padding: ({ props }) => props.padding ? mapBasedOnRatio(props, "padding") : null,
    margin: ({ props }) => props.margin ? mapBasedOnRatio(props, "margin") : null,
    gap: ({ props }) => props.gap ? mapBasedOnRatio(props, "gap") : null,
    gridArea: ({ props }) => props.gridArea && { gridArea: props.gridArea },
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
    flex: ({ props }) => props.flex && { flex: props.flex },
    alignItems: ({ props }) => props.alignItems && { alignItems: props.alignItems },
    alignContent: ({ props }) => props.alignContent && { alignContent: props.alignContent },
    justifyContent: ({ props }) => props.justifyContent && { justifyContent: props.justifyContent },
    gridColumn: ({ props }) => props.gridColumn && { gridColumn: props.gridColumn },
    gridRow: ({ props }) => props.gridRow && { gridRow: props.gridRow },
    size: ({ props }) => {
      if (typeof props.heightRange !== "string")
        return;
      const [minHeight, maxHeight] = props.heightRange.split(" ");
      return {
        ...getSpacingBasedOnRatio(minHeight, "minHeight"),
        ...getSpacingBasedOnRatio(maxHeight, "maxHeight")
      };
    }
  }
};

// node_modules/@symbo.ls/text/index.js
var Text = {
  props: {},
  text: ({ props }) => props.text,
  class: {
    fontSize: ({ props }) => props.fontSize ? getFontSizeByKey(props.fontSize) : null,
    fontFamily: ({ props }) => props.fontFamily && { fontFamily: getFontFamily(FONT_FAMILY, props.fontFamily) || props.fontFamily },
    lineHeight: ({ props }) => props.lineHeight && { lineHeight: props.lineHeight },
    // lineHeight: ({ props }) => props.lineHeight && mapBasedOnRatio(props, 'lineHeight', null, ''),
    textDecoration: ({ props }) => props.textDecoration && { textDecoration: props.textDecoration },
    textTransform: ({ props }) => props.textTransform && { textTransform: props.textTransform },
    textAlign: ({ props }) => props.textAlign && { textAlign: props.textAlign },
    fontWeight: ({ props }) => props.fontWeight && { fontWeight: props.fontWeight }
  }
};

// node_modules/@symbo.ls/overflow/index.js
var Overflow = {
  class: {
    overflow: ({ props }) => ({ overflow: props.overflow })
  }
};

// uikit/box/index.js
var Box = {
  extend: [
    Shape,
    Position,
    Theme,
    Block,
    Text,
    Overflow
  ],
  attr: {
    id: ({ props }) => props.id
  }
};
