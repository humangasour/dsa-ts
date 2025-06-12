import { expect } from "chai";
import { LinkedList } from "./LinkedList";

describe("LinkedList", () => {
    let list: LinkedList;

    beforeEach(() => {
        list = new LinkedList(10);
    });

    describe("constructor", () => {
        it("should initialize list with one element if value is provided", () => {
            expect(list.length).to.equal(1);
            expect(list.toArray()).to.deep.equal([10]);
        });

        it("should initialize empty list if no value is provided", () => {
            const emptyList = new LinkedList();
            expect(emptyList.length).to.equal(0);
            expect(emptyList.toArray()).to.deep.equal([]);
        });
    });

    describe("append", () => {
        it("should increase list size by 1 after append", () => {
            const initialLength = list.length;
            list.append(15);
            expect(list.length).to.equal(initialLength + 1);
            expect(list.toArray()).to.deep.equal([10, 15]);
        });
    });

    describe("prepend", () => {
        it("should insert value at the beginning", () => {
            list.prepend(5);
            expect(list.toArray()).to.deep.equal([5, 10]);
            expect(list.length).to.equal(2);
        });
    });

    describe("insert", () => {
        it("should insert value at the given index", () => {
            list.append(20);
            list.insert(1, 15);
            expect(list.toArray()).to.deep.equal([10, 15, 20]);
            expect(list.length).to.equal(3);
        });

        it("should append if index >= length", () => {
            list.insert(5, 99);
            expect(list.toArray()).to.deep.equal([10, 99]);
        });

        it("should prepend if index is 0", () => {
            list.insert(0, 1);
            expect(list.toArray()).to.deep.equal([1, 10]);
        });

        it("should throw error for negative index", () => {
            expect(() => list.insert(-1, 100)).to.throw(
                "Index cannot be negative."
            );
        });
    });

    describe("remove", () => {
        it("should remove item at index 0", () => {
            const removed = list.remove(0);
            expect(removed).to.equal(10);
            expect(list.length).to.equal(0);
            expect(list.toArray()).to.deep.equal([]);
        });

        it("should remove item from middle", () => {
            list.append(20);
            list.append(30);
            const removed = list.remove(1); // remove 20
            expect(removed).to.equal(20);
            expect(list.toArray()).to.deep.equal([10, 30]);
        });

        it("should return null if index is out of bounds", () => {
            const result = list.remove(10);
            expect(result).to.equal(null);
        });

        it("should throw error for negative index", () => {
            expect(() => list.remove(-1)).to.throw("Index cannot be negative.");
        });
    });

    describe("toString", () => {
        it("should return correct string format", () => {
            list.append(20);
            list.append(30);
            expect(list.toString()).to.equal("10 => 20 => 30 => null");
        });
    });

    describe("toArray", () => {
        it("should convert list to array", () => {
            list.append(15);
            list.append(25);
            expect(list.toArray()).to.deep.equal([10, 15, 25]);
        });
    });

    describe("reverse", () => {
        it("should reverse the list with multiple nodes", () => {
            const list = new LinkedList(1);
            list.append(2);
            list.append(3);
            list.append(4); // list: 1 => 2 => 3 => 4

            list.reverse(); // should be: 4 => 3 => 2 => 1

            expect(list.toArray()).to.deep.equal([4, 3, 2, 1]);
            expect(list.toString()).to.equal("4 => 3 => 2 => 1 => null");
            expect(list.head?.value).to.equal(4);
            expect(list.tail?.value).to.equal(1);
        });

        it("should handle reversing a one-element list", () => {
            const list = new LinkedList(42);
            list.reverse(); // should still be 42

            expect(list.toArray()).to.deep.equal([42]);
            expect(list.head?.value).to.equal(42);
            expect(list.tail?.value).to.equal(42);
            expect(list.head).to.equal(list.tail);
        });

        it("should handle reversing an empty list", () => {
            const list = new LinkedList();
            list.reverse(); // no crash

            expect(list.toArray()).to.deep.equal([]);
            expect(list.head).to.equal(null);
            expect(list.tail).to.equal(null);
        });
    });
});
