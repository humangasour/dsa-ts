import { expect } from "chai";
import { reverseStringTwoPointer } from "./reverseString";

describe("reverseStringTwoPointer", () => {
    it("should reverse a normal string", () => {
        expect(reverseStringTwoPointer("hello")).to.equal("olleh");
    });

    it("should reverse a string with spaces and punctuation", () => {
        expect(reverseStringTwoPointer("hey, what's up")).to.equal(
            "pu s'tahw ,yeh"
        );
    });

    it("should return empty string for empty input", () => {
        expect(reverseStringTwoPointer("")).to.equal("");
    });

    it("should reverse a string with special characters", () => {
        expect(reverseStringTwoPointer("!@#$$#@!")).to.equal("!@#$$#@!");
    });

    it("should reverse a string with unicode characters", () => {
        expect(reverseStringTwoPointer("héllo😊")).to.equal("😊olléh");
    });

    it("should throw TypeError for non-string input", () => {
        expect(() =>
            reverseStringTwoPointer(123 as unknown as string)
        ).to.throw(TypeError);
        expect(() =>
            reverseStringTwoPointer(null as unknown as string)
        ).to.throw(TypeError);
        expect(() =>
            reverseStringTwoPointer(undefined as unknown as string)
        ).to.throw(TypeError);
    });
});
