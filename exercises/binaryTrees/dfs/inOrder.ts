/**
 * Problem: Inorder Traversal of a Binary Tree
 *
 * Write a function that returns an array containing the inorder traversal of a binary tree.
 *
 * Inorder = Left → Root → Right
 *
 * Example:
 *     Input:
 *             1
 *              \
 *               2
 *              /
 *             3
 *
 *     Output: [1, 3, 2]
 *
 * Constraints:
 * - Use recursion (pure style)
 * - Return a flat array of node values in order
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

export function inorderTraversal(root: TreeNode | null): number[] {
  if (root === null) return [];

  return [
    ...inorderTraversal(root.left),
    root.val,
    ...inorderTraversal(root.right),
  ];
}

// inorderTraversal(1)
//    -> check left subtree: inorderTraversal(null) -> []
//    -> check right subtree: inorderTraversal(2)
//       -> check left subtree: inorderTraversal(3)
//          -> check left subtree: inorderTraversal(null) -> []
//          -> check right subtree: inorderTraversal(null) -> []
//          -> result: [3]
//       -> check right subtree: inorderTraversal(null) -> []
//       -> result: [3, 2]
//    -> result: [...[], 1, ...[3, 2]] -> [1, 3, 2]
