
import { mergeSort } from "./mergeSort";

describe("mergeSort()", () => {
    it("should sort an already sorted array", () => {
        const input = [1, 2, 3, 4, 5];
        const expected = [1, 2, 3, 4, 5];
        expect(mergeSort(input)).toEqual(expected);
    });

    it("should sort an unsorted array", () => {
        const input = [5, 3, 1, 4, 2];
        const expected = [1, 2, 3, 4, 5];
        expect(mergeSort(input)).toEqual(expected);
    });

    it("should handle duplicate values", () => {
        const input = [4, 2, 4, 1, 2];
        const expected = [1, 2, 2, 4, 4];
        expect(mergeSort(input)).toEqual(expected);
    });

    it("should handle negative numbers", () => {
        const input = [-3, -1, -7, 0, 2];
        const expected = [-7, -3, -1, 0, 2];
        expect(mergeSort(input)).toEqual(expected);
    });

    it("should return an empty array when given an empty array", () => {
        expect(mergeSort([])).toEqual([]);
    });

    it("should return the same single-element array", () => {
        expect(mergeSort([42])).toEqual([42]);
    });

    it("should throw an error for non-array input", () => {
        // @ts-expect-error Testing invalid input
        expect(() => mergeSort("not an array")).toThrow(TypeError);
    });

    it("should throw an error for array with non-number values", () => {
        // @ts-expect-error Testing invalid input
        expect(() => mergeSort([1, "two", 3])).toThrow(TypeError);
    });
});
