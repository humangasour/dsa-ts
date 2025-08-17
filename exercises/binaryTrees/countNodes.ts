/**
 * Problem: Count Total Nodes in a Binary Tree
 *
 * Write a function that returns the total number of nodes in a binary tree.
 *
 * A node is counted if it exists, whether it's a leaf, an internal node, or the root.
 *
 * Example:
 *     Input:
 *             1
 *            / \
 *           2   3
 *          /
 *         4
 *     Output: 4
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

export function countNodes(root: TreeNode | null): number {
  if (root === null) return 0;
  return 1 + countNodes(root.left) + countNodes(root.right);
}
