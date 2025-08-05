
import { Queue } from "./Queue";

describe("Queue", () => {
    let queue: Queue<string>;

    beforeEach(() => {
        queue = new Queue();
    });

    describe("constructor", () => {
        it("should initialize an empty queue", () => {
            expect(queue.isEmpty()).toBe(true);
            expect(queue.length).toBe(0);
            expect(queue.peek()).toBe(null);
            expect(queue.toArray()).toEqual([]);
        });
    });

    describe("enqueue", () => {
        it("should add a single element", () => {
            queue.enqueue("A");
            expect(queue.peek()).toBe("A");
            expect(queue.length).toBe(1);
            expect(queue.toArray()).toEqual(["A"]);
        });

        it("should add multiple elements in FIFO order", () => {
            queue.enqueue("A");
            queue.enqueue("B");
            queue.enqueue("C");
            expect(queue.toArray()).toEqual(["A", "B", "C"]);
            expect(queue.length).toBe(3);
        });
    });

    describe("dequeue", () => {
        it("should return null when dequeuing an empty queue", () => {
            expect(queue.dequeue()).toBe(null);
        });

        it("should remove and return the front element", () => {
            queue.enqueue("X");
            queue.enqueue("Y");
            const value = queue.dequeue();
            expect(value).toBe("X");
            expect(queue.peek()).toBe("Y");
            expect(queue.length).toBe(1);
        });

        it("should reset last pointer when last item is dequeued", () => {
            queue.enqueue("only");
            expect(queue.dequeue()).toBe("only");
            expect(queue.length).toBe(0);
            expect(queue.isEmpty()).toBe(true);
        });
    });

    describe("peek", () => {
        it("should return null when queue is empty", () => {
            expect(queue.peek()).toBe(null);
        });

        it("should return the front item without removing it", () => {
            queue.enqueue("one");
            queue.enqueue("two");
            expect(queue.peek()).toBe("one");
            expect(queue.length).toBe(2);
        });
    });

    describe("isEmpty", () => {
        it("should reflect correct state", () => {
            expect(queue.isEmpty()).toBe(true);
            queue.enqueue("1");
            expect(queue.isEmpty()).toBe(false);
        });
    });

    describe("toArray", () => {
        it("should convert queue to array in correct order", () => {
            queue.enqueue("1");
            queue.enqueue("2");
            queue.enqueue("3");
            expect(queue.toArray()).toEqual(["1", "2", "3"]);
        });
    });

    describe("toString", () => {
        it("should return formatted string of queue contents", () => {
            queue.enqueue("a");
            queue.enqueue("b");
            queue.enqueue("c");
            expect(queue.toString()).toBe("a <== b <== c");
        });
    });

    describe("reverse", () => {
        it("should handle empty queue gracefully", () => {
            queue.reverse();
            expect(queue.toArray()).toEqual([]);
        });

        it("should not change order for single element", () => {
            queue.enqueue("solo");
            queue.reverse();
            expect(queue.toArray()).toEqual(["solo"]);
        });

        it("should reverse the order of the queue", () => {
            queue.enqueue("a");
            queue.enqueue("b");
            queue.enqueue("c");
            queue.reverse();
            expect(queue.toArray()).toEqual(["c", "b", "a"]);
            expect(queue.peek()).toBe("c");
        });
    });

    describe("clear", () => {
        it("should empty the queue completely", () => {
            queue.enqueue("x");
            queue.enqueue("y");
            queue.clear();
            expect(queue.length).toBe(0);
            expect(queue.peek()).toBe(null);
            expect(queue.isEmpty()).toBe(true);
            expect(queue.toArray()).toEqual([]);
        });
    });
});
