
import { hasPairWithSum } from "./hasPairWithSum";

describe("hasPairWithSum", () => {
    it("should return true if a pair exists that sums to the target", () => {
        expect(hasPairWithSum([1, 2, 4, 6], 8)).toBe(true); // 6+2
        expect(hasPairWithSum([1, 2, 5, 7], 12)).toBe(true); // 5+7
        expect(hasPairWithSum([0, -1, 2, -3, 1], -2)).toBe(true); // -3+1
    });

    it("should return false if no pair exists that sums to the target", () => {
        expect(hasPairWithSum([1, 2, 3], 7)).toBe(false);
        expect(hasPairWithSum([], 5)).toBe(false);
        expect(hasPairWithSum([5], 5)).toBe(false);
    });

    it("should handle arrays with duplicate numbers", () => {
        expect(hasPairWithSum([2, 2, 4], 4)).toBe(true); // 2+2
        expect(hasPairWithSum([2, 2, 2], 5)).toBe(false);
    });

    it("should handle negative numbers and zero", () => {
        expect(hasPairWithSum([-2, 0, 2, 4], 2)).toBe(true); // -2+4
        expect(hasPairWithSum([-1, -2, -3, -4], -6)).toBe(true); // -2+-4
    });

    it("should throw TypeError for non-array input", () => {
        expect(() => hasPairWithSum(null as unknown as number[], 5)).toThrow(
            TypeError
        );
        expect(() =>
            hasPairWithSum(undefined as unknown as number[], 5)
        ).toThrow(TypeError);
        expect(() => hasPairWithSum(123 as unknown as number[], 5)).toThrow(
            TypeError
        );
    });
});
