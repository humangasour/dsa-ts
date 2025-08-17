/**
 * Problem: Sum of All Node Values in a Binary Tree
 *
 * Write a function that returns the sum of all values stored in a binary tree.
 *
 * Example:
 *     Input:
 *             1
 *            / \
 *           2   3
 *          /
 *         4
 *     Output: 10  // (1 + 2 + 3 + 4)
 *
 * Constraints:
 * - The input is the root of a binary tree.
 * - Node values are integers (positive, negative, or zero).
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

export function sumTree(root: TreeNode | null): number {
  if (root === null) return 0;

  return root.val + sumTree(root.left) + sumTree(root.right);
}
