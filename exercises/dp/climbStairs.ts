/**
 * Leetcode 70: Climbing Stairs
 *
 * Problem:
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps.
 * Return the number of distinct ways to climb to the top.
 *
 * Constraints:
 * 1 <= n <= 45
 */

/**
 * Top-down recursive approach with memoization.
 * Uses a helper function with a shared memo object.
 *
 * Time Complexity: O(n) — each value from 0 to n is computed once.
 * Space Complexity: O(n) — memoization object + call stack depth.
 *
 * @param {number} n - Total number of steps to climb.
 * @returns {number} Number of distinct ways to climb to the top.
 */
export function climbStairsMemo(n: number): number {
    if (n < 1 || n > 45) throw new Error("Input must be between 1 and 45.");

    const memo: Record<number, number> = {};

    function countWays(k: number): number {
        if (k === 0) return 1;
        if (k === 1) return 1;
        if (memo[k] !== undefined) return memo[k];

        memo[k] = countWays(k - 1) + countWays(k - 2);
        return memo[k];
    }

    return countWays(n);
}

/**
 * Bottom-up dynamic programming using a DP array.
 *
 * Time Complexity: O(n) — fills a DP array from 2 to n.
 * Space Complexity: O(n) — array of size n + 1.
 *
 * @param {number} n - Total number of steps to climb.
 * @returns {number} Number of distinct ways to climb to the top.
 */
export function climbStairsDP(n: number): number {
    if (n < 1 || n > 45) throw new Error("Input must be between 1 and 45.");
    if (n === 1) return 1;

    const dp: number[] = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

/**
 * Bottom-up dynamic programming with constant space.
 * Only tracks the last two computed values.
 *
 * Time Complexity: O(n) — iterates from 2 to n.
 * Space Complexity: O(1) — constant variables used.
 *
 * @param {number} n - Total number of steps to climb.
 * @returns {number} Number of distinct ways to climb to the top.
 */
export function climbStairsOptimized(n: number): number {
    if (n < 1 || n > 45) throw new Error("Input must be between 1 and 45.");
    if (n === 1) return 1;

    let prev2 = 1;
    let prev1 = 1;
    let current = 0;

    for (let i = 2; i <= n; i++) {
        current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }

    return current;
}
