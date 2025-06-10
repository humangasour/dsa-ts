import { expect } from "chai";
import { moveZeroes } from "./moveZeroes";

describe("moveZeroes", () => {
    it("should move all zeroes to the end and maintain order of non-zero elements", () => {
        const arr = [0, 1, 0, 3, 12];
        moveZeroes(arr);
        expect(arr).to.deep.equal([1, 3, 12, 0, 0]);
    });

    it("should handle array with no zeroes", () => {
        const arr = [1, 2, 3];
        moveZeroes(arr);
        expect(arr).to.deep.equal([1, 2, 3]);
    });

    it("should handle array with all zeroes", () => {
        const arr = [0, 0, 0];
        moveZeroes(arr);
        expect(arr).to.deep.equal([0, 0, 0]);
    });

    it("should handle empty array", () => {
        const arr: number[] = [];
        moveZeroes(arr);
        expect(arr).to.deep.equal([]);
    });

    it("should handle array with zero at the end", () => {
        const arr = [1, 2, 0];
        moveZeroes(arr);
        expect(arr).to.deep.equal([1, 2, 0]);
    });

    it("should handle array with zero at the start", () => {
        const arr = [0, 1, 2];
        moveZeroes(arr);
        expect(arr).to.deep.equal([1, 2, 0]);
    });

    it("should handle array with interleaved zeroes", () => {
        const arr = [0, 1, 0, 2, 0, 3];
        moveZeroes(arr);
        expect(arr).to.deep.equal([1, 2, 3, 0, 0, 0]);
    });
});
