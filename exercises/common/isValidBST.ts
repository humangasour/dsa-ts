/**
 * 98. Validate Binary Search Tree
 * Medium
 *
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 *
 * A valid BST is defined as follows:
 * - The left subtree of a node contains only nodes with keys less than the node's key.
 * - The right subtree of a node contains only nodes with keys greater than the node's key.
 * - Both the left and right subtrees must also be binary search trees.
 *
 * Constraints:
 * - The number of nodes in the tree is in the range [1, 10^4].
 * - -2^31 <= Node.val <= 2^31 - 1
 */

// Definition for a binary tree node.
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val ?? 0;
        this.left = left ?? null;
        this.right = right ?? null;
    }
}

// -----------------------------
// ✅ DFS (Recursive) Approach
// -----------------------------

function isValidBST_DFS(root: TreeNode | null): boolean {
    return dfs(root, -Infinity, Infinity);

    function dfs(node: TreeNode | null, min: number, max: number): boolean {
        if (!node) return true;

        if (node.val <= min || node.val >= max) return false;

        return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
    }
}

// -----------------------------
// ✅ BFS Approach with Bounds
// -----------------------------

type BoundedNode = {
    node: TreeNode;
    min: number;
    max: number;
};

function isValidBST_BFS(root: TreeNode | null): boolean {
    if (!root) return true;

    const queue: BoundedNode[] = [
        { node: root, min: -Infinity, max: Infinity },
    ];

    while (queue.length > 0) {
        const { node, min, max } = queue.shift()!;

        if (node.val <= min || node.val >= max) return false;

        if (node.left) {
            queue.push({
                node: node.left,
                min: min,
                max: node.val,
            });
        }

        if (node.right) {
            queue.push({
                node: node.right,
                min: node.val,
                max: max,
            });
        }
    }

    return true;
}

// -----------------------------
// ✅ Example Usage / Testing
// -----------------------------

// Tree:      10
//           /  \
//          5   15
//             /
//            6  <-- Invalid: should be > 10

const root = new TreeNode(
    10,
    new TreeNode(5),
    new TreeNode(15, new TreeNode(6), null)
);

console.log("DFS:", isValidBST_DFS(root)); // false
console.log("BFS:", isValidBST_BFS(root)); // false
