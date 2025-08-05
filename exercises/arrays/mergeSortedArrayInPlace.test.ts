
import { mergeSortedArrayInPlace } from "./mergeSortedArrayInPlace";

describe("mergeSortedArrayInPlace", () => {
    it("should merge two sorted arrays in place", () => {
        const arr1 = [1, 3, 5, 0, 0, 0, 0];
        const arr2 = [2, 5, 6, 7];
        mergeSortedArrayInPlace(arr1, 3, arr2, 4);
        expect(arr1).toEqual([1, 2, 3, 5, 5, 6, 7]);
    });

    it("should handle merging when nums2 is empty", () => {
        const arr1 = [1, 2, 3];
        const arr2: number[] = [];
        mergeSortedArrayInPlace(arr1, 3, arr2, 0);
        expect(arr1).toEqual([1, 2, 3]);
    });

    it("should handle merging when nums1 is empty (all zeros)", () => {
        const arr1 = [0, 0, 0];
        const arr2 = [2, 5, 6];
        mergeSortedArrayInPlace(arr1, 0, arr2, 3);
        expect(arr1).toEqual([2, 5, 6]);
    });

    it("should handle merging with duplicate values", () => {
        const arr1 = [1, 2, 3, 0, 0, 0];
        const arr2 = [2, 2, 3];
        mergeSortedArrayInPlace(arr1, 3, arr2, 3);
        expect(arr1).toEqual([1, 2, 2, 2, 3, 3]);
    });

    it("should handle merging when all elements in nums2 are less than nums1", () => {
        const arr1 = [4, 5, 6, 0, 0, 0];
        const arr2 = [1, 2, 3];
        mergeSortedArrayInPlace(arr1, 3, arr2, 3);
        expect(arr1).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it("should handle merging when all elements in nums2 are greater than nums1", () => {
        const arr1 = [1, 2, 3, 0, 0, 0];
        const arr2 = [4, 5, 6];
        mergeSortedArrayInPlace(arr1, 3, arr2, 3);
        expect(arr1).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it("should handle merging when both arrays are empty", () => {
        const arr1: number[] = [];
        const arr2: number[] = [];
        mergeSortedArrayInPlace(arr1, 0, arr2, 0);
        expect(arr1).toEqual([]);
    });
});
