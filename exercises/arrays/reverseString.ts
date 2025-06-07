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
        swap(arr, left, right);
        left++;
        right--;
    }

    return arr.join("");
};

/**
 * Swaps two elements in an array.
 *
 * @param {T[]} arr - The array containing the elements to swap.
 * @param {number} i - The index of the first element.
 * @param {number} j - The index of the second element.
 */
function swap<T>(arr: T[], i: number, j: number): void {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
