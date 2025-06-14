import { expect } from "chai";
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
            ).to.throw(TypeError);
            expect(() => factorialRecursive("a" as unknown as number)).to.throw(
                TypeError
            );
            expect(() => factorialRecursive(-4)).to.throw(TypeError);
            expect(() => factorialRecursive(2.5)).to.throw(TypeError);
        });

        it("should return correct factorial values", () => {
            expect(factorialRecursive(0)).to.equal(1);
            expect(factorialRecursive(1)).to.equal(1);
            expect(factorialRecursive(5)).to.equal(120);
            expect(factorialRecursive(6)).to.equal(720);
        });
    });

    describe("factorialIterative", () => {
        it("should throw TypeError if input is not a non-negative integer", () => {
            expect(() =>
                factorialIterative(undefined as unknown as number)
            ).to.throw(TypeError);
            expect(() => factorialIterative(-1)).to.throw(TypeError);
            expect(() => factorialIterative(3.14)).to.throw(TypeError);
        });

        it("should return correct factorial values", () => {
            expect(factorialIterative(0)).to.equal(1);
            expect(factorialIterative(5)).to.equal(120);
        });
    });

    describe("factorialTailRecursive", () => {
        it("should throw TypeError if input is not a non-negative integer", () => {
            expect(() => factorialTailRecursive(NaN)).to.throw(TypeError);
            expect(() => factorialTailRecursive(-10)).to.throw(TypeError);
            expect(() =>
                factorialTailRecursive("abc" as unknown as number)
            ).to.throw(TypeError);
        });

        it("should return correct factorial values", () => {
            expect(factorialTailRecursive(0)).to.equal(1);
            expect(factorialTailRecursive(4)).to.equal(24);
            expect(factorialTailRecursive(6)).to.equal(720);
        });
    });
});
