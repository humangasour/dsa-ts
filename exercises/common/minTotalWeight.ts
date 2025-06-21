/**
 * Problem: Minimum Total Weight After d Days
 *
 * You are given an array `weights` of length `n`, where `weights[i]` is the weight of the i-th chocolate.
 * Each day for `d` days, you can:
 *   - Pick any chocolate.
 *   - Eat half of its current weight (rounded down, i.e., `Math.floor(weight / 2)`).
 *   - The remaining part stays and can be chosen again later.
 *
 * You may pick the same chocolate multiple times.
 *
 * Return the **minimum possible total weight** of all chocolates after `d` days.
 *
 * Constraints:
 * - 1 <= weights.length <= 1e5
 * - 1 <= weights[i] <= 1e9
 * - 1 <= d <= 1e5
 */

/**
 * MaxHeap data structure for efficiently managing and reducing chocolate weights.
 * Supports insert and extractMax in O(log n) time.
 */
class MaxHeap {
    private heap: number[];

    constructor() {
        this.heap = [];
    }

    /**
     * Inserts a number into the max-heap.
     * Time Complexity: O(log n)
     * @param {number} value - The number to insert.
     */
    public insert(value: number): void {
        this.heap.push(value);
        this.percolateUp(this.heap.length - 1);
    }

    /**
     * Removes and returns the maximum value from the heap.
     * Time Complexity: O(log n)
     * @returns {number | undefined} The maximum number, or undefined if heap is empty.
     */
    public extractMax(): number | undefined {
        if (this.heap.length === 0) return undefined;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.percolateDown(0);
        return max;
    }

    /**
     * Returns all remaining values in the heap.
     * Time Complexity: O(1)
     * @returns {number[]} The array of heap elements.
     */
    public getHeap(): number[] {
        return this.heap;
    }

    private percolateUp(index: number): void {
        let parent = Math.floor((index - 1) / 2);
        while (index > 0 && this.heap[index] > this.heap[parent]) {
            [this.heap[index], this.heap[parent]] = [
                this.heap[parent],
                this.heap[index],
            ];
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }

    private percolateDown(index: number): void {
        const length = this.heap.length;

        while (true) {
            let largest = index;
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            if (left < length && this.heap[left] > this.heap[largest]) {
                largest = left;
            }
            if (right < length && this.heap[right] > this.heap[largest]) {
                largest = right;
            }

            if (largest === index) break;

            [this.heap[index], this.heap[largest]] = [
                this.heap[largest],
                this.heap[index],
            ];
            index = largest;
        }
    }
}

/**
 * Calculates the minimum total weight of chocolates after d days.
 * Time Complexity: O(n + d * log n)
 * Space Complexity: O(n)
 *
 * @param {number[]} weights - The initial chocolate weights.
 * @param {number} d - Number of days to reduce chocolate weights.
 * @returns {number} The minimum total weight after d operations.
 */
function minTotalWeight(weights: number[], d: number): number {
    const heap = new MaxHeap();

    for (const w of weights) {
        heap.insert(w);
    }

    for (let i = 0; i < d; i++) {
        const max = heap.extractMax();
        if (!max || max === 0) break;

        const remaining = Math.floor(max / 2);
        if (remaining > 0) heap.insert(remaining);
    }

    return heap.getHeap().reduce((sum, val) => sum + val, 0);
}

export { MaxHeap, minTotalWeight };
