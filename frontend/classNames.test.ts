import classNames from "./classnames";

describe("classNames", () => {
  it("should return an empty string if no arguments are passed", () => {
    expect(classNames()).toEqual("");
  });

  it("should process string arguments", () => {
    expect(classNames("class1", "class2")).toEqual("class1 class2");
  });

  it("should process numerical arguments", () => {
    expect(classNames("class1", 1, "class2")).toEqual("class1 1 class2");
  });

  it("should process dictionaries", () => {
    expect(classNames("class1", { foo: true, bar: false })).toEqual(
      "class1 foo"
    );
  });

  it("should process arrays", () => {
    expect(classNames("class1", ["class2", "class3"])).toEqual(
      "class1 class2 class3"
    );
  });

  it("should process nested arrays", () => {
    expect(classNames("class1", [["class2", "class3"], "class4"])).toEqual(
      "class1 class2 class3 class4"
    );
  });

  it("should ignore falsy values", () => {
    expect(classNames("class1", null, undefined, false, 0, "")).toEqual(
      "class1"
    );
  });

  it("should process mixed types", () => {
    expect(
      classNames("class1", { foo: true, bar: false }, ["class2", "class3"])
    ).toEqual("class1 foo class2 class3");
  });

  it("should handle empty arrays and objects", () => {
    expect(classNames("class1", [], {})).toEqual("class1 ");
  });

  it("should handle boolean values", () => {
    expect(classNames("class1", true, false)).toEqual("class1");
  });
});
