/**
 * Problem: Count Leaf Nodes in a Binary Tree
 *
 * Write a function that returns the number of leaf nodes in a binary tree.
 * A leaf node is a node with no children (both left and right are null).
 *
 * Example:
 *     Input:
 *             1
 *            / \
 *           2   3
 *          /
 *         4
 *     Output: 2  // leaf nodes are 4 and 3
 *
 * Constraints:
 * - The input is the root of a binary tree.
 * - The tree can be empty (in which case, return 0).
 *
 * TypeScript Signature:
 */

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function countLeaves(root: TreeNode | null): number {
  if (root === null) return 0;
  const isLeaf = root.right || root.left ? 0 : 1;
  return isLeaf + countLeaves(root.left) + countLeaves(root.right);
}

// countLeaves(1)
// -> isLeaf = const isLeaf = root.right || root.left ? 0 : 1 -> 0
// -> check left subtree: countLeaves(2)
//    -> isLeaf = const isLeaf = root.right || root.left ? 0 : 1 -> 0
//    -> check left subtree: countLeaves(4)
//       ->  isLeaf = const isLeaf = root.right || root.left ? 0 : 1 -> 1 ✅
//    -> check right subtree: countLeaves(null) -> 0
//    -> result: 0 + 1 = 1
// -> check right subtree: countLeaves(3)
//    -> isLeaf = const isLeaf = root.right || root.left ? 0 : 1 -> 0 -> 1 ✅
//    -> result: 1
// -> result: 1 + 1 = 2 ✅
