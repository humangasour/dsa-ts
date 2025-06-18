/**
 * Calculates the nth Fibonacci number using iteration.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
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
 *
 * Time Complexity: O(2^n)
 * Space Complexity: O(n) - due to call stack depth
 *
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
 *
 * Note: Tail-call optimization is not guaranteed in JavaScript/TypeScript engines.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n) - due to recursion stack
 *
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

/**
 * Calculates the nth Fibonacci number using memoized recursion.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n) - due to memo table and call stack
 *
 * @param {number} n - The position in the Fibonacci sequence.
 * @returns {number} The nth Fibonacci number.
 * @throws {TypeError} If input is not a non-negative integer.
 */
export const fibonacciMemoized = (n: number): number => {
    if (!Number.isInteger(n) || n < 0) {
        throw new TypeError("Input must be a non-negative integer.");
    }

    const memo: Record<number, number> = {};

    const helper = (k: number): number => {
        if (k in memo) return memo[k];
        if (k < 2) {
            memo[k] = k;
            return k;
        }
        memo[k] = helper(k - 1) + helper(k - 2);
        return memo[k];
    };

    return helper(n);
};

/**
 * Creates a memoized Fibonacci function.
 *
 * Useful when computing multiple Fibonacci numbers across calls,
 * since the memoization cache persists across calls.
 *
 * Time Complexity per call: O(n)
 * Space Complexity (overall): O(n) for memo table
 *
 * @returns {(n: number) => number} A memoized Fibonacci function.
 *
 * @throws {TypeError} If input is not a non-negative integer.
 */
export const createMemoizedFibonacci = (): ((n: number) => number) => {
    const memo: Record<number, number> = {};

    const fib = (n: number): number => {
        if (!Number.isInteger(n) || n < 0) {
            throw new TypeError("Input must be a non-negative integer.");
        }

        if (n in memo) return memo[n];
        if (n < 2) {
            memo[n] = n;
            return n;
        }

        memo[n] = fib(n - 1) + fib(n - 2);
        return memo[n];
    };

    return fib;
};
