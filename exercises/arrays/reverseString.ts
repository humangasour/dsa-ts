// Reverse string
// Input: sentence {string} -> "hey, what's up"
// Output: {string} -> "pu s'tahw ,yeh"

/**
 * Reverses a given string by popping characters from an array.
 *
 * @param {string} sentence - The string to be reversed.
 * @returns {string} The reversed string.
 * @throws {TypeError} If the input is not a string.
 */
export const reverseString = (sentence: string): string => {
    if (typeof sentence !== "string") {
        throw new TypeError("Input should be a string");
    }

    if (sentence.length === 0) return sentence;

    const arr = Array.from(sentence);
    let reverseStr = "";

    while (arr.length > 0) {
        const removedChar = arr.pop();
        if (removedChar !== undefined) {
            reverseStr += removedChar;
        }
    }

    return reverseStr;
};

/**
 * Reverses a given string using the two-pointer technique.
 *
 * @param {string} sentence - The string to be reversed.
 * @returns {string} The reversed string.
 * @throws {TypeError} If the input is not a string.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
export const reverseStringTwoPointer = (sentence: string): string => {
    if (typeof sentence !== "string") {
        throw new TypeError("Input should be a string");
    }

    if (sentence.length === 0) return sentence;

    const arr = Array.from(sentence);
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr.join("");
};

/**
 * Reverses a given string using recursion.
 *
 * @param {string} str - The string to be reversed.
 * @returns {string} The reversed string.
 * @throws {TypeError} If the input is not a string.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
export const reverseStringRecursive = (str: string): string => {
    if (typeof str !== "string") {
        throw new TypeError("Input should be a string");
    }

    if (str.length <= 1) return str;

    return reverseStringRecursive(str.slice(1)) + str[0];
};

/**
 * Reverses a given string using recursion with tail call optimization.
 *
 * @param {string} str - The string to be reversed.
 * @returns {string} The reversed string.
 * @throws {TypeError} If the input is not a string.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
export const reverseStringTailRecursive = (str: string): string => {
    if (typeof str !== "string") {
        throw new TypeError("Input should be a string");
    }

    if (str.length <= 1) return str;

    const helper = (remaining: string, acc: string): string => {
        if (remaining.length === 0) return acc;
        return helper(remaining.slice(1), remaining[0] + acc);
    };

    return helper(str.slice(1), "");
};
