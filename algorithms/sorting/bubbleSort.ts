/**
 *  Bubble Sort Algorithm
 * @param arr  - Array of numbers to be sorted in place.
 * @throws  {TypeError} - If the input is not a valid array of numbers.
 */
export function bubbleSort(arr: number[]): void {
    if (!Array.isArray(arr) || arr.some((item) => typeof item !== "number")) {
        throw new TypeError("Input must be an array of numbers.");
    }

    for (let i = 0; i < arr.length; i++) {
        let swapped = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
}
