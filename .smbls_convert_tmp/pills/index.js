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

// uikit/pills/index.js
var pills_exports = {};
__export(pills_exports, {
  Pills: () => Pills
});
module.exports = __toCommonJS(pills_exports);

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

// uikit/pills/index.js
var Pills = {
  style: {
    display: "flex",
    div: {
      width: "6px",
      height: "6px",
      background: "white"
    },
    "div:not(:last-child)": {
      marginRight: "10px"
    },
    "div:first-child": { opacity: ".5" },
    "div:nth-child(2)": { opacity: ".3" },
    "div:nth-child(3)": { opacity: ".3" }
  },
  childExtends: {
    tag: "div",
    extends: Shape,
    props: {
      round: 42,
      theme: "White"
    }
  },
  ...[{}, {}, {}]
};
