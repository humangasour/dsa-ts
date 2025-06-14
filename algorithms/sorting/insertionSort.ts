/**
 * Insertion Sort Algorithm
 * @param arr - Array of numbers to be sorted in place.
 * @throws {TypeError} If input is not a valid array of numbers.
 *
 * Time Complexity - O(n^2)
 * Space Complexity - O(1)
 */
export function insertionSort(arr: number[]): void {
    if (!Array.isArray(arr) || arr.some((item) => typeof item !== "number")) {
        throw new TypeError("Input must be an array of numbers.");
    }

    for (let i = 1; i < arr.length; i++) {
        const key = arr[i]; // the element we need to place at the right index
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }
}
