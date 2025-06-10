/**
 * 📘 Problem: Rotate Array
 *
 * Given an array, rotate the array to the right by k steps.
 * The rotation should be done in-place if possible.
 *
 * Examples:
 * rotate([1,2,3,4,5,6,7], 3) → [5,6,7,1,2,3,4]
 * rotate([-1,-100,3,99], 2) → [3,99,-1,-100]
 *
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - -10^9 <= nums[i] <= 10^9
 * - 0 <= k <= 10^9
 */

/**
 * 🧪 Brute-force approach: Rotate one step at a time.
 * Time: O(n * k), Space: O(1)
 */
export function rotateBrute(nums: number[], k: number): void {
    const n = nums.length;
    k = k % n;

    for (let step = 0; step < k; step++) {
        const last = nums[n - 1];
        for (let i = n - 1; i > 0; i--) {
            nums[i] = nums[i - 1];
        }
        nums[0] = last;
    }
}

/**
 * 🧠 Extra space using index mapping.
 * Time: O(n), Space: O(n)
 */
export function rotateExtraSpace(nums: number[], k: number): void {
    const n = nums.length;
    k = k % n;
    const temp = new Array(n);

    for (let i = 0; i < n; i++) {
        const newIndex = (i + k) % n;
        temp[newIndex] = nums[i];
    }

    for (let i = 0; i < n; i++) {
        nums[i] = temp[i];
    }
}

/**
 * ⚡ In-place reversal approach.
 * Time: O(n), Space: O(1)
 */
export function rotateReverse(nums: number[], k: number): void {
    const n = nums.length;
    k = k % n;

    function reverse(start: number, end: number) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }

    reverse(0, n - 1); // Reverse the whole array
    reverse(0, k - 1); // Reverse first k elements
    reverse(k, n - 1); // Reverse the rest
}

/**
 * 🔁 In-place cycle replacement approach.
 * Time: O(n), Space: O(1)
 */
export function rotateCycle(nums: number[], k: number): void {
    const n = nums.length;
    k = k % n;
    if (k === 0 || n <= 1) return;

    let count = 0;
    let start = 0;

    while (count < n) {
        let current = start;
        let prev = nums[start];

        do {
            const next = (current + k) % n;
            const temp = nums[next];
            nums[next] = prev;
            prev = temp;
            current = next;
            count++;
        } while (current !== start);

        start++;
    }
}
