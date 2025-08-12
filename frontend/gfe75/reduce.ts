declare global {
  interface Array<T> {
    myReduce<U>(
      callbackFn: (
        previousValue: U,
        currentValue: T,
        index: number,
        array: T[]
      ) => U,
      initialValue?: U
    ): U;
  }
}

Array.prototype.myReduce = function (callbackFn, initialValue) {
  if (this.length === 0 && initialValue === undefined) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  let accumulator = initialValue !== undefined ? initialValue : this[0];
  const startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < this.length; i++) {
    if (i in this) {
      // checking for sparse arrays
      accumulator = callbackFn(accumulator, this[i], i, this);
    }
  }

  return accumulator;
};

// Make this file a module
export {};
