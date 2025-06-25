/**
 * Problem: Subarray Sum Equals K
 *
 * Given an array of integers `nums` and an integer `k`, return the total number
 * of **contiguous subarrays** whose sum equals to `k`.
 *
 * Constraints:
 * - 1 <= nums.length <= 2 * 10^4
 * - -1000 <= nums[i] <= 1000
 * - -10^7 <= k <= 10^7
 */

/**
 * Brute-force approach using nested loops.
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums - Array of integers
 * @param {number} k - Target subarray sum
 * @returns {number} - Number of contiguous subarrays whose sum is k
 */
export function subarraySumBruteForce(nums: number[], k: number): number {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum === k) {
                count++;
            }
        }
    }

    return count;
}

/**
 * Optimized approach using prefix sums and a hashmap.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums - Array of integers
 * @param {number} k - Target subarray sum
 * @returns {number} - Number of contiguous subarrays whose sum is k
 */
export function subarraySumOptimized(nums: number[], k: number): number {
    const map = new Map<number, number>();
    map.set(0, 1); // Base case for subarrays that start at index 0

    let count = 0;
    let currSum = 0;

    for (const num of nums) {
        currSum += num;

        const prefixSum = currSum - k;
        if (map.has(prefixSum)) {
            count += map.get(prefixSum)!;
        }

        map.set(currSum, (map.get(currSum) ?? 0) + 1);
    }

    return count;
}
