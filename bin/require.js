import { createRequire } from 'module'

class ImportError extends Error {} /* Bring in the ability to create the 'require' method */ // eslint-disable-line
const require = createRequire(import.meta.url) // construct the require method

export const loadModule = async (modulePath) => {
  return require(modulePath) // use the require method
}
