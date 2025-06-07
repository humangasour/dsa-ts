/**
 * Merges two sorted arrays of numbers into a single sorted array.
 *
 * This function takes two arrays, `arr1` and `arr2`, both sorted in ascending order,
 * and returns a new array containing all elements from both input arrays, also sorted in ascending order.
 *
 * Time Complexity: O(n + m), where n and m are the lengths of arr1 and arr2.
 * Space Complexity: O(n + m), for the output array.
 *
 * @param arr1 - The first sorted array of numbers.
 * @param arr2 - The second sorted array of numbers.
 * @returns A new sorted array containing all elements from `arr1` and `arr2`.
 */
export const mergeSortedArrays = (arr1: number[], arr2: number[]): number[] => {
    const merged: number[] = [];
    let i = 0,
        j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            merged.push(arr1[i++]);
            continue;
        }
        merged.push(arr2[j++]);
    }

    while (i < arr1.length) merged.push(arr1[i++]);
    while (j < arr2.length) merged.push(arr2[j++]);

    return merged;
};
