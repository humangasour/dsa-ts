/**
 * Calculates the factorial of a given non-negative integer.
 * @param {number} value - The number to calculate the factorial of.
 * @returns {number} The factorial of the number.
 * @throws {TypeError} If input is not a non-negative integer.
 */
export const factorialIterative = (value: number): number => {
    if (!Number.isInteger(value) || value < 0) {
        throw new TypeError("Input must be a non-negative integer.");
    }

    if (value === 0 || value === 1) return 1;

    let factorial: number = 1;
    for (let i = 2; i <= value; i++) {
        factorial *= i;
    }

    return factorial;
};

/**
 * Calculates the factorial of a given non-negative integer recursively.
 * @param {number} value - The number to calculate the factorial of.
 * @returns {number} The factorial of the number.
 * @throws {TypeError} If input is not a non-negative integer.
 */
export const factorialRecursive = (value: number): number => {
    if (!Number.isInteger(value) || value < 0) {
        throw new TypeError("Input must be a non-negative integer.");
    }

    if (value === 0 || value === 1) return 1;
    return value * factorialRecursive(value - 1);
};

/**
 * Calculates the factorial of a given non-negative integer recursively with TCO.
 * @param {number} value - The number to calculate the factorial of.
 * @returns {number} The factorial of the number.
 * @throws {TypeError} If input is not a non-negative integer.
 */
export const factorialTailRecursive = (value: number): number => {
    if (!Number.isInteger(value) || value < 0) {
        throw new TypeError("Input must be a non-negative integer.");
    }

    const helper = (n: number, acc: number) => {
        if (n === 0) return acc;
        return helper(n - 1, acc * n);
    };

    return helper(value, 1);
};
