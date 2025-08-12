import flatten from "./flatten";

describe("flatten", () => {
  it("should throw TypeError if input value is not an array", () => {
    expect(() => flatten("not an array" as any)).toThrow(TypeError);
    expect(() => flatten(123 as any)).toThrow(TypeError);
    expect(() => flatten(null as any)).toThrow(TypeError);
    expect(() => flatten(undefined as any)).toThrow(TypeError);
    expect(() => flatten({} as any)).toThrow(TypeError);
  });

  it("should return an empty Array if input is an empty Array", () => {
    expect(flatten([])).toEqual([]);
  });

  it("should flatten a simple nested array", () => {
    expect(flatten([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
  });

  it("should flatten deeply nested arrays", () => {
    expect(flatten([1, [2, [3, [4, 5]]], 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should handle arrays with mixed types", () => {
    expect(flatten(["hello", [1, 2], true, [null, undefined]] as any)).toEqual([
      "hello",
      1,
      2,
      true,
      null,
      undefined,
    ]);
  });

  it("should preserve order of elements", () => {
    expect(flatten([[1, 2], 3, [4, 5], 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should handle single element arrays", () => {
    expect(flatten([[1]])).toEqual([1]);
    expect(flatten([["hello"]] as any)).toEqual(["hello"]);
  });

  it("should handle arrays with empty nested arrays", () => {
    expect(flatten([1, [], 2, [3, []], 4])).toEqual([1, 2, 3, 4]);
  });

  it("should flatten arrays with objects and primitives", () => {
    const obj = { key: "value" };
    expect(flatten([obj, [1, 2], "string"] as any)).toEqual([
      obj,
      1,
      2,
      "string",
    ]);
  });
});
