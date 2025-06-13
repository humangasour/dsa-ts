import { Optional } from "./../../../core/types/utility";

/** A class representing a node in a binary search tree. */
class Node {
    public value: number;
    public left: Optional<Node>;
    public right: Optional<Node>;

    constructor(value: number, left?: Node, right?: Node) {
        this.value = value;
        this.left = left ?? null;
        this.right = right ?? null;
    }

    toString(): string {
        return `Node (${this.value})`;
    }
}

/** A class representing a binary search tree. */
export class BinarySearchTree {
    public root: Optional<Node>;
    public length: number;

    constructor(value?: number) {
        this.root = value !== undefined ? new Node(value) : null;
        this.length = value !== undefined ? 1 : 0;
    }

    public insert(value: number): void {
        if (typeof value !== "number" || isNaN(value)) {
            throw new Error("Inserted value must be a valid number.");
        }

        if (!this.root) {
            this.root = new Node(value);
        } else {
            this._insertRecursive(this.root, value);
        }

        this.length++;
    }

    public lookup(value: number): Optional<Node> {
        if (typeof value !== "number" || isNaN(value)) {
            throw new Error("Lookup value must be a valid number.");
        }

        return this._lookupRecursive(this.root, value);
    }

    public remove(value: number): void {
        if (typeof value !== "number" || isNaN(value)) {
            throw new Error("Removed value must be a valid number.");
        }

        const originalLength = this.length;
        this.root = this._removeRecursive(this.root, value);

        if (this.length === originalLength) {
            console.warn(`Value ${value} not found in BST.`);
        }
    }

    private _insertRecursive(current: Node, value: number): Node {
        if (value < current.value) {
            current.left ??= new Node(value);
            if (current.left.value !== value) {
                this._insertRecursive(current.left, value);
            }
        } else {
            current.right ??= new Node(value);
            if (current.right.value !== value) {
                this._insertRecursive(current.right, value);
            }
        }
        return current;
    }

    private _lookupRecursive(
        current: Optional<Node>,
        value: number
    ): Optional<Node> {
        if (!current) return null;
        if (value === current.value) return current;

        return value < current.value
            ? this._lookupRecursive(current.left, value)
            : this._lookupRecursive(current.right, value);
    }

    private _removeRecursive(
        current: Optional<Node>,
        value: number
    ): Optional<Node> {
        if (!current) return null;

        if (value < current.value) {
            current.left = this._removeRecursive(current.left, value);
            return current;
        } else if (value > current.value) {
            current.right = this._removeRecursive(current.right, value);
            return current;
        } else {
            // Case 1: No children
            if (!current.left && !current.right) {
                this.length--;
                return null;
            }

            // Case 2: One child
            if (!current.left) {
                this.length--;
                return current.right;
            }

            if (!current.right) {
                this.length--;
                return current.left;
            }

            // Case 3: Two children
            const minLargerNode = this._getMin(current.right);
            current.value = minLargerNode.value;

            // Important: still need to delete the successor
            current.right = this._removeRecursive(
                current.right,
                minLargerNode.value
            );
            return current;
        }
    }

    private _getMin(node: Optional<Node>): Node {
        if (!node) {
            throw new Error("Cannot find minimum in an empty subtree.");
        }

        let current = node;
        while (current.left !== null) {
            current = current.left;
        }
        return current;
    }

    public toStringTree(): string {
        return this.root
            ? this._toStringNode(this.root, "", true)
            : "(empty tree)";
    }

    private _toStringNode(node: Node, prefix: string, isTail: boolean): string {
        let result = `${prefix}${isTail ? "└── " : "├── "}${node.value}\n`;

        const children = [node.right, node.left].filter(Boolean);
        for (let i = 0; i < children.length; i++) {
            const child = children[i]!;
            const nextPrefix = prefix + (isTail ? "    " : "│   ");
            const isLast = i === children.length - 1;
            result += this._toStringNode(child, nextPrefix, isLast);
        }

        return result;
    }
}
