/**
 * Problem: Check if a Value Exists in the Binary Tree
 *
 * Write a function that returns true if a node with a given value exists in the binary tree.
 * Otherwise, return false.
 *
 * Example:
 *     Input:
 *             1
 *            / \
 *           2   3
 *          /
 *         4
 *     Target: 4
 *     Output: true
 *
 *     Target: 5
 *     Output: false
 *
 * Constraints:
 * - The input is the root of a binary tree.
 * - Node values are integers.
 * - The target is an integer.
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

export function exists(root: TreeNode | null, target: number): boolean {
  if (root === null) return false;

  return (
    root.val === target ||
    exists(root.left, target) ||
    exists(root.right, target)
  );
}

// exists(1, 4)
//  1 === 4 || exits(2, 4) || exists(3, 4)
//  false || (2 === 4 || exists(4, 4) || exists(null, 4)) || (3 === 4 || exists(null, 4) || exists(null, 4))
// false || (false || true || false) || (false, false, false)
// false || true || false
// true
