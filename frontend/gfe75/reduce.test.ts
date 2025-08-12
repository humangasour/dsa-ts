import "./reduce";

describe("Array.prototype.myReduce", () => {
  it("should throw a TypeError if array is empty and no initial value is passed", () => {
    const arr = [];
    const fn = () => arr.myReduce((acc, cur) => acc + cur);
    expect(fn).toThrow(TypeError);
  });

  it("should add numbers in an array", () => {
    const arr = [1, 2, 3];
    const result = arr.myReduce<number>((acc, cur) => acc + cur);
    expect(result).toEqual(6);
  });
});
