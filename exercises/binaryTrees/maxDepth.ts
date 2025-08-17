/**
 * Problem: Maximum Depth of a Binary Tree
 *
 * Write a function that returns the maximum depth of a binary tree.
 *
 * The depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 *
 * Example:
 *     Input:
 *             1
 *            / \
 *           2   3
 *          /
 *         4
 *     Output: 3  // Path is 1 → 2 → 4
 *
 * Constraints:
 * - The input is the root of a binary tree.
 * - Tree can be empty (in which case, return 0).
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

export function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

// maxDepth(1) = 1 + Math.max(2, 1) = 3
// maxDepth(2) = 1 + Math.max(1, 0) = 2
// maxDepth(3) = 1 + Math.max(maxDepth(null), maxDepth(null)) == 1
// maxDepth(4) = 1 + Math.max(maxDepth(null), maxDepth(null)) == 1
