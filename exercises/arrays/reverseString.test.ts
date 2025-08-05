
import { reverseStringTwoPointer } from "./reverseString";

describe("reverseStringTwoPointer", () => {
    it("should reverse a normal string", () => {
        expect(reverseStringTwoPointer("hello")).toBe("olleh");
    });

    it("should reverse a string with spaces and punctuation", () => {
        expect(reverseStringTwoPointer("hey, what's up")).toBe(
            "pu s'tahw ,yeh"
        );
    });

    it("should return empty string for empty input", () => {
        expect(reverseStringTwoPointer("")).toBe("");
    });

    it("should reverse a string with special characters", () => {
        expect(reverseStringTwoPointer("!@#$$#@!")).toBe("!@#$$#@!");
    });

    it("should reverse a string with unicode characters", () => {
        expect(reverseStringTwoPointer("héllo😊")).toBe("😊olléh");
    });

    it("should throw TypeError for non-string input", () => {
        expect(() =>
            reverseStringTwoPointer(123 as unknown as string)
        ).toThrow(TypeError);
        expect(() =>
            reverseStringTwoPointer(null as unknown as string)
        ).toThrow(TypeError);
        expect(() =>
            reverseStringTwoPointer(undefined as unknown as string)
        ).toThrow(TypeError);
    });
});
