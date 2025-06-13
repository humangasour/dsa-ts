import { Optional } from "../../core/types/utility";

/**
 * Represents a node in a Queue.
 */
export class Node<T> {
    public value: T;
    public next: Optional<Node<T>>;

    constructor(value: T, next?: Optional<Node<T>>) {
        this.value = value;
        this.next = next ?? null;
    }

    /**
     * Returns a string representation of the node.
     * @returns {string} String representation of the node.
     */
    public toString(): string {
        return `Node (${this.value})`;
    }
}

/**
 * Queue data structure implemented using a singly linked list.
 * Supports generic types.
 */
export class Queue<T = string> {
    public first: Optional<Node<T>>;
    public last: Optional<Node<T>>;
    public length: number;

    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    /**
     * Adds a value at the end of the queue.
     * @param {T} value - The value to add to the end of the queue.
     * @returns {void}
     */
    public enqueue(value: T): void {
        const newNode = new Node(value);
        if (!this.first || !this.last) {
            this.first = this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    }

    /**
     * Removes and returns the first value from the queue.
     * @returns {Optional<T>} The value at the front of the queue, or null if the queue is empty.
     */
    public dequeue(): Optional<T> {
        if (!this.first) return null;

        const holdingPointer = this.first;
        this.first = this.first.next;
        this.length--;

        if (this.length === 0) {
            this.last = null;
        }

        return holdingPointer.value;
    }

    /**
     * Returns the value at the front of the queue without removing it.
     * @returns {Optional<T>} The first value, or null if the queue is empty.
     */
    public peek(): Optional<T> {
        return this.first?.value ?? null;
    }

    /**
     * Returns true if the queue is empty.
     * @returns {boolean} Whether the queue is empty.
     */
    public isEmpty(): boolean {
        return this.length === 0;
    }

    /**
     * Converts the queue into an array representation.
     * @returns {T[]} An array of the queue's values from first to last.
     */
    public toArray(): T[] {
        const output: T[] = [];
        let current = this.first;
        while (current !== null) {
            output.push(current.value);
            current = current.next;
        }
        return output;
    }

    /**
     * Returns a string representation of the queue.
     * @returns {string} A string showing the values in the queue from first to last.
     */
    public toString(): string {
        const output = this.toArray();
        return output.join(" <== ");
    }

    /**
     * Reverses the queue in-place.
     * @returns {void}
     */
    public reverse(): void {
        if (this.length <= 1) return;

        let previous: Optional<Node<T>> = null;
        let next: Optional<Node<T>> = null;
        let current = this.first;

        while (current !== null) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }

        this.last = this.first;
        this.first = previous;
    }

    /**
     * Clears all items in the queue.
     * @returns {void}
     */
    public clear(): void {
        this.first = this.last = null;
        this.length = 0;
    }
}
