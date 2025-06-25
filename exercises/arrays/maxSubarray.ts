/**
 * Problem: Maximum Subarray
 *
 * Given an integer array nums, find the subarray with the largest sum,
 * and return its sum.
 *
 * A subarray is a contiguous part of the array.
 *
 * Example:
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: The subarray [4,-1,2,1] has the largest sum = 6.
 *
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - -10^4 <= nums[i] <= 10^4
 */

/**
 * Brute-force approach to find the maximum subarray sum.
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums - Array of integers
 * @returns {number} Maximum sum of any contiguous subarray
 */
export function maxSubArrayBruteForce(nums: number[]): number {
    let maxSum = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        let localSum = 0;
        for (let j = i; j < nums.length; j++) {
            localSum += nums[j];
            maxSum = Math.max(maxSum, localSum);
        }
    }

    return maxSum;
}

/**
 * Kadane's algorithm to find the maximum subarray sum in linear time.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums - Array of integers
 * @returns {number} Maximum sum of any contiguous subarray
 */
export function maxSubArrayKadane(nums: number[]): number {
    let globalMax = nums[0];
    let localMax = nums[0];

    for (let i = 1; i < nums.length; i++) {
        localMax = Math.max(nums[i], localMax + nums[i]);
        globalMax = Math.max(globalMax, localMax);
    }

    return globalMax;
}

/**
 * Kadane's algorithm to find the maximum subarray sum in linear time.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums - Array of integers
 * @returns {number} Maximum sum of any contiguous subarray
 */
export function maxSubArrayKadaneSubarray(nums: number[]): number[] {
    let globalMax = nums[0];
    let localMax = nums[0];
    let start = 0;
    let end = 0;
    let tempStart = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > localMax + nums[i]) {
            localMax = nums[i];
            tempStart = i;
        } else {
            localMax += nums[i];
        }

        if (localMax > globalMax) {
            globalMax = localMax;
            start = tempStart;
            end = i;
        }
    }

    return nums.slice(start, end + 1);
}

/**
 * Divide and conquer approach to find the maximum subarray sum.
 *
 * Time Complexity: O(n log n)
 * Space Complexity: O(log n) due to recursion stack
 *
 * @param {number[]} nums - Array of integers
 * @returns {number} Maximum sum of any contiguous subarray
 */
export function maxSubArrayDivideAndConquer(nums: number[]): number {
    if (nums.length === 0) {
        throw new Error("Input array must contain at least one element.");
    }

    /**
     * Recursively finds the maximum subarray sum in the range [low..high].
     *
     * @param {number} low - Start index of subarray
     * @param {number} high - End index of subarray
     * @returns {number} Maximum subarray sum in the given range
     */
    function helper(low: number, high: number): number {
        if (low === high) {
            return nums[low];
        }

        const mid = Math.floor((low + high) / 2);
        return Math.max(
            helper(low, mid),
            helper(mid + 1, high),
            maxCrossingSubarray(low, mid, high)
        );
    }

    /**
     * Computes the maximum subarray sum that crosses the midpoint.
     *
     * @param {number} low - Start index of range
     * @param {number} mid - Midpoint index
     * @param {number} high - End index of range
     * @returns {number} Maximum sum of subarray crossing the midpoint
     */
    function maxCrossingSubarray(
        low: number,
        mid: number,
        high: number
    ): number {
        let leftSum = -Infinity;
        let leftTotal = 0;
        for (let i = mid; i >= low; i--) {
            leftTotal += nums[i];
            leftSum = Math.max(leftSum, leftTotal);
        }

        let rightSum = -Infinity;
        let rightTotal = 0;
        for (let i = mid + 1; i <= high; i++) {
            rightTotal += nums[i];
            rightSum = Math.max(rightSum, rightTotal);
        }

        return leftSum + rightSum;
    }

    return helper(0, nums.length - 1);
}
