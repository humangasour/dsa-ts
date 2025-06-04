// Contains Common Items
// Problem: Given two arrays, create a function that lets the user know (true/false) whether these two arrays contain any common items
//
// Example:
// array1 = ['a', 'b', 'c', 'd']
// array2 = ['x', 'y', 'z']
// should return False
// ----------------
// array1 = ['a', 'b', 'c', 'd']
// array2 = ['x', 'y', 'c']
// should return True

/**
 * Determines if two arrays of strings share at least one common item.
 *
 * @param {string[]} array1 - First array of strings.
 * @param {string[]} array2 - Second array of strings.
 * @returns {boolean} - Returns true if there is at least one common item; otherwise, false.
 *
 * @throws {TypeError} - If either input is not an array.
 *
 * Time Complexity: O(n * m) where n = array1.length and m = array2.length
 * Space Complexity: O(1)
 */
export const containsCommonItemsBrute = (
    array1: string[],
    array2: string[]
): boolean => {
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        throw new TypeError("Both inputs must be arrays of strings.");
    }

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                return true;
            }
        }
    }

    return false;
};

/**
 * Determines if two arrays of strings share at least one common item.
 *
 * @param {string[]} array1 - First array of strings.
 * @param {string[]} array2 - Second array of strings.
 * @returns {boolean} - Returns true if there is at least one common item; otherwise, false.
 *
 * @throws {TypeError} - If either input is not an array.
 *
 * Time Complexity: O(n + m) where n = array1.length and m = array2.length
 * Space Complexity: O(n) where n = length of itemMap
 */
export const containsCommonItemsSet = (
    array1: string[],
    array2: string[]
): boolean => {
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        throw new TypeError("Both inputs must be arrays of strings.");
    }

    if (array1.length === 0 && array2.length === 0) return false;

    const itemMap = new Set<string>(array1); // O(n)
    for (const item of array2) {
        if (itemMap.has(item)) return true;
    }
    return false;
};
