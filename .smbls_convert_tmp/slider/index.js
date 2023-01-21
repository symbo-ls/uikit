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

// uikit/slider/index.js
var slider_exports = {};
__export(slider_exports, {
  RangeSlider: () => RangeSlider,
  Slider: () => Slider
});
module.exports = __toCommonJS(slider_exports);

// uikit/slider/style.js
var style_default = {
  appearance: "none",
  width: "100%",
  height: "2px",
  outline: "none",
  flex: 1,
  "&::-webkit-slider-thumb": {
    boxSizing: "content-box",
    appearance: "none",
    width: "8px",
    height: "8px",
    borderWidth: "2px",
    borderStyle: "solid",
    borderRadius: "100%",
    opacity: ".8"
  }
};

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
var isFunction2 = (arg) => typeof arg === "function";

// node_modules/@symbo.ls/scratch/src/utils/color.js
var ENV = "development";
var colorStringToRgbaArray = (color) => {
  if (color === "")
    return;
  if (color.toLowerCase() === "transparent")
    return [0, 0, 0, 0];
  if (color[0] === "#") {
    if (color.length < 7) {
      color = "#" + color[1] + color[1] + color[2] + color[2] + color[3] + color[3] + (color.length > 4 ? color[4] + color[4] : "");
    }
    return [
      parseInt(color.substr(1, 2), 16),
      parseInt(color.substr(3, 2), 16),
      parseInt(color.substr(5, 2), 16),
      color.length > 7 ? parseInt(color.substr(7, 2), 16) / 255 : 1
    ];
  }
  if (color.indexOf("rgb") === -1) {
    const elem = document.body.appendChild(document.createElement("fictum"));
    const flag = "rgb(1, 2, 3)";
    elem.style.color = flag;
    if (elem.style.color !== flag)
      return;
    elem.style.color = color;
    if (elem.style.color === flag || elem.style.color === "")
      return;
    color = window.getComputedStyle(elem).color;
    document.body.removeChild(elem);
  }
  if (color.indexOf("rgb") === 0) {
    if (color.indexOf("rgba") === -1)
      color = `${color}, 1`;
    return color.match(/[\.\d]+/g).map((a) => +a);
  }
};
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
var opacify = (color, opacity) => {
  const arr = colorStringToRgbaArray(color);
  if (!arr) {
    if (ENV === "test" || ENV === "development")
      console.warn(color + "color is not rgba");
    return;
  }
  arr[3] = opacity;
  return `rgba(${arr})`;
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
var setCustomFontMedia = (name, url, weight) => `@font-face {
  ${setCustomFont(name, url, weight)}
}`;
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
var findHeadingLetter = (h1Matches, index) => numToLetterMap[h1Matches - index];
var findHeadings = (propertyNames) => {
  const { h1Matches, sequence } = propertyNames;
  return new Array(6).fill(null).map((_, i) => {
    const findLetter = findHeadingLetter(h1Matches, i);
    return sequence[findLetter];
  });
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
var setColor = (val, key, suffix) => {
  const CONFIG2 = getActiveConfig();
  if (isString(val) && val.slice(0, 2) === "--")
    val = getColor(val.slice(2));
  if (isArray(val)) {
    return {
      "@light": setColor(val[0], key, "light"),
      "@dark": setColor(val[1], key, "dark")
    };
  }
  if (isObject(val)) {
    const obj = {};
    for (const variant in val)
      obj[variant] = setColor(val[variant], key, variant.slice(0, 1) === "@" ? variant.slice(1) : variant);
    return obj;
  }
  const CSSVar = `--color-${key}` + (suffix ? `-${suffix}` : "");
  const [r, g, b, a = 1] = colorStringToRgbaArray(val.value || val);
  const alpha = parseFloat(a.toFixed(2));
  const rgb = `${r}, ${g}, ${b}`;
  const value = `rgba(${rgb}, ${alpha})`;
  if (CONFIG2.useVariable) {
    CONFIG2.CSS_VARS[CSSVar] = value;
  }
  return {
    var: CSSVar,
    rgb,
    alpha,
    value
  };
};
var setGradient = (val, key, suffix) => {
  const CONFIG2 = getActiveConfig();
  if (isString(val) && val.slice(0, 2) === "--")
    val = getColor(val.slice(2));
  if (isArray(val)) {
    return {
      "@light": setGradient(val[0], key, "light"),
      "@dark": setGradient(val[0], key, "dark")
    };
  }
  if (isObject(val)) {
    const obj = {};
    for (const variant in val)
      obj[variant] = setGradient(val[variant], key, variant.slice(0, 1) === "@" ? variant.slice(1) : variant);
    return obj;
  }
  const CSSVar = `--gradient-${key}` + (suffix ? `-${suffix}` : "");
  if (CONFIG2.useVariable) {
    CONFIG2.CSS_VARS[CSSVar] = val.value || val;
  }
  return {
    var: CSSVar,
    value: val.value || val
  };
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
var setInverseTheme = (theme, variant, value) => {
  if (isObject(variant)) {
    theme.variants.inverse.value = setThemeValue(variant);
  } else if (variant === true) {
    const { color, background } = value;
    theme.variants.inverse = {
      value: {
        color: background,
        background: color
      }
    };
  }
};
var setPseudo = (theme, key, variant, themeValue) => {
  const result = getTheme(variant);
  themeValue[`&:${key}`] = result;
  if (isObject(variant) && !variant.value)
    variant.value = result;
};
var setSelectors = (theme, value) => {
  const { state } = theme;
  if (!state)
    return;
  const keys = Object.keys(state);
  keys.map((key) => {
    const variant = state[key];
    setPseudo(theme, key, variant, value);
    return theme;
  });
  return theme;
};
var setPrefersScheme = (theme, key, variant, themeValue) => {
  const result = getTheme(variant);
  themeValue[`@media (prefers-color-scheme: ${key})`] = result;
  if (isObject(variant) && !variant.value)
    variant.value = result;
};
var setMedia = (theme, value) => {
  const { media } = theme;
  if (!media)
    return;
  const keys = Object.keys(media);
  keys.map((key) => {
    const variant = media[key];
    if (key === "dark" || key === "light")
      setPrefersScheme(theme, key, variant, value);
    if (key === "inverse")
      setInverseTheme(theme, variant, value);
    return theme;
  });
  return theme;
};
var setHelpers = (theme, value) => {
  const CONFIG2 = getActiveConfig();
  const { helpers } = theme;
  if (!helpers)
    return;
  const keys = Object.keys(helpers);
  keys.map((key) => {
    const helper = helpers[key];
    if (isString(helper))
      helpers[key] = CONFIG2.THEME[helper];
    else
      getThemeValue(helpers[key]);
    return theme;
  });
  return theme;
};
var setTheme = (val, key) => {
  const CONFIG2 = getActiveConfig();
  if (CONFIG2.useVariable)
    return setMediaTheme(val, key);
  const { state, media, helpers } = val;
  const value = setThemeValue(val, key);
  const CSSvar = `--theme-${key}`;
  setSelectors(val, value);
  setMedia(val, value);
  setHelpers(val, value);
  return { var: CSSvar, value, state, media, helpers };
};
var setMediaTheme = (val, key, suffix, prefers) => {
  const CONFIG2 = getActiveConfig();
  const { CSS_VARS: CSS_VARS2 } = CONFIG2;
  const theme = { value: val };
  if (isObjectLike(val)) {
    for (const param in val) {
      const symb = param.slice(0, 1);
      const value = val[param];
      if (symb === "@" || symb === ":" || symb === ".") {
        const hasPrefers = symb === "@" && param;
        theme[param] = setMediaTheme(value, key, param, prefers || hasPrefers);
      } else {
        const color = getColor(value, prefers);
        const metaSuffixes = [...new Set([prefers, suffix].filter((v) => v).map((v) => v.slice(1)))];
        const varmetaSuffixName = metaSuffixes.length ? "-" + metaSuffixes.join("-") : "";
        const CSSVar = `--theme-${key}${varmetaSuffixName}-${param}`;
        if (CONFIG2.useVariable) {
          CSS_VARS2[CSSVar] = color;
          theme[param] = `var(${CSSVar})`;
        } else {
          theme[param] = color;
        }
        theme[`.${param}`] = { [param]: theme[param] };
      }
    }
    if (theme["background"] || theme["color"] || theme["backgroundColor"]) {
      theme[".inversed"] = {
        color: theme["background"] || theme["backgroundColor"],
        background: theme["color"]
      };
    }
  }
  if (isString(val) && val.slice(0, 2) === "--") {
    const { THEME: THEME2 } = CONFIG2;
    const value = THEME2[val.slice(2)];
    const getReferenced = getMediaTheme(value);
    return getReferenced;
  }
  return theme;
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
var setFont = (val, key) => {
  const CSSvar = `--font-${key}`;
  const fontFace = val[0] ? getFontFaceEach(key, val) : setCustomFontMedia(key, val.url);
  return { var: CSSvar, value: val, fontFace };
};
var setFontFamily = (val, key) => {
  const CONFIG2 = getActiveConfig();
  const { FONT_FAMILY: FONT_FAMILY2, FONT_FAMILY_TYPES: FONT_FAMILY_TYPES2 } = CONFIG2;
  let { value, type } = val;
  if (val.isDefault)
    FONT_FAMILY2.default = key;
  if (isObject(value))
    value = arrayze(value);
  const CSSvar = `--font-family-${key}`;
  const str = `${value.join(", ")}, ${FONT_FAMILY_TYPES2[type]}`;
  return { var: CSSvar, value: str, arr: value, type };
};

// node_modules/@symbo.ls/scratch/src/system/typography.js
var runThroughMedia = (props) => {
  const CONFIG2 = getActiveConfig();
  const { TYPOGRAPHY: TYPOGRAPHY2, MEDIA: MEDIA2 } = CONFIG2;
  for (const prop in props) {
    const mediaProps = props[prop];
    if (prop.slice(0, 1) === "@") {
      const { type, base, ratio, range, subSequence, h1Matches, unit } = props;
      merge2(mediaProps, {
        type,
        base,
        ratio,
        range,
        subSequence,
        h1Matches,
        unit,
        sequence: {},
        scales: {},
        styles: {},
        vars: {}
      });
      generateSequence(mediaProps);
      const mediaName = prop.slice(1);
      applySequenceVars(mediaProps, mediaName);
      const query = MEDIA2[mediaName];
      TYPOGRAPHY2.styles[`@media screen and ${query}`] = {
        fontSize: mediaProps.base / TYPOGRAPHY2.browserDefault + unit
      };
    }
  }
};
var applyHeadings = (props) => {
  const CONFIG2 = getActiveConfig();
  if (props.h1Matches) {
    const unit = props.unit;
    const HEADINGS = findHeadings(props);
    const { styles } = props;
    for (const k in HEADINGS) {
      const headerName = `h${parseInt(k) + 1}`;
      const headerStyle = styles[headerName];
      styles[headerName] = {
        fontSize: CONFIG2.useVariable ? `var(${HEADINGS[k].variable})` : `${HEADINGS[k].scaling}${unit}`,
        margin: headerStyle ? headerStyle.margin : 0,
        lineHeight: headerStyle ? headerStyle.lineHeight : props.lineHeight,
        letterSpacing: headerStyle ? headerStyle.letterSpacing : props.letterSpacing,
        fontWeight: headerStyle ? headerStyle.fontWeight : 900 - k * 100
      };
    }
  }
};
var applyTypographySequence = () => {
  const CONFIG2 = getActiveConfig();
  const { TYPOGRAPHY: TYPOGRAPHY2 } = CONFIG2;
  generateSequence(TYPOGRAPHY2);
  applyHeadings(TYPOGRAPHY2);
  applySequenceVars(TYPOGRAPHY2);
  runThroughMedia(TYPOGRAPHY2);
};

// node_modules/@symbo.ls/scratch/src/system/spacing.js
var runThroughMedia2 = (sequenceProps) => {
  for (const prop in sequenceProps) {
    const mediaProps = sequenceProps[prop];
    if (prop.slice(0, 1) === "@") {
      const { type, base, ratio, range, subSequence, h1Matches, unit } = sequenceProps;
      merge2(mediaProps, {
        type,
        base,
        ratio,
        range,
        subSequence,
        h1Matches,
        unit,
        sequence: {},
        scales: {},
        styles: {},
        vars: {}
      });
      generateSequence(mediaProps);
      const mediaName = prop.slice(1);
      applySequenceVars(mediaProps, mediaName);
    }
  }
};
var applySpacingSequence = () => {
  const CONFIG2 = getActiveConfig();
  const { SPACING: SPACING2 } = CONFIG2;
  generateSequence(SPACING2);
  applySequenceVars(SPACING2);
  runThroughMedia2(SPACING2);
};

// node_modules/@symbo.ls/scratch/src/system/timing.js
var applyTimingSequence = () => {
  const CONFIG2 = getActiveConfig();
  const { TIMING: TIMING2 } = CONFIG2;
  generateSequence(TIMING2);
  applySequenceVars(TIMING2);
};

// node_modules/@symbo.ls/scratch/src/system/document.js
var applyDocument = () => {
  const CONFIG2 = getActiveConfig();
  const { DOCUMENT: DOCUMENT2, FONT_FAMILY: FONT_FAMILY2, THEME: THEME2, TYPOGRAPHY: TYPOGRAPHY2 } = CONFIG2;
  return merge2(DOCUMENT2, {
    theme: THEME2.document,
    fontFamily: getDefaultOrFirstKey(FONT_FAMILY2),
    fontSize: TYPOGRAPHY2.base,
    lineHeight: TYPOGRAPHY2.lineHeight
  });
};

// node_modules/@symbo.ls/scratch/src/system/reset.js
var applyReset = (reset = {}) => {
  const CONFIG2 = getActiveConfig();
  const { CSS_VARS: CSS_VARS2, RESET: RESET2, TYPOGRAPHY: TYPOGRAPHY2, DOCUMENT: DOCUMENT2 } = CONFIG2;
  if (RESET2) {
    if (RESET2[":root"]) {
      const configReset = RESET2;
      const configStyles = TYPOGRAPHY2.styles;
      configReset.body = {
        ...getMediaTheme("document", `@${CONFIG2.globalTheme}`),
        ...configStyles.body
      };
      configReset.h1 = configStyles.h1;
      configReset.h2 = configStyles.h2;
      configReset.h3 = configStyles.h3;
      configReset.h4 = configStyles.h4;
      configReset.h5 = configStyles.h5;
      configReset.h6 = configStyles.h6;
    }
    const { body, ...styles } = TYPOGRAPHY2.styles;
    return deepMerge(merge(RESET2, reset), {
      html: {
        position: "absolute",
        overflow: "hidden",
        width: "100%",
        height: "100%",
        top: "0",
        left: "0",
        margin: "0",
        WebkitFontSmoothing: "antialiased",
        transform: "translate3d(0, 0, 1px)",
        scrollBehavior: "smooth",
        fontSize: TYPOGRAPHY2.browserDefault + "px",
        fontFamily: DOCUMENT2.fontFamily,
        lineHeight: DOCUMENT2.lineHeight
      },
      body: {
        boxSizing: "border-box",
        height: "100%",
        margin: 0,
        fontFamily: DOCUMENT2.fontFamily,
        fontSize: TYPOGRAPHY2.base / TYPOGRAPHY2.browserDefault + CONFIG2.UNIT.default,
        ...getMediaTheme("document", `@${CONFIG2.globalTheme}`),
        ...styles,
        ...body
      },
      // form elements
      fieldset: {
        border: 0,
        padding: 0,
        margin: 0
      },
      "select, input": {
        fontFamily: DOCUMENT2.fontFamily
      }
    });
  }
};

// node_modules/@symbo.ls/scratch/src/set.js
var setCases = (val, key) => {
  if (isFunction2(val))
    return val();
  return val;
};
var setSameValue = (val, key) => val;
var SETTERS = {
  color: setColor,
  gradient: setGradient,
  font: setFont,
  font_family: setFontFamily,
  theme: setTheme,
  typography: setSameValue,
  cases: setCases,
  spacing: setSameValue,
  media: setSameValue,
  timing: setSameValue,
  icons: setSameValue,
  reset: setSameValue,
  unit: setSameValue,
  animation: setSameValue
};
var setValue = (FACTORY_NAME, value, key) => {
  const CONFIG2 = getActiveConfig();
  const factoryName = FACTORY_NAME.toLowerCase();
  const FACTORY2 = CONFIG2[FACTORY_NAME];
  if (SETTERS[factoryName]) {
    const result = SETTERS[factoryName](value, key);
    FACTORY2[key] = result;
    return FACTORY2;
  }
  if (CONFIG2.verbose)
    console.warn("Can not find", factoryName, "method in scratch");
};
var setEach = (factoryName, props) => {
  const CONFIG2 = getActiveConfig();
  const FACTORY_NAME = factoryName.toUpperCase();
  const keys = Object.keys(props);
  keys.map((key) => setValue(FACTORY_NAME, props[key], key));
  return CONFIG2[FACTORY_NAME];
};
var SET_OPTIONS = {};
var set = (recivedConfig, options = SET_OPTIONS) => {
  let CONFIG2 = getActiveConfig();
  const { version, verbose, useVariable, useReset, globalTheme, ...config } = recivedConfig;
  if (options.newConfig) {
    FACTORY["active"] = options.newConfig;
    CONFIG2 = getActiveConfig(options.newConfig);
  }
  if (verbose !== void 0)
    CONFIG2.verbose = verbose;
  if (useVariable !== void 0)
    CONFIG2.useVariable = useVariable;
  if (useReset !== void 0)
    CONFIG2.useReset = useReset;
  if (globalTheme !== void 0)
    CONFIG2.globalTheme = globalTheme;
  if (CONFIG2.verbose)
    console.log(CONFIG2);
  const keys = Object.keys(config);
  keys.map((key) => setEach(key, config[key]));
  applyTypographySequence();
  applySpacingSequence();
  applyTimingSequence();
  applyDocument();
  applyReset();
  return CONFIG2;
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

// uikit/icon/style.js
var style_default2 = {
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
  style: style_default2,
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

// uikit/slider/index.js
set({
  theme: {
    sliderThumb: {
      background: "white 0.2",
      "&::-webkit-slider-thumb": {
        background: "#232526",
        borderColor: opacify("#454646", 0.75)
      },
      "&:hover": {
        "&::-webkit-slider-thumb": {
          borderColor: opacify("#fff", 0.35)
        }
      },
      "&:focus, &:active": {
        "&::-webkit-slider-thumb": {
          borderColor: "#3C6AC0"
        }
      }
    }
  }
});
var RangeSlider = {
  style: style_default,
  props: {
    theme: "sliderThumb"
  },
  tag: "input",
  attr: { type: "range" }
};
var listenProp = (el, prop, def) => {
  const val = el.props && el.props[prop];
  const r = (isFunction(val) ? val() : val) || (def !== void 0 ? def : 50);
  return r;
};
var Slider = {
  button0: {
    extends: [SquareButton],
    props: {
      icon: "minus"
    },
    on: {
      click: (ev, el, s) => {
        el.props && isFunction(el.props.click) && el.props.click(ev, el, s);
        const input = el.parent.input;
        const props = input.props;
        const value = isFunction(props.value) ? props.value() : props.value;
        input.node.value = value;
      }
    }
  },
  value: {
    style: { width: "4ch" },
    tag: "span",
    text: (el, s) => {
      const value = listenProp(el.parent.input, "value");
      const unit = listenProp(el.parent.input, "unit", "");
      return "" + value + unit;
    }
  },
  range: {
    extends: RangeSlider,
    attr: {
      value: (el, s) => listenProp(el, "value", 50),
      min: (el, s) => listenProp(el, "min", 0),
      max: (el, s) => listenProp(el, "max", 100),
      step: (el, s) => listenProp(el, "step", 1)
    },
    on: {
      input: (ev, el, s) => el.props && isFunction(el.props.input) && el.props.input(ev, el, s),
      change: (ev, el, s) => el.props && isFunction(el.props.change) && el.props.change(ev, el, s)
    }
  },
  button1: {
    extends: [SquareButton],
    props: {
      icon: "plus"
    },
    on: {
      click: (ev, el, s) => {
        el.props && isFunction(el.props.click) && el.props.click(ev, el, s);
        const input = el.parent.input;
        const props = input.props;
        const value = isFunction(props.value) ? props.value() : props.value;
        input.node.value = value;
      }
    }
  }
};
