/**
 * Represents a node in a doubly linked list.
 */
export class Node {
    public value: number;
    public next: Node | null;
    public previous: Node | null;

    constructor(
        value: number,
        next: Node | null = null,
        previous: Node | null = null
    ) {
        this.value = value;
        this.next = next;
        this.previous = previous;
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
 * Doubly linked list implementation.
 */
export class DoublyLinkedList {
    private head: Node | null;
    private tail: Node | null;
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
        if (!this.tail) {
            this.head = this.tail = newNode;
        } else {
            newNode.previous = this.tail;
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
        if (this.head) {
            this.head.previous = newNode;
        } else {
            this.tail = newNode;
        }
        this.head = newNode;
        this.length++;
    }

    /**
     * Inserts a value at the given index.
     * If index is 0, it prepends. If index >= length, it appends.
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

        const current = this._getNodeAt(index);
        const previous = current?.previous || null;
        const newNode = new Node(value, current, previous);

        if (previous) previous.next = newNode;
        if (current) current.previous = newNode;

        this.length++;
    }

    /**
     * Removes the node at the specified index.
     * @param {number} index
     * @returns {number | null} The value removed, or null if not found.
     * @throws {Error} If index is negative.
     */
    public remove(index: number): number | null {
        if (index < 0) throw new Error("Index cannot be negative.");
        if (!this.head) return null;

        if (index === 0) {
            const removedValue = this.head.value;
            this.head = this.head.next;
            if (this.head) {
                this.head.previous = null;
            } else {
                this.tail = null;
            }
            this.length--;
            return removedValue;
        }

        const current = this._getNodeAt(index);
        if (!current) return null;

        if (current.previous) {
            current.previous.next = current.next;
        }
        if (current.next) {
            current.next.previous = current.previous;
        }
        if (current === this.tail) {
            this.tail = current.previous;
        }

        this.length--;
        return current.value;
    }

    /**
     * Returns a node at the given index.
     * @param {number} index
     * @returns {Node | null}
     */
    private _getNodeAt(index: number): Node | null {
        if (index < 0 || index >= this.length) return null;
        let current = this.head;
        let counter = 0;
        while (current && counter < index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    /**
     * Converts the list to an array of values (head to tail).
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
     * Converts the list to an array of values (tail to head).
     * @returns {number[]}
     */
    public toReversedArray(): number[] {
        const result: number[] = [];
        let current = this.tail;
        while (current) {
            result.push(current.value);
            current = current.previous;
        }
        return result;
    }

    /**
     * Returns a string representation of the linked list.
     * @returns {string}
     */
    public toString(): string {
        return this.toArray().join(" <=> ") + " <=> null";
    }
}
