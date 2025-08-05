/**
 * Problem: Next Smaller Element Distance
 *
 * Given an array of integers, for each element, find the index distance
 * to the next smaller element that appears *after* it in the array.
 * If there is no such element, return 0 for that index.
 *
 * Example:
 * Input:  [5, 2, 8, 6, 7, 4]
 * Output: [1, 0, 1, 2, 1, 0]
 *
 * Explanation:
 * - 5 → next smaller is 2 at index 1 → distance = 1
 * - 2 → no smaller to the right → 0
 * - 8 → next smaller is 6 at index 3 → distance = 1
 * - 6 → next smaller is 4 at index 5 → distance = 2
 * - 7 → next smaller is 4 at index 5 → distance = 1
 * - 4 → no smaller to the right → 0
 */

/**
 * Returns an array where each index contains the distance to the next smaller element to the right.
 * If no such element exists, the value is 0.
 *
 * @param nums - An array of integers
 * @returns An array of distances to the next smaller element
 */
function nextSmallerElementDistances(nums: number[]): number[] {
    // Your implementation goes here
    const stack: number[] = [];
    const result: number[] = new Array(nums.length).fill(0);

    for (let i = nums.length - 1; i >= 0; i--) {
        while (stack.length && nums[i] <= nums[stack[stack.length - 1]]) {
            stack.pop();
        }
        if (stack.length) {
            result[i] = stack[stack.length - 1] - i;
        }
        stack.push(i);
    }

    return result;
}

// stack = [5, 4]
// i = 4 -> num = 7 -> 7 < 4

// Example usage:
const input = [5, 2, 8, 6, 7, 4];
const output = nextSmallerElementDistances(input);
console.log(output); // Expected: [1, 0, 1, 2, 1, 0]
