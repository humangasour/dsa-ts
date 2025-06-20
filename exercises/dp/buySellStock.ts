/**
 * Leetcode 121: Best Time to Buy and Sell Stock
 *
 * Problem Statement:
 * You are given an array 'prices' where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock
 * and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction.
 * If no profit is possible, return 0.
 *
 * Constraints:
 * - 1 <= prices.length <= 10^5
 * - 0 <= prices[i] <= 10^4
 */

/**
 * Greedy One-Pass Solution
 *
 * This approach maintains the minimum price seen so far while iterating through the prices,
 * and at each step calculates the potential profit if we sold today.
 * It updates the maximum profit whenever a better profit is found.
 *
 * Time Complexity: O(n) - single pass through the array
 * Space Complexity: O(1) - uses constant space
 *
 * @param {number[]} prices - Array of daily stock prices
 * @returns {number} - Maximum achievable profit
 * @throws {TypeError} - If input is not a valid array of non-negative integers
 */
function maxProfitGreedy(prices: number[]): number {
    if (
        !Array.isArray(prices) ||
        prices.some((p) => typeof p !== "number" || p < 0)
    ) {
        throw new TypeError(
            "Prices should be an array of non-negative integers."
        );
    }
    if (prices.length < 2) return 0;

    let minBuy = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minBuy) {
            minBuy = prices[i];
        } else {
            profit = Math.max(profit, prices[i] - minBuy);
        }
    }

    return profit;
}

/**
 * Dynamic Programming Approach
 *
 * This solution uses two variables to track:
 * - `hold`: The best profit if you bought a stock up to this day (represented as a negative value)
 * - `sold`: The best profit if you've sold the stock (or never bought)
 *
 * For each day:
 * - Update `hold` to reflect the best (lowest) price to buy
 * - Update `sold` to reflect the max profit if you sold today
 *
 * Time Complexity: O(n) - one pass through prices
 * Space Complexity: O(1) - constant space for state tracking
 *
 * @param {number[]} prices - Array of daily stock prices
 * @returns {number} - Maximum achievable profit
 * @throws {TypeError} - If input is not a valid array of non-negative integers
 */
function maxProfitDP(prices: number[]): number {
    if (
        !Array.isArray(prices) ||
        prices.some((p) => typeof p !== "number" || p < 0)
    ) {
        throw new TypeError(
            "Prices should be an array of non-negative integers."
        );
    }
    if (prices.length < 2) return 0;

    let hold = -prices[0];
    let sold = 0;

    for (let i = 1; i < prices.length; i++) {
        hold = Math.max(hold, -prices[i]);
        sold = Math.max(sold, hold + prices[i]);
    }

    return sold;
}

// --- You can export the functions if using this in a module system ---
export { maxProfitGreedy, maxProfitDP };
