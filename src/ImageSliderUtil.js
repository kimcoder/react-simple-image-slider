/*
 * @description Assign multiple objects.
 * @param {...object} object - multiple objects.
 * @return {object} assigned object.
 */
export const assignObjects = (...args) => Object.assign({}, ...args);