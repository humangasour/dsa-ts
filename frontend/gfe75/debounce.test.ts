import debounce from "./debounce";

describe("debounce", () => {
  it("can be initiated", () => {
    const increment = debounce(() => {}, 50);
    expect(increment).toBeTruthy();
  });

  it("debounces multiple rapid calls into one", (done) => {
    let callCount = 0;
    const fn = debounce(() => {
      callCount++;
    }, 10);

    fn();
    fn();
    fn();

    setTimeout(() => {
      expect(callCount).toBe(1);
      done();
    }, 20);
  });

  it("uses the latest arguments on execution", (done) => {
    const mockFn = jest.fn();
    const debounced = debounce(mockFn, 10);

    debounced(1);
    debounced(2);
    debounced(3);

    setTimeout(() => {
      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(mockFn).toHaveBeenCalledWith(3);
      done();
    }, 20);
  });

  it("executes after duration", (done) => {
    let val = 1;

    const increment = debounce(() => {
      val++;
    }, 10);

    expect(val).toBe(1);
    increment();
    expect(val).toBe(1);

    setTimeout(() => {
      expect(val).toBe(2);
      done();
    }, 20);
  });

  it("binds this to the input function correctly", (done) => {
    const increment = debounce(function (this: any, by: number) {
      this.val += by;
    }, 10);

    const obj = {
      val: 1,
      increment,
    };

    expect(obj.val).toBe(1);
    obj.increment(2);
    expect(obj.val).toBe(1);

    setTimeout(() => {
      expect(obj.val).toBe(3);
      done();
    }, 20);
  });
});
