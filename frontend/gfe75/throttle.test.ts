import throttle from "./throttle";

describe("throttle", () => {
  it("should call the function immediately on first invocation", () => {
    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 100);

    throttledFn();

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("should call the function immediately on first invocation", () => {
    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 100);

    throttledFn();

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("should ignore subsequent calls within the wait period", () => {
    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 100);

    throttledFn(); // First call
    throttledFn(); // Should be ignored
    throttledFn(); // Should be ignored

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("is leading only: blocks during wait; allows after", () => {
    jest.useFakeTimers();

    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 100);

    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(99);
    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(1);
    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(2);

    jest.useRealTimers();
  });
});
