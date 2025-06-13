/**
 * Optional type alias for nullable values.
 */
type Optional<T> = T | null;

/**
 * Stack data structure implemented using an internal dynamic array.
 * Supports generic types and core stack operations.
 */
export class ArrayStack<T = string> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    /**
     * Pushes a value onto the top of the stack.
     * @param {T} value - The value to be pushed.
     * @returns {void}
     */
    public push(value: T): void {
        this.items.push(value);
    }

    /**
     * Removes and returns the top value from the stack.
     * @returns {Optional<T>} The top value or null if the stack is empty.
     */
    public pop(): Optional<T> {
        if (this.isEmpty()) return null;
        return this.items.pop() ?? null;
    }

    /**
     * Returns the value at the top of the stack without removing it.
     * @returns {Optional<T>} The top value or null if the stack is empty.
     */
    public peek(): Optional<T> {
        if (this.isEmpty()) return null;
        return this.items[this.items.length - 1];
    }

    /**
     * Checks if the stack is empty.
     * @returns {boolean} True if the stack is empty, false otherwise.
     */
    public isEmpty(): boolean {
        return this.items.length === 0;
    }

    /**
     * Returns the number of elements in the stack.
     * @returns {number} The stack's length.
     */
    public size(): number {
        return this.items.length;
    }

    /**
     * Returns a shallow copy of the stack as an array (top to bottom).
     * @returns {T[]} The array of stack values.
     */
    public toArray(): T[] {
        return [...this.items].reverse(); // From top to bottom
    }

    /**
     * Returns a string representation of the stack.
     * @returns {string} Formatted stack values from top to bottom.
     */
    public toString(): string {
        return this.toArray().join("\n || \n");
    }

    /**
     * Clears all items in the stack.
     * @returns {void}
     */
    public clear(): void {
        this.items = [];
    }
}
