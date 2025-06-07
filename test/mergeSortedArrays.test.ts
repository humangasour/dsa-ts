import { expect } from "chai";
import { mergeSortedArrays } from "../exercises/arrays/mergeSortedArrays";

describe("mergeSortedArrays", () => {
    it("should merge two sorted arrays", () => {
        const arr1 = [1, 3, 5];
        const arr2 = [2, 4, 6];
        expect(mergeSortedArrays(arr1, arr2)).to.deep.equal([1, 2, 3, 4, 5, 6]);
    });

    it("should handle one empty array", () => {
        expect(mergeSortedArrays([], [1, 2, 3])).to.deep.equal([1, 2, 3]);
        expect(mergeSortedArrays([1, 2, 3], [])).to.deep.equal([1, 2, 3]);
    });

    it("should handle both arrays empty", () => {
        expect(mergeSortedArrays([], [])).to.deep.equal([]);
    });

    it("should handle arrays with duplicate values", () => {
        expect(mergeSortedArrays([1, 2, 2], [2, 3])).to.deep.equal([
            1, 2, 2, 2, 3,
        ]);
    });

    it("should handle arrays with negative numbers", () => {
        expect(mergeSortedArrays([-5, -2, 0], [-3, 1, 2])).to.deep.equal([
            -5, -3, -2, 0, 1, 2,
        ]);
    });

    it("should handle arrays with all elements equal", () => {
        expect(mergeSortedArrays([2, 2, 2], [2, 2])).to.deep.equal([
            2, 2, 2, 2, 2,
        ]);
    });

    it("should handle one array much longer than the other", () => {
        expect(
            mergeSortedArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [5])
        ).to.deep.equal([1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10]);
    });

    it("should handle arrays with interleaved values", () => {
        expect(mergeSortedArrays([1, 4, 7], [2, 3, 5, 6, 8])).to.deep.equal([
            1, 2, 3, 4, 5, 6, 7, 8,
        ]);
    });

    it("should handle arrays with non-overlapping ranges", () => {
        expect(mergeSortedArrays([1, 2, 3], [10, 11, 12])).to.deep.equal([
            1, 2, 3, 10, 11, 12,
        ]);
    });

    it("should handle arrays with only one element each", () => {
        expect(mergeSortedArrays([1], [2])).to.deep.equal([1, 2]);
        expect(mergeSortedArrays([2], [1])).to.deep.equal([1, 2]);
    });
});
