/**
 * Moves all zeroes to the end of the array while maintaining the order of non-zero elements.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums - The array to be modified in-place.
 * @returns {void}
 */
export function moveZeroes(nums: number[]): void {
    let nonZeroIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            if (i !== nonZeroIndex) {
                [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]];
            }
            nonZeroIndex++;
        }
    }
}
