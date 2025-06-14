import { expect } from "chai";
import { countCommonFactors, countDivisors, gcd } from "./countCommonFactors";

describe("gcd", () => {
    it("should throw TypeError for non-integer input", () => {
        expect(() => gcd(null as unknown as number, 5)).to.throw(TypeError);
    });

    it("should throw TypeError for negative integer input", () => {
        expect(() => gcd(-5, 10)).to.throw(TypeError);
    });

    it("should throw TypeError for zero input", () => {
        expect(() => gcd(15, 0)).to.throw(TypeError);
    });

    it("should return the greatest common divisor of two positive integers", () => {
        expect(gcd(10, 15)).to.equal(5);
        expect(gcd(100, 80)).to.equal(20);
        expect(gcd(17, 31)).to.equal(1); // prime numbers
    });

    it("should handle edge case of gcd(1, 1)", () => {
        expect(gcd(1, 1)).to.equal(1);
    });
});

describe("countDivisors", () => {
    it("should throw TypeError for non-integer input", () => {
        expect(() => countDivisors(null as unknown as number)).to.throw(
            TypeError
        );
    });

    it("should throw TypeError for negative integer input", () => {
        expect(() => countDivisors(-5)).to.throw(TypeError);
    });

    it("should throw TypeError for zero input", () => {
        expect(() => countDivisors(0)).to.throw(TypeError);
    });

    it("should return the count of divisors for a positive integer", () => {
        expect(countDivisors(15)).to.equal(4); // 1, 3, 5, 15
        expect(countDivisors(36)).to.equal(9); // 1, 2, 3, 4, 6, 9, 12, 18, 36
        expect(countDivisors(1)).to.equal(1); // Only 1
        expect(countDivisors(49)).to.equal(3); // 1, 7, 49 (perfect square)
    });
});

describe("countCommonFactors", () => {
    it("should throw TypeError for non-integer input", () => {
        expect(() => countCommonFactors(null as unknown as number, 5)).to.throw(
            TypeError
        );
    });

    it("should throw TypeError for negative integer input", () => {
        expect(() => countCommonFactors(-5, 10)).to.throw(TypeError);
    });

    it("should throw TypeError for zero input", () => {
        expect(() => countCommonFactors(15, 0)).to.throw(TypeError);
    });

    it("should return the number of common factors of two positive integers", () => {
        expect(countCommonFactors(12, 18)).to.equal(4); // 1, 2, 3, 6
        expect(countCommonFactors(100, 80)).to.equal(6); // 1, 2, 4, 5, 10, 20
        expect(countCommonFactors(17, 31)).to.equal(1); // both prime
        expect(countCommonFactors(1, 1)).to.equal(1); // only common factor is 1
    });

    it("should not throw on large inputs", () => {
        expect(() => countCommonFactors(1e9, 1e8)).to.not.throw();
        expect(countCommonFactors(1e9, 1e8)).to.be.a("number");
    });
});
