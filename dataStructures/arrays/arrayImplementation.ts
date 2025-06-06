type NumIndexedObject<T> = { [index: number]: T };

export class MyArray<T> {
    public length: number;
    private data: NumIndexedObject<T>;

    constructor() {
        this.length = 0;
        this.data = {};
    }

    /**
     * Get element at given index.
     * @param {number} index Index of value to return
     * @returns {T} Value, or null if non-existant
     */
    public get(index: number): T {
        return this.data[index];
    }

    /**
     * Add element to end of array,i.e. at index Array.length.
     * @param {T} item Value/object to push
     * @returns {number} Length of array after push
     */
    public push(value: T): number {
        this.data[this.length] = value;
        this.length++;
        return this.length;
    }

    /**
     * Remove the last element of array.
     * @returns {T | null} Value/object at last index, or null if empty array
     */
    public pop(): T | null {
        if (this.length > 0) {
            const lastItem = this.data[this.length - 1];
            delete this.data[this.length - 1];
            this.length--;
            return lastItem;
        }
        return null;
    }

    public delete(index: number): T | null {
        const item = this.data[index];
        if (!item) return null;
        this.shiftItems(index);
        return item;
    }

    private shiftItems(index: number) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}
