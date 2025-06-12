import { expect } from "chai";
import { firstRecurringCharacter } from "./firstRecurringCharacter";

describe("firstRecurringCharacter", () => {
    it("should throw TypeError if input is not an Array of integers", () => {
        expect(() =>
            firstRecurringCharacter(["a", "b", 1] as Array<number>)
        ).to.throw(TypeError);

        expect(() =>
            firstRecurringCharacter("something" as unknown as Array<number>)
        ).to.throw(TypeError);
    });

    it("should return the first recurring character if present in the array", () => {
        expect(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1])).to.equal(2);
    });

    it("should return null if no recurring characters are found in the array", () => {
        expect(firstRecurringCharacter([2, 5, 1, 0, 3, 4, 9])).to.equal(null);
    });
});
