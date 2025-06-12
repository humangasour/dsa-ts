/**
 * Problem: First Recurring Character in an Array
 *
 * Given an array of numbers, return the first number that appears more than once.
 * If there are no duplicates, return null.
 *
 * Examples:
 *   firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1]) => 2
 *   firstRecurringCharacter([1, 2, 3, 4]) => null
 *
 * Constraints:
 * - Time Complexity: Aim for O(n)
 * - Space Complexity: O(n)
 * - The array may be empty or contain only unique elements.
 *
 * Language: TypeScript
 */

/**
 * Returns the first recurring number in the given array.
 *
 * @param {number[]} arr - The input array of numbers to search.
 * @returns {(number | null)} - The first recurring number, or null if none found.
 * @throws {TypeError} - If the input is not a valid array of numbers.
 */
export function firstRecurringCharacter(arr: number[]): number | null {
    if (!Array.isArray(arr) || arr.some((item) => typeof item !== "number")) {
        throw new TypeError("Input must be an array of numbers.");
    }

    const characters: Set<number> = new Set();

    for (const item of arr) {
        if (characters.has(item)) {
            return item;
        }
        characters.add(item);
    }

    return null;
}

// Example usage:
// console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1])); // Should output 2
// console.log(firstRecurringCharacter([1, 2, 3, 4]));          // Should output null
