import { expect } from "chai";
import {
    fibonacciIterative,
    fibonacciRecursive,
    fibonacciTailRecursive,
} from "./fibonacci";

describe("fibonacci", () => {
    describe("fibonacciRecursive", () => {
        it("should throw TypeError if input is not a non-negative integer", () => {
            expect(() =>
                fibonacciRecursive(null as unknown as number)
            ).to.throw(TypeError);
            expect(() =>
                fibonacciRecursive("hello" as unknown as number)
            ).to.throw(TypeError);
            expect(() => fibonacciRecursive(-3)).to.throw(TypeError);
            expect(() => fibonacciRecursive(1.5)).to.throw(TypeError);
        });

        it("should return correct Fibonacci values", () => {
            expect(fibonacciRecursive(0)).to.equal(0);
            expect(fibonacciRecursive(1)).to.equal(1);
            expect(fibonacciRecursive(2)).to.equal(1);
            expect(fibonacciRecursive(5)).to.equal(5);
            expect(fibonacciRecursive(10)).to.equal(55);
        });
    });

    describe("fibonacciIterative", () => {
        it("should throw TypeError if input is not a non-negative integer", () => {
            expect(() =>
                fibonacciIterative(undefined as unknown as number)
            ).to.throw(TypeError);
            expect(() => fibonacciIterative(-5)).to.throw(TypeError);
            expect(() => fibonacciIterative(NaN)).to.throw(TypeError);
        });

        it("should return correct Fibonacci values", () => {
            expect(fibonacciIterative(0)).to.equal(0);
            expect(fibonacciIterative(1)).to.equal(1);
            expect(fibonacciIterative(7)).to.equal(13);
            expect(fibonacciIterative(10)).to.equal(55);
        });
    });

    describe("fibonacciTailRecursive", () => {
        it("should throw TypeError if input is not a non-negative integer", () => {
            expect(() =>
                fibonacciTailRecursive("xyz" as unknown as number)
            ).to.throw(TypeError);
            expect(() => fibonacciTailRecursive(-2)).to.throw(TypeError);
            expect(() => fibonacciTailRecursive(2.8)).to.throw(TypeError);
        });

        it("should return correct Fibonacci values", () => {
            expect(fibonacciTailRecursive(0)).to.equal(0);
            expect(fibonacciTailRecursive(1)).to.equal(1);
            expect(fibonacciTailRecursive(6)).to.equal(8);
            expect(fibonacciTailRecursive(10)).to.equal(55);
        });
    });
});
