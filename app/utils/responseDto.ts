/**
 * Recursively extracts data from an object based on predefined properties.
 * @param {object} sourceObject - The object to extract data from.
 * @param {Array<string>} properties - The list of properties to extract.
 * @returns {object} - An object containing the extracted properties and values.
 */
export function responseDto(sourceObject: any, properties: string[]): any {
  if (!sourceObject || typeof sourceObject !== 'object') {
    throw new Error('Invalid source object!')
  }

  if (!Array.isArray(properties)) {
    throw new TypeError('Properties must be an array!')
  }

  const result: { [key: string]: any } = {}

  for (const key in sourceObject) {
    if (properties.includes(key)) {
      result[key] = sourceObject[key]
    }
    else if (typeof sourceObject[key] === 'object' && sourceObject[key] !== null) {
      // Recurse into nested objects
      const nestedResult = responseDto(sourceObject[key], properties)
      Object.assign(result, nestedResult)
    }
  }

  return result
}
