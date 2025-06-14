/**
 * 🧮 Problem: Count Common Factors
 *
 * Given two positive integers `a` and `b`, return the number of **common positive factors** of both numbers.
 * A common factor is a number that divides both `a` and `b` exactly.
 *
 * ✨ Optimized Insight:
 * The number of common factors between `a` and `b` is equal to the number of divisors of `gcd(a, b)`.
 *
 * Example:
 *   Input: a = 12, b = 18
 *   Output: 4  (Common factors are 1, 2, 3, 6)
 *
 * Constraints:
 * - 1 <= a, b <= 10^9
 *
 * Functions below are for you to implement.
 * Each is fully documented with expected types, responsibilities, and time complexity.
 */

/**
 * Computes the greatest common divisor (GCD) of two positive integers
 * using the Euclidean algorithm (iterative approach).
 *
 * @param a - First positive integer
 * @param b - Second positive integer
 * @returns The greatest common divisor of a and b
 * @throws TypeError if either a or b is not a positive integer
 *
 * @complexity O(log min(a, b))
 */
export function gcd(a: number, b: number): number {
    if (!Number.isInteger(a) || !Number.isInteger(b) || a <= 0 || b <= 0) {
        throw TypeError("inputs should be positive integers");
    }
    while (b > 0) {
        [a, b] = [b, a % b];
    }

    return a;
}

/**
 * Counts the number of positive divisors of a given positive integer.
 * Uses square root optimization to avoid checking all numbers up to n.
 *
 * @param n - A positive integer
 * @returns The count of positive divisors of n
 * @throws TypeError if n is not a positive integer
 *
 * @complexity O(√n)
 */
export function countDivisors(n: number): number {
    if (!Number.isInteger(n) || n <= 0) {
        throw TypeError("input should be a positive integer");
    }

    const sqRt = Math.floor(Math.sqrt(n));
    let count = 0;

    for (let i = 1; i <= sqRt; i++) {
        if (n % i === 0) {
            count += i === n / i ? 1 : 2;
        }
    }
    return count;
}

/**
 * Returns the number of common positive factors between two integers `a` and `b`.
 * Leverages the GCD and divisor-counting logic to compute the result efficiently.
 *
 * @param a - First positive integer
 * @param b - Second positive integer
 * @returns The number of common factors of a and b
 * @throws TypeError if either input is invalid
 *
 * @complexity O(log min(a, b) + √gcd(a, b))
 */
export function countCommonFactors(a: number, b: number): number {
    if (!Number.isInteger(a) || !Number.isInteger(b) || a <= 0 || b <= 0) {
        throw TypeError("inputs should be positive integers");
    }
    return countDivisors(gcd(a, b));
}
