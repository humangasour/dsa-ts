type Optional<T> = T | null;

/**
 * Represents a node in a singly linked list.
 */
export class Node {
    public value: number;
    public next: Optional<Node>;

    constructor(value: number, next: Optional<Node> = null) {
        this.value = value;
        this.next = next;
    }

    /**
     * Returns a string representation of the node.
     * @returns {string}
     */
    toString(): string {
        return `Node(${this.value})`;
    }
}

/**
 * Singly linked list implementation.
 */
export class LinkedList {
    public head: Optional<Node>;
    public tail: Optional<Node>;
    public length: number;

    /**
     * Creates a new linked list.
     * @param {number} [value] - Optional initial value.
     */
    constructor(value?: number) {
        const initialNode = typeof value === "number" ? new Node(value) : null;
        this.head = initialNode;
        this.tail = initialNode;
        this.length = initialNode ? 1 : 0;
    }

    /**
     * Appends a value to the end of the list.
     * @param {number} value
     */
    public append(value: number): void {
        const newNode = new Node(value);
        if (!this.head || !this.tail) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    /**
     * Prepends a value to the start of the list.
     * @param {number} value
     */
    public prepend(value: number): void {
        const newNode = new Node(value, this.head);
        this.head = newNode;
        if (!this.tail) this.tail = newNode;
        this.length++;
    }

    /**
     * Inserts a value at the given index.
     * @param {number} index - Index at which to insert.
     * @param {number} value - Value to insert.
     * @throws {Error} If index is negative.
     */
    public insert(index: number, value: number): void {
        if (index < 0) throw new Error("Index cannot be negative.");
        if (index === 0) {
            this.prepend(value);
            return;
        }
        if (index >= this.length) {
            this.append(value);
            return;
        }

        let prev: Optional<Node> = null;
        let curr: Optional<Node> = this.head;
        let counter = 0;

        while (counter < index && curr) {
            prev = curr;
            curr = curr.next;
            counter++;
        }

        const newNode = new Node(value, curr);
        if (prev) prev.next = newNode;
        this.length++;
    }

    /**
     * Removes the node at the specified index.
     * @param {number} index
     * @returns {number | null} The value removed, or null if not found.
     * @throws {Error} If index is negative.
     */
    public remove(index: number): Optional<number> {
        if (index < 0) throw new Error("Index cannot be negative.");
        if (!this.head) return null;

        if (index === 0) {
            const removedValue = this.head.value;
            this.head = this.head.next;
            if (!this.head) this.tail = null;
            this.length--;
            return removedValue;
        }

        let prev: Optional<Node> = null;
        let curr: Optional<Node> = this.head;
        let counter = 0;

        while (counter < index && curr) {
            prev = curr;
            curr = curr.next;
            counter++;
        }

        if (!curr || !prev) return null;

        prev.next = curr.next;
        if (curr === this.tail) this.tail = prev;

        this.length--;
        return curr.value;
    }

    /**
     * Reverses the linked list in place.
     */
    public reverse() {
        if (this.length <= 1) return;
        let previous: Optional<Node> = null;
        let next: Optional<Node> = null;
        let current = this.head;

        while (current !== null) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }

        this.tail = this.head;
        this.head = previous;
    }

    /**
     * Converts the linked list to an array of values.
     * @returns {number[]}
     */
    public toArray(): number[] {
        const result: number[] = [];
        let current = this.head;
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        return result;
    }

    /**
     * Returns a string representation of the linked list.
     * @returns {string}
     */
    public toString(): string {
        return this.toArray().join(" => ") + " => null";
    }
}
