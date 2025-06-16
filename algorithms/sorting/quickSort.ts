/**
 * Sorts an array using the Quick Sort algorithm (not in-place).
 *
 * @param {number[]} arr - The array of numbers to sort.
 * @returns {number[]} A new sorted array.
 * @throws {TypeError} If input is not an array of numbers.
 *
 * Time Complexity - O(nlogn) Avg
 * Space Complexity - O(n)
 */
export function quickSort(arr: number[]): number[] {
    if (!Array.isArray(arr) || arr.some((num) => typeof num !== "number")) {
        throw new TypeError("Input must be an array of numbers.");
    }

    if (arr.length <= 1) return arr;

    const pivot = arr[Math.floor(Math.random() * arr.length)];

    const left: number[] = [];
    const right: number[] = [];
    const middle: number[] = [];

    for (const num of arr) {
        if (num < pivot) {
            left.push(num);
        } else if (num > pivot) {
            right.push(num);
        } else {
            middle.push(num);
        }
    }

    return [...quickSort(left), ...middle, ...quickSort(right)];
}
