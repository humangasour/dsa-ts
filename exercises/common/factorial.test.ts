
import {
    factorialIterative,
    factorialRecursive,
    factorialTailRecursive,
} from "./factorial";

describe("factorial", () => {
    describe("factorialRecursive", () => {
        it("should throw TypeError if input is not a non-negative integer", () => {
            expect(() =>
                factorialRecursive(null as unknown as number)
            ).toThrow(TypeError);
            expect(() => factorialRecursive("a" as unknown as number)).toThrow(
                TypeError
            );
            expect(() => factorialRecursive(-4)).toThrow(TypeError);
            expect(() => factorialRecursive(2.5)).toThrow(TypeError);
        });

        it("should return correct factorial values", () => {
            expect(factorialRecursive(0)).toBe(1);
            expect(factorialRecursive(1)).toBe(1);
            expect(factorialRecursive(5)).toBe(120);
            expect(factorialRecursive(6)).toBe(720);
        });
    });

    describe("factorialIterative", () => {
        it("should throw TypeError if input is not a non-negative integer", () => {
            expect(() =>
                factorialIterative(undefined as unknown as number)
            ).toThrow(TypeError);
            expect(() => factorialIterative(-1)).toThrow(TypeError);
            expect(() => factorialIterative(3.14)).toThrow(TypeError);
        });

        it("should return correct factorial values", () => {
            expect(factorialIterative(0)).toBe(1);
            expect(factorialIterative(5)).toBe(120);
        });
    });

    describe("factorialTailRecursive", () => {
        it("should throw TypeError if input is not a non-negative integer", () => {
            expect(() => factorialTailRecursive(NaN)).toThrow(TypeError);
            expect(() => factorialTailRecursive(-10)).toThrow(TypeError);
            expect(() =>
                factorialTailRecursive("abc" as unknown as number)
            ).toThrow(TypeError);
        });

        it("should return correct factorial values", () => {
            expect(factorialTailRecursive(0)).toBe(1);
            expect(factorialTailRecursive(4)).toBe(24);
            expect(factorialTailRecursive(6)).toBe(720);
        });
    });
});
