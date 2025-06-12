type SupportedValue = string | number | boolean | object;

/**
 * A basic educational HashTable implementation with support for various value types.
 */
class HashTable {
    private data: Array<[string, SupportedValue][]>;

    /**
     * Creates a new HashTable with a given internal array size.
     * @param {number} size - Size of the backing storage array.
     */
    constructor(size: number) {
        if (!Number.isInteger(size) || size <= 0) {
            throw new Error("Size must be a positive integer.");
        }
        this.data = new Array(size);
    }

    /**
     * Computes a hash for a given string key.
     * @param {string} key - Key to hash.
     * @returns {number} The array index for the key.
     */
    private _hash(key: string): number {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    /**
     * Retrieves the bucket array for a given key.
     * @param {string} key - The key to find a bucket for.
     * @returns {Array<[string, SupportedValue]> | undefined} The bucket array or undefined if empty.
     */
    private _getBucket(key: string): [string, SupportedValue][] | undefined {
        const index = this._hash(key);
        return this.data[index];
    }

    /**
     * Stores a key-value pair in the hash table.
     * Updates the value if the key already exists.
     * @param {string} key - Key to insert or update.
     * @param {SupportedValue} value - Value to store.
     */
    public set(key: string, value: SupportedValue): void {
        const index = this._hash(key);
        const bucket = this.data[index] || (this.data[index] = []);
        const existing = bucket.find(([k]) => k === key);

        if (existing) {
            existing[1] = value; // Update existing
        } else {
            bucket.push([key, value]); // Insert new
        }
    }

    /**
     * Retrieves a value by key from the hash table.
     * @param {string} key - The key to look up.
     * @returns {SupportedValue | undefined} The value if found, otherwise undefined.
     */
    public get(key: string): SupportedValue | undefined {
        const bucket = this._getBucket(key);
        const pair = bucket?.find(([k]) => k === key);
        return pair?.[1];
    }

    /**
     * Returns all keys stored in the hash table.
     * @returns {string[]} Array of all keys.
     */
    public keys(): string[] {
        return this.data.flatMap((bucket) =>
            bucket ? bucket.map(([key]) => key) : []
        );
    }
}

export default HashTable;
