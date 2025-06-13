import { expect } from "chai";
import { Stack } from "./Stack";

describe("Stack", () => {
    let testStack: Stack<string>;

    beforeEach(() => {
        testStack = new Stack();
    });

    describe("constructor", () => {
        it("should initialize an empty stack", () => {
            expect(testStack.length).to.equal(0);
            expect(testStack.toArray()).to.deep.equal([]);
            expect(testStack.peek()).to.equal(null);
            expect(testStack.isEmpty()).to.equal(true);
        });
    });

    describe("push", () => {
        it("should increase list size by 1 after each push", () => {
            testStack.push("google");
            expect(testStack.length).to.equal(1);
            expect(testStack.toArray()).to.deep.equal(["google"]);

            testStack.push("facebook");
            expect(testStack.length).to.equal(2);
            expect(testStack.toArray()).to.deep.equal(["facebook", "google"]);
        });
    });

    describe("pop", () => {
        it("should return null when popping from empty stack", () => {
            expect(testStack.pop()).to.equal(null);
        });

        it("should remove the top element and decrease length", () => {
            testStack.push("google");
            testStack.push("facebook");
            expect(testStack.pop()).to.equal("facebook");
            expect(testStack.length).to.equal(1);
            expect(testStack.toArray()).to.deep.equal(["google"]);
        });

        it("should update top and bottom when stack becomes empty", () => {
            testStack.push("google");
            expect(testStack.pop()).to.equal("google");
            expect(testStack.length).to.equal(0);
            expect(testStack.peek()).to.equal(null);
        });
    });

    describe("peek", () => {
        it("should return null if the stack is empty", () => {
            expect(testStack.peek()).to.equal(null);
        });

        it("should return the top element without removing it", () => {
            testStack.push("google");
            testStack.push("facebook");
            expect(testStack.peek()).to.equal("facebook");
            expect(testStack.length).to.equal(2);
        });
    });

    describe("isEmpty", () => {
        it("should return true when stack is empty", () => {
            expect(testStack.isEmpty()).to.equal(true);
        });

        it("should return false when stack has elements", () => {
            testStack.push("google");
            expect(testStack.isEmpty()).to.equal(false);
        });
    });

    describe("toArray", () => {
        it("should return correct array from top to bottom", () => {
            testStack.push("first");
            testStack.push("second");
            testStack.push("third");
            expect(testStack.toArray()).to.deep.equal([
                "third",
                "second",
                "first",
            ]);
        });
    });

    describe("toString", () => {
        it("should return formatted string of stack elements", () => {
            testStack.push("a");
            testStack.push("b");
            testStack.push("c");
            const expectedString = "c\n || \nb\n || \na";
            expect(testStack.toString()).to.equal(expectedString);
        });
    });

    describe("reverse", () => {
        it("should handle reversing an empty stack without error", () => {
            testStack.reverse();
            expect(testStack.toArray()).to.deep.equal([]);
        });

        it("should handle reversing a stack with one element", () => {
            testStack.push("solo");
            testStack.reverse();
            expect(testStack.toArray()).to.deep.equal(["solo"]);
        });

        it("should reverse the stack in-place", () => {
            testStack.push("a");
            testStack.push("b");
            testStack.push("c");
            expect(testStack.toArray()).to.deep.equal(["c", "b", "a"]);

            testStack.reverse();
            expect(testStack.toArray()).to.deep.equal(["a", "b", "c"]);
        });
    });
});
