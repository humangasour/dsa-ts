type NestedArray<T> = T | NestedArray<T>[];

export default function flatten<T>(value: NestedArray<T>[]): T[] {
  if (!Array.isArray(value)) {
    throw TypeError("Input value must be an array");
  }

  const flattened: T[] = [];

  for (const element of value) {
    if (Array.isArray(element)) {
      flattened.push(...flatten(element));
    } else {
      flattened.push(element);
    }
  }

  return flattened;
}
