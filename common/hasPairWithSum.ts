// PROBLEM:
// given an array and a total
// check if any two numbers in the array add up to be equal to the total
// return true if yes
// return false if not

// const array1 = [1, 3, 4, 6]; // 8
// const array2 = [1, 2, 5, 7]; // 12

/**
 *
 * @param {number[]} arr - Array of integers.
 * @param {number} total - Target sum.
 * @returns {boolean} - Returns true if any two distinct numbers in the array sum to the target; otherwise, false.
 *
 * @throws {TypeError} - If input is not an array of integers.
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
export const hasPairWithSumBrute = (arr: number[], total: number): boolean => {
    if (!Array.isArray(arr)) {
        throw new TypeError("Input must be an array of integers.");
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === total) return true;
        }
    }

    return false;
};

/**
 *
 * @param {number[]} arr - Array of integers.
 * @param {number} total - Target sum.
 * @returns {boolean} - Returns true if any two distinct numbers in the array sum to the target; otherwise, false.
 *
 * @throws {TypeError} - If input is not an array of integers.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
export const hasPairWithSum = (arr: number[], total: number): boolean => {
    if (!Array.isArray(arr)) {
        throw new TypeError("Input must be an array of integers.");
    }

    const nums = new Set<number>();

    for (const num of arr) {
        const complement = total - num;
        if (nums.has(complement)) return true;
        nums.add(num);
    }

    return false;
};

/**
 *
 * @param {number[]} arr - Array of sorted integers.
 * @param {number} total - Target sum.
 * @returns {boolean} - Returns true if any two distinct numbers in the array sum to the target; otherwise, false.
 *
 * @throws {TypeError} - If input is not an array of integers.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
export const hasPairWithSumSorted = (arr: number[], total: number): boolean => {
    if (!Array.isArray(arr)) {
        throw new TypeError("Input must be an array of integers.");
    }

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];

        if (sum === total) {
            return true;
        } else if (sum > total) {
            right--;
        } else {
            left++;
        }
    }
    return false;
};
