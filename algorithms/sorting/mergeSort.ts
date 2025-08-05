/**
 * Recursively sorts an array using the merge sort algorithm.
 *
 * @param {number[]} arr - The array to be sorted.
 * @returns {number[]} A new sorted array.
 * @throws {TypeError} If the input is not an array of numbers.
 */
export function mergeSort(arr: number[]): number[] {
  if (!Array.isArray(arr) || arr.some((num) => typeof num !== "number")) {
    throw new TypeError("Input must be an array of numbers.");
  }

  if (arr.length <= 1) return arr; // Base case

  const mid = Math.floor(arr.length / 2);

  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

/**
 * Merges two sorted arrays into one sorted array.
 * @param {number[]} arr1 - The first sorted array.
 * @param {number[]} arr2 - The second sorted array.
 */
function merge(arr1: number[], arr2: number[]): number[] {
  let p1 = 0;
  let p2 = 0;
  const merged: number[] = [];

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] <= arr2[p2]) {
      merged.push(arr1[p1]);
      p1++;
    } else {
      merged.push(arr2[p2]);
      p2++;
    }
  }
  while (p1 < arr1.length) {
    merged.push(arr1[p1++]);
  }
  while (p2 < arr2.length) {
    merged.push(arr2[p2++]);
  }
  return merged;
}
