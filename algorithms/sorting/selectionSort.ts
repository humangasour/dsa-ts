/**
 * Selection Sort Algorithm
 * @param arr - Array of numbers to be sorted in place.
 * @throws {TypeError} If input is not a valid array of numbers.
 *
 * Time Complexity - O(n^2)
 * Space Complexity - O(1)
 */
export function selectionSort(arr: number[]): void {
    if (!Array.isArray(arr) || arr.some((item) => typeof item !== "number")) {
        throw new TypeError("Input must be an array of numbers.");
    }

    const n = arr.length;

    for (let i = 0; i < n; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
}
