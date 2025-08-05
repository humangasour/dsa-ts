
import { Stack } from "./Stack";

describe("Stack", () => {
    let testStack: Stack<string>;

    beforeEach(() => {
        testStack = new Stack();
    });

    describe("constructor", () => {
        it("should initialize an empty stack", () => {
            expect(testStack.length).toBe(0);
            expect(testStack.toArray()).toEqual([]);
            expect(testStack.peek()).toBe(null);
            expect(testStack.isEmpty()).toBe(true);
        });
    });

    describe("push", () => {
        it("should increase list size by 1 after each push", () => {
            testStack.push("google");
            expect(testStack.length).toBe(1);
            expect(testStack.toArray()).toEqual(["google"]);

            testStack.push("facebook");
            expect(testStack.length).toBe(2);
            expect(testStack.toArray()).toEqual(["facebook", "google"]);
        });
    });

    describe("pop", () => {
        it("should return null when popping from empty stack", () => {
            expect(testStack.pop()).toBe(null);
        });

        it("should remove the top element and decrease length", () => {
            testStack.push("google");
            testStack.push("facebook");
            expect(testStack.pop()).toBe("facebook");
            expect(testStack.length).toBe(1);
            expect(testStack.toArray()).toEqual(["google"]);
        });

        it("should update top and bottom when stack becomes empty", () => {
            testStack.push("google");
            expect(testStack.pop()).toBe("google");
            expect(testStack.length).toBe(0);
            expect(testStack.peek()).toBe(null);
        });
    });

    describe("peek", () => {
        it("should return null if the stack is empty", () => {
            expect(testStack.peek()).toBe(null);
        });

        it("should return the top element without removing it", () => {
            testStack.push("google");
            testStack.push("facebook");
            expect(testStack.peek()).toBe("facebook");
            expect(testStack.length).toBe(2);
        });
    });

    describe("isEmpty", () => {
        it("should return true when stack is empty", () => {
            expect(testStack.isEmpty()).toBe(true);
        });

        it("should return false when stack has elements", () => {
            testStack.push("google");
            expect(testStack.isEmpty()).toBe(false);
        });
    });

    describe("toArray", () => {
        it("should return correct array from top to bottom", () => {
            testStack.push("first");
            testStack.push("second");
            testStack.push("third");
            expect(testStack.toArray()).toEqual([
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
            expect(testStack.toString()).toBe(expectedString);
        });
    });

    describe("reverse", () => {
        it("should handle reversing an empty stack without error", () => {
            testStack.reverse();
            expect(testStack.toArray()).toEqual([]);
        });

        it("should handle reversing a stack with one element", () => {
            testStack.push("solo");
            testStack.reverse();
            expect(testStack.toArray()).toEqual(["solo"]);
        });

        it("should reverse the stack in-place", () => {
            testStack.push("a");
            testStack.push("b");
            testStack.push("c");
            expect(testStack.toArray()).toEqual(["c", "b", "a"]);

            testStack.reverse();
            expect(testStack.toArray()).toEqual(["a", "b", "c"]);
        });
    });
});
