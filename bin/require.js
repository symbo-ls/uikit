class ImportError extends Error {}

import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url); // construct the require method

export const loadModule = async (modulePath) => {
  return require(modulePath) // use the require method
}
