import { expect } from "chai";
import {
    fibonacciIterative,
    fibonacciRecursive,
    fibonacciTailRecursive,
    fibonacciMemoized,
    createMemoizedFibonacci,
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

    describe("fibonacciMemoized", () => {
        it("should throw TypeError if input is not a non-negative integer", () => {
            expect(() => fibonacciMemoized(null as unknown as number)).to.throw(
                TypeError
            );
            expect(() =>
                fibonacciMemoized("bad" as unknown as number)
            ).to.throw(TypeError);
            expect(() => fibonacciMemoized(-1)).to.throw(TypeError);
            expect(() => fibonacciMemoized(3.14)).to.throw(TypeError);
        });

        it("should return correct Fibonacci values", () => {
            expect(fibonacciMemoized(0)).to.equal(0);
            expect(fibonacciMemoized(1)).to.equal(1);
            expect(fibonacciMemoized(4)).to.equal(3);
            expect(fibonacciMemoized(10)).to.equal(55);
        });
    });

    describe("createMemoizedFibonacci", () => {
        it("should return a function that throws TypeError for invalid input", () => {
            const fib = createMemoizedFibonacci();
            expect(() => fib(-1)).to.throw(TypeError);
            expect(() => fib(NaN)).to.throw(TypeError);
            expect(() => fib("7" as unknown as number)).to.throw(TypeError);
        });

        it("should return a function that computes correct Fibonacci values", () => {
            const fib = createMemoizedFibonacci();
            expect(fib(0)).to.equal(0);
            expect(fib(1)).to.equal(1);
            expect(fib(5)).to.equal(5);
            expect(fib(10)).to.equal(55);
        });

        it("should reuse memoized values across multiple calls", () => {
            const fib = createMemoizedFibonacci();
            expect(fib(20)).to.equal(6765);
            // Second call should be instant, same result
            expect(fib(20)).to.equal(6765);
            expect(fib(21)).to.equal(10946);
        });
    });
});
