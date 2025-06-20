/**
 * Leetcode 198: House Robber
 * -----------------------------------------
 * Problem Statement:
 * You are a professional robber planning to rob houses along a street.
 * Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them
 * is that adjacent houses have security systems connected and it will automatically contact the police
 * if two adjacent houses were broken into on the same night.
 *
 * Given an integer array nums representing the amount of money of each house,
 * return the maximum amount of money you can rob tonight **without alerting the police**.
 *
 * Constraints:
 * - 1 <= nums.length <= 100
 * - 0 <= nums[i] <= 400
 */

/**
 * Top-Down DP with Memoization (Recursive Approach)
 *
 * Time Complexity: O(n) — each subproblem is solved only once.
 * Space Complexity: O(n) — recursion stack + memoization map.
 *
 * @param {number[]} nums - Array of non-negative integers representing house money.
 * @returns {number} - Maximum amount that can be robbed without robbing adjacent houses.
 */
function robMemo(nums: number[]): number {
    const memo: Record<number, number> = {};

    function dp(i: number): number {
        if (i in memo) return memo[i];

        if (i === 0) {
            memo[0] = nums[0];
        } else if (i === 1) {
            memo[1] = Math.max(nums[0], nums[1]);
        } else {
            memo[i] = Math.max(dp(i - 1), dp(i - 2) + nums[i]);
        }

        return memo[i];
    }

    if (nums.length === 0) return 0;
    return dp(nums.length - 1);
}

/**
 * Bottom-Up DP with O(1) Space Optimization
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums - Array of non-negative integers representing house money.
 * @returns {number} - Maximum amount that can be robbed without robbing adjacent houses.
 */
function robOptimized(nums: number[]): number {
    const length = nums.length;
    if (length === 0) return 0;
    if (length === 1) return nums[0];

    let prev1: number = nums[0]; // Max up to i - 2
    let prev2: number = Math.max(nums[0], nums[1]); // Max up to i - 1

    for (let i = 2; i < length; i++) {
        const currentMax = Math.max(prev2, prev1 + nums[i]);
        prev1 = prev2;
        prev2 = currentMax;
    }

    return prev2;
}

// Exporting functions if used as a module
export { robMemo, robOptimized };
