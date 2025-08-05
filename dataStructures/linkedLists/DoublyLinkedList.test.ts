
import { DoublyLinkedList } from "./DoublyLinkedList";

describe("DoublyLinkedList", () => {
    let list: DoublyLinkedList;

    beforeEach(() => {
        list = new DoublyLinkedList(10);
    });

    describe("constructor", () => {
        it("should initialize with a single node if value is given", () => {
            expect(list.length).toBe(1);
            expect(list.toArray()).toEqual([10]);
        });

        it("should initialize an empty list if no value is given", () => {
            const emptyList = new DoublyLinkedList();
            expect(emptyList.length).toBe(0);
            expect(emptyList.toArray()).toEqual([]);
        });
    });

    describe("append", () => {
        it("should add to the end and increase length", () => {
            list.append(20);
            expect(list.toArray()).toEqual([10, 20]);
            expect(list.length).toBe(2);
        });
    });

    describe("prepend", () => {
        it("should add to the beginning and increase length", () => {
            list.prepend(5);
            expect(list.toArray()).toEqual([5, 10]);
            expect(list.length).toBe(2);
        });
    });

    describe("insert", () => {
        it("should insert at the beginning", () => {
            list.insert(0, 1);
            expect(list.toArray()).toEqual([1, 10]);
        });

        it("should insert at the end if index >= length", () => {
            list.insert(10, 99);
            expect(list.toArray()).toEqual([10, 99]);
        });

        it("should insert in the middle", () => {
            list.append(20);
            list.insert(1, 15); // [10, 15, 20]
            expect(list.toArray()).toEqual([10, 15, 20]);
        });

        it("should throw for negative index", () => {
            expect(() => list.insert(-1, 5)).toThrow(
                "Index cannot be negative."
            );
        });
    });

    describe("remove", () => {
        it("should remove the head", () => {
            const removed = list.remove(0);
            expect(removed).toBe(10);
            expect(list.toArray()).toEqual([]);
            expect(list.length).toBe(0);
        });

        it("should remove from the middle", () => {
            list.append(20);
            list.append(30);
            const removed = list.remove(1); // remove 20
            expect(removed).toBe(20);
            expect(list.toArray()).toEqual([10, 30]);
            expect(list.length).toBe(2);
        });

        it("should remove the tail", () => {
            list.append(25);
            const removed = list.remove(1); // remove 25
            expect(removed).toBe(25);
            expect(list.toArray()).toEqual([10]);
            expect(list.length).toBe(1);
        });

        it("should return null for out-of-bounds index", () => {
            const result = list.remove(5);
            expect(result).toBe(null);
        });

        it("should throw for negative index", () => {
            expect(() => list.remove(-1)).toThrow("Index cannot be negative.");
        });
    });

    describe("toReversedArray", () => {
        it("should return the list in reverse order", () => {
            list.append(20);
            list.append(30);
            expect(list.toReversedArray()).toEqual([30, 20, 10]);
        });
    });

    describe("toString", () => {
        it("should return string representation with arrows", () => {
            list.append(15);
            list.append(25);
            expect(list.toString()).toBe("10 <=> 15 <=> 25 <=> null");
        });
    });
});
