import { Optional } from "../../core/types/utility";

/**
 * Represents a node in a Stack.
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
 * Stack data structure implemented using a singly linked list.
 * Supports generic types.
 */
export class Stack<T = string> {
    public top: Optional<Node<T>>;
    public bottom: Optional<Node<T>>;
    public length: number;

    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    /**
     * Pushes a value onto the top of the stack.
     * @param {T} value - The value to push onto the stack.
     * @returns {void}
     */
    public push(value: T): void {
        const newNode = new Node(value);
        if (!this.top || !this.bottom) {
            this.top = this.bottom = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    }

    /**
     * Removes and returns the top value from the stack.
     * @returns {Optional<T>} The value at the top of the stack, or null if the stack is empty.
     */
    public pop(): Optional<T> {
        if (!this.top) return null;

        const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;

        if (this.length === 0) {
            this.bottom = null;
        }

        return holdingPointer.value;
    }

    /**
     * Returns the value at the top of the stack without removing it.
     * @returns {Optional<T>} The top value, or null if the stack is empty.
     */
    public peek(): Optional<T> {
        return this.top?.value ?? null;
    }

    /**
     * Returns true if the stack is empty.
     * @returns {boolean} Whether the stack is empty.
     */
    public isEmpty(): boolean {
        return this.length === 0;
    }

    /**
     * Converts the stack into an array representation.
     * @returns {T[]} An array of the stack's values from top to bottom.
     */
    public toArray(): T[] {
        const output: T[] = [];
        let current = this.top;
        while (current !== null) {
            output.push(current.value);
            current = current.next;
        }
        return output;
    }

    /**
     * Returns a string representation of the stack.
     * @returns {string} A string showing the values in the stack from top to bottom.
     */
    public toString(): string {
        const output = this.toArray();
        return output.join("\n || \n");
    }

    /**
     * Reverses the stack in-place.
     * @returns {void}
     */
    public reverse(): void {
        if (this.length <= 1) return;

        let previous: Optional<Node<T>> = null;
        let next: Optional<Node<T>> = null;
        let current = this.top;

        while (current !== null) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }

        this.bottom = this.top;
        this.top = previous;
    }
}
