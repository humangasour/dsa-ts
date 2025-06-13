import { expect } from "chai";
import { Queue } from "./Queue";

describe("Queue", () => {
    let queue: Queue<string>;

    beforeEach(() => {
        queue = new Queue();
    });

    describe("constructor", () => {
        it("should initialize an empty queue", () => {
            expect(queue.isEmpty()).to.equal(true);
            expect(queue.length).to.equal(0);
            expect(queue.peek()).to.equal(null);
            expect(queue.toArray()).to.deep.equal([]);
        });
    });

    describe("enqueue", () => {
        it("should add a single element", () => {
            queue.enqueue("A");
            expect(queue.peek()).to.equal("A");
            expect(queue.length).to.equal(1);
            expect(queue.toArray()).to.deep.equal(["A"]);
        });

        it("should add multiple elements in FIFO order", () => {
            queue.enqueue("A");
            queue.enqueue("B");
            queue.enqueue("C");
            expect(queue.toArray()).to.deep.equal(["A", "B", "C"]);
            expect(queue.length).to.equal(3);
        });
    });

    describe("dequeue", () => {
        it("should return null when dequeuing an empty queue", () => {
            expect(queue.dequeue()).to.equal(null);
        });

        it("should remove and return the front element", () => {
            queue.enqueue("X");
            queue.enqueue("Y");
            const value = queue.dequeue();
            expect(value).to.equal("X");
            expect(queue.peek()).to.equal("Y");
            expect(queue.length).to.equal(1);
        });

        it("should reset last pointer when last item is dequeued", () => {
            queue.enqueue("only");
            expect(queue.dequeue()).to.equal("only");
            expect(queue.length).to.equal(0);
            expect(queue.isEmpty()).to.equal(true);
        });
    });

    describe("peek", () => {
        it("should return null when queue is empty", () => {
            expect(queue.peek()).to.equal(null);
        });

        it("should return the front item without removing it", () => {
            queue.enqueue("one");
            queue.enqueue("two");
            expect(queue.peek()).to.equal("one");
            expect(queue.length).to.equal(2);
        });
    });

    describe("isEmpty", () => {
        it("should reflect correct state", () => {
            expect(queue.isEmpty()).to.equal(true);
            queue.enqueue("1");
            expect(queue.isEmpty()).to.equal(false);
        });
    });

    describe("toArray", () => {
        it("should convert queue to array in correct order", () => {
            queue.enqueue("1");
            queue.enqueue("2");
            queue.enqueue("3");
            expect(queue.toArray()).to.deep.equal(["1", "2", "3"]);
        });
    });

    describe("toString", () => {
        it("should return formatted string of queue contents", () => {
            queue.enqueue("a");
            queue.enqueue("b");
            queue.enqueue("c");
            expect(queue.toString()).to.equal("a <== b <== c");
        });
    });

    describe("reverse", () => {
        it("should handle empty queue gracefully", () => {
            queue.reverse();
            expect(queue.toArray()).to.deep.equal([]);
        });

        it("should not change order for single element", () => {
            queue.enqueue("solo");
            queue.reverse();
            expect(queue.toArray()).to.deep.equal(["solo"]);
        });

        it("should reverse the order of the queue", () => {
            queue.enqueue("a");
            queue.enqueue("b");
            queue.enqueue("c");
            queue.reverse();
            expect(queue.toArray()).to.deep.equal(["c", "b", "a"]);
            expect(queue.peek()).to.equal("c");
        });
    });

    describe("clear", () => {
        it("should empty the queue completely", () => {
            queue.enqueue("x");
            queue.enqueue("y");
            queue.clear();
            expect(queue.length).to.equal(0);
            expect(queue.peek()).to.equal(null);
            expect(queue.isEmpty()).to.equal(true);
            expect(queue.toArray()).to.deep.equal([]);
        });
    });
});
