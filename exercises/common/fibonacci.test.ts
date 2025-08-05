
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
            ).toThrow(TypeError);
            expect(() =>
                fibonacciRecursive("hello" as unknown as number)
            ).toThrow(TypeError);
            expect(() => fibonacciRecursive(-3)).toThrow(TypeError);
            expect(() => fibonacciRecursive(1.5)).toThrow(TypeError);
        });

        it("should return correct Fibonacci values", () => {
            expect(fibonacciRecursive(0)).toBe(0);
            expect(fibonacciRecursive(1)).toBe(1);
            expect(fibonacciRecursive(2)).toBe(1);
            expect(fibonacciRecursive(5)).toBe(5);
            expect(fibonacciRecursive(10)).toBe(55);
        });
    });

    describe("fibonacciIterative", () => {
        it("should throw TypeError if input is not a non-negative integer", () => {
            expect(() =>
                fibonacciIterative(undefined as unknown as number)
            ).toThrow(TypeError);
            expect(() => fibonacciIterative(-5)).toThrow(TypeError);
            expect(() => fibonacciIterative(NaN)).toThrow(TypeError);
        });

        it("should return correct Fibonacci values", () => {
            expect(fibonacciIterative(0)).toBe(0);
            expect(fibonacciIterative(1)).toBe(1);
            expect(fibonacciIterative(7)).toBe(13);
            expect(fibonacciIterative(10)).toBe(55);
        });
    });

    describe("fibonacciTailRecursive", () => {
        it("should throw TypeError if input is not a non-negative integer", () => {
            expect(() =>
                fibonacciTailRecursive("xyz" as unknown as number)
            ).toThrow(TypeError);
            expect(() => fibonacciTailRecursive(-2)).toThrow(TypeError);
            expect(() => fibonacciTailRecursive(2.8)).toThrow(TypeError);
        });

        it("should return correct Fibonacci values", () => {
            expect(fibonacciTailRecursive(0)).toBe(0);
            expect(fibonacciTailRecursive(1)).toBe(1);
            expect(fibonacciTailRecursive(6)).toBe(8);
            expect(fibonacciTailRecursive(10)).toBe(55);
        });
    });

    describe("fibonacciMemoized", () => {
        it("should throw TypeError if input is not a non-negative integer", () => {
            expect(() => fibonacciMemoized(null as unknown as number)).toThrow(
                TypeError
            );
            expect(() =>
                fibonacciMemoized("bad" as unknown as number)
            ).toThrow(TypeError);
            expect(() => fibonacciMemoized(-1)).toThrow(TypeError);
            expect(() => fibonacciMemoized(3.14)).toThrow(TypeError);
        });

        it("should return correct Fibonacci values", () => {
            expect(fibonacciMemoized(0)).toBe(0);
            expect(fibonacciMemoized(1)).toBe(1);
            expect(fibonacciMemoized(4)).toBe(3);
            expect(fibonacciMemoized(10)).toBe(55);
        });
    });

    describe("createMemoizedFibonacci", () => {
        it("should return a function that throws TypeError for invalid input", () => {
            const fib = createMemoizedFibonacci();
            expect(() => fib(-1)).toThrow(TypeError);
            expect(() => fib(NaN)).toThrow(TypeError);
            expect(() => fib("7" as unknown as number)).toThrow(TypeError);
        });

        it("should return a function that computes correct Fibonacci values", () => {
            const fib = createMemoizedFibonacci();
            expect(fib(0)).toBe(0);
            expect(fib(1)).toBe(1);
            expect(fib(5)).toBe(5);
            expect(fib(10)).toBe(55);
        });

        it("should reuse memoized values across multiple calls", () => {
            const fib = createMemoizedFibonacci();
            expect(fib(20)).toBe(6765);
            // Second call should be instant, same result
            expect(fib(20)).toBe(6765);
            expect(fib(21)).toBe(10946);
        });
    });
});
