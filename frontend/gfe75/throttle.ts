export default function throttle<F extends (this: any, ...args: any[]) => any>(
  func: F,
  wait: number
) {
  let timerId: ReturnType<typeof setTimeout> | null = null;
  let lastResult: ReturnType<F> | undefined;

  const throttle = function (
    this: ThisParameterType<F>,
    ...args: Parameters<F>
  ) {
    if (timerId) {
      return;
    }

    lastResult = func.apply(this, args);

    timerId = setTimeout(() => {
      timerId = null;
    }, wait);
    return lastResult;
  };

  return throttle as (
    this: ThisParameterType<F>,
    ...args: Parameters<F>
  ) => ReturnType<F> | undefined;
}
