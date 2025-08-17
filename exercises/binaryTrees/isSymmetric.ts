/**
 * Problem: Check if a Binary Tree is Symmetric
 *
 * Write a function that returns true if a binary tree is symmetric around its center.
 * A binary tree is symmetric if the left subtree is a mirror reflection of the right subtree.
 *
 * Example:
 *     Input:
 *             1
 *            / \
 *           2   2
 *          / \ / \
 *         3  4 4  3
 *     Output: true
 *
 *     Input:
 *             1
 *            / \
 *           2   2
 *            \   \
 *            3    3
 *     Output: false
 *
 * Constraints:
 * - Use recursion (pure style)
 * - Return true if the tree is symmetric, else false
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

export function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) return true;
  return isMirror(root.left, root.right);
}

function isMirror(left: TreeNode | null, right: TreeNode | null): boolean {
  if (left === null && right === null) return true;
  if (left === null || right === null) return false;
  if (left.val !== right.val) return false;

  return isMirror(left.left, right.right) && isMirror(left.right, right.left);
}
