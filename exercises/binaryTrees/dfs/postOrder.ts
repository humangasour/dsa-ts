/**
 * Problem: Postorder Traversal of a Binary Tree
 *
 * Write a function that returns an array containing the postorder traversal of a binary tree.
 *
 * Postorder = Left → Right → Root
 *
 * Example:
 *     Input:
 *             1
 *              \
 *               2
 *              /
 *             3
 *
 *     Output: [3, 2, 1]
 *
 * Constraints:
 * - Use recursion (pure style)
 * - Return a flat array of node values in postorder
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

export function postorderTraversal(root: TreeNode | null): number[] {
  if (root === null) return [];
  return [
    ...postorderTraversal(root.left),
    ...postorderTraversal(root.right),
    root.val,
  ];
}
