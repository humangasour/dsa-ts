import { expect } from "chai";
import { bubbleSort } from "./bubbleSort";

describe("bubbleSort", () => {
    it("should sort an unsorted array", () => {
        const arr = [5, 2, 9, 1, 5, 6];
        bubbleSort(arr);
        expect(arr).to.deep.equal([1, 2, 5, 5, 6, 9]);
    });

    it("should handle an already sorted array", () => {
        const arr = [1, 2, 3, 4, 5];
        bubbleSort(arr);
        expect(arr).to.deep.equal([1, 2, 3, 4, 5]);
    });

    it("should handle a reverse sorted array", () => {
        const arr = [5, 4, 3, 2, 1];
        bubbleSort(arr);
        expect(arr).to.deep.equal([1, 2, 3, 4, 5]);
    });

    it("should handle an array with duplicates", () => {
        const arr = [3, 1, 2, 3, 1];
        bubbleSort(arr);
        expect(arr).to.deep.equal([1, 1, 2, 3, 3]);
    });

    it("should handle an array with negative numbers", () => {
        const arr = [0, -1, 3, -2, 2];
        bubbleSort(arr);
        expect(arr).to.deep.equal([-2, -1, 0, 2, 3]);
    });

    it("should handle a single-element array", () => {
        const arr = [7];
        bubbleSort(arr);
        expect(arr).to.deep.equal([7]);
    });

    it("should handle an empty array", () => {
        const arr: number[] = [];
        bubbleSort(arr);
        expect(arr).to.deep.equal([]);
    });

    it("should throw an error if input is not an array", () => {
        expect(() => bubbleSort(null as unknown as number[])).to.throw(
            TypeError
        );
        expect(() => bubbleSort(undefined as unknown as number[])).to.throw(
            TypeError
        );
        expect(() => bubbleSort(123 as unknown as number[])).to.throw(
            TypeError
        );
    });

    it("should throw an error if array contains non-numeric values", () => {
        expect(() => bubbleSort([1, "2", 3] as unknown as number[])).to.throw(
            TypeError
        );
    });
});
