'use strict'

// class ImportError extends Error {}

export const loadModule = async (modulePath) => {
  try {
    return await import(modulePath)
  } catch (e) {
    console.log(`Unable to import module ${modulePath}`)
    // throw new ImportError(`Unable to import module ${modulePath}`)
  }
}
