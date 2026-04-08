export function deepFreeze(value) {
  if (!value || typeof value !== "object" || Object.isFrozen(value)) {
    return value;
  }

  Object.freeze(value);

  Object.getOwnPropertyNames(value).forEach((property) => {
    deepFreeze(value[property]);
  });

  return value;
}
