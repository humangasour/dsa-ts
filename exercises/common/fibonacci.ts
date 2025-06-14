/**
 * Calculates the nth Fibonacci number using iteration.
 * @param {number} n - The position in the Fibonacci sequence.
 * @returns {number} The nth Fibonacci number.
 * @throws {TypeError} If input is not a non-negative integer.
 */
export const fibonacciIterative = (n: number): number => {
    if (!Number.isInteger(n) || n < 0) {
        throw new TypeError("Input must be a non-negative integer.");
    }

    if (n === 0) return 0;
    if (n === 1) return 1;

    let first = 0;
    let second = 1;
    let value = 0;
    for (let i = 2; i <= n; i++) {
        value = first + second;
        first = second;
        second = value;
    }
    return value;
};

/**
 * Calculates the nth Fibonacci number using simple recursion.
 * @param {number} n - The position in the Fibonacci sequence.
 * @returns {number} The nth Fibonacci number.
 * @throws {TypeError} If input is not a non-negative integer.
 */
export const fibonacciRecursive = (n: number): number => {
    if (!Number.isInteger(n) || n < 0) {
        throw new TypeError("Input must be a non-negative integer.");
    }

    if (n < 2) return n;

    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};

/**
 * Calculates the nth Fibonacci number using tail recursion.
 * @param {number} n - The position in the Fibonacci sequence.
 * @returns {number} The nth Fibonacci number.
 * @throws {TypeError} If input is not a non-negative integer.
 */
export const fibonacciTailRecursive = (n: number): number => {
    if (!Number.isInteger(n) || n < 0) {
        throw new TypeError("Input must be a non-negative integer.");
    }

    const helper = (a: number, b: number, count: number): number => {
        if (count === 0) return a;
        return helper(b, a + b, count - 1);
    };

    return helper(0, 1, n);
};
