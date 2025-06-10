/**
 * Merges two sorted integer arrays nums1 and nums2 into nums1 as one sorted array in-place (LeetCode 88).
 *
 * The first m elements of nums1 are the elements to be merged, and the last n elements are set to 0 and should be ignored.
 * The nums2 array has exactly n elements. After merging, nums1 contains all elements from both arrays in non-decreasing order.
 *
 * Time Complexity: O(m + n)
 * Space Complexity: O(1) (in-place)
 *
 * @param nums1 - The first integer array with a length of m + n, where the first m elements are valid and the rest are placeholders.
 * @param m - The number of valid elements in nums1.
 * @param nums2 - The second integer array with n elements.
 * @param n - The number of elements in nums2.
 *
 * @returns void. The merged result is stored in nums1 in-place.
 */
export function mergeSortedArrayInPlace(
    nums1: number[],
    m: number,
    nums2: number[],
    n: number
): void {
    let p1 = m - 1;
    let p2 = n - 1;
    let i = m + n - 1;

    while (p2 >= 0) {
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[i--] = nums1[p1--];
        } else {
            nums1[i--] = nums2[p2--];
        }
    }
}
