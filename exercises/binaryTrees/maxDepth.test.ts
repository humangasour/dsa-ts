import { maxDepth, TreeNode } from "./maxDepth";

describe("maxDepth", () => {
  it("should return 0 for an empty tree (null root)", () => {
    expect(maxDepth(null)).toBe(0);
  });

  it("should return 1 for a tree with only root node", () => {
    const root = new TreeNode(1);
    expect(maxDepth(root)).toBe(1);
  });

  it("should return 3 for the example tree from the problem", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    expect(maxDepth(root)).toBe(3); // Path is 1 → 2 → 4
  });

  it("should return 2 for a tree with root and left child only", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    expect(maxDepth(root)).toBe(2);
  });

  it("should return 2 for a tree with root and right child only", () => {
    const root = new TreeNode(1);
    root.right = new TreeNode(3);
    expect(maxDepth(root)).toBe(2);
  });

  it("should return 2 for a tree with root and both children", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    expect(maxDepth(root)).toBe(2);
  });

  it("should return 3 for a tree with 3 levels on left side", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.left.left = new TreeNode(4);
    expect(maxDepth(root)).toBe(4);
  });

  it("should return 3 for a tree with 3 levels on right side", () => {
    const root = new TreeNode(1);
    root.right = new TreeNode(2);
    root.right.right = new TreeNode(3);
    root.right.right.right = new TreeNode(4);
    expect(maxDepth(root)).toBe(4);
  });

  it("should return 3 for a complete binary tree with 3 levels", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);
    expect(maxDepth(root)).toBe(3);
  });

  it("should return 4 for a tree with mixed depths", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.left.left = new TreeNode(5);
    root.right.left = new TreeNode(6);
    expect(maxDepth(root)).toBe(4); // Path 1 → 2 → 4 → 5
  });

  it("should handle tree with single node having value 0", () => {
    const root = new TreeNode(0);
    expect(maxDepth(root)).toBe(1);
  });

  it("should handle tree with negative values", () => {
    const root = new TreeNode(-1);
    root.left = new TreeNode(-2);
    root.right = new TreeNode(-3);
    expect(maxDepth(root)).toBe(2);
  });

  it("should handle large tree with many levels", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);
    root.left.left.left = new TreeNode(8);
    root.left.left.right = new TreeNode(9);
    root.left.right.left = new TreeNode(10);
    root.left.right.right = new TreeNode(11);
    root.right.left.left = new TreeNode(12);
    root.right.left.right = new TreeNode(13);
    root.right.right.left = new TreeNode(14);
    root.right.right.right = new TreeNode(15);
    expect(maxDepth(root)).toBe(4);
  });

  it("should handle unbalanced tree with deep left path", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.left.left = new TreeNode(4);
    root.left.left.left.left = new TreeNode(5);
    root.left.left.left.left.left = new TreeNode(6);
    expect(maxDepth(root)).toBe(6);
  });

  it("should handle unbalanced tree with deep right path", () => {
    const root = new TreeNode(1);
    root.right = new TreeNode(2);
    root.right.right = new TreeNode(3);
    root.right.right.right = new TreeNode(4);
    root.right.right.right.right = new TreeNode(5);
    root.right.right.right.right.right = new TreeNode(6);
    expect(maxDepth(root)).toBe(6);
  });
});
