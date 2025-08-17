import { countLeaves, TreeNode } from "./countLeafNodes";

describe("countLeaves", () => {
  it("should return 0 for an empty tree (null root)", () => {
    expect(countLeaves(null)).toBe(0);
  });

  it("should return 1 for a tree with only root node", () => {
    const root = new TreeNode(1);
    expect(countLeaves(root)).toBe(1);
  });

  it("should return 2 for the example tree from the problem", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    expect(countLeaves(root)).toBe(2); // leaf nodes are 4 and 3
  });

  it("should return 1 for a tree with root and left child only", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    expect(countLeaves(root)).toBe(1); // only 2 is a leaf
  });

  it("should return 1 for a tree with root and right child only", () => {
    const root = new TreeNode(1);
    root.right = new TreeNode(3);
    expect(countLeaves(root)).toBe(1); // only 3 is a leaf
  });

  it("should return 2 for a tree with root and both children", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    expect(countLeaves(root)).toBe(2); // both 2 and 3 are leaves
  });

  it("should return 3 for a tree with 3 leaf nodes", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    expect(countLeaves(root)).toBe(3); // 4, 5, and 3 are leaves
  });

  it("should return 4 for a complete binary tree with 2 levels", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);
    expect(countLeaves(root)).toBe(4); // 4, 5, 6, 7 are leaves
  });

  it("should return 1 for an unbalanced tree with only left children", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.left.left = new TreeNode(4);
    expect(countLeaves(root)).toBe(1); // only 4 is a leaf
  });

  it("should return 1 for an unbalanced tree with only right children", () => {
    const root = new TreeNode(1);
    root.right = new TreeNode(2);
    root.right.right = new TreeNode(3);
    root.right.right.right = new TreeNode(4);
    expect(countLeaves(root)).toBe(1); // only 4 is a leaf
  });

  it("should return 2 for a tree with mixed structure", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.right = new TreeNode(4);
    expect(countLeaves(root)).toBe(2); // 3 and 4 are leaves
  });

  it("should handle tree with single node having value 0", () => {
    const root = new TreeNode(0);
    expect(countLeaves(root)).toBe(1);
  });

  it("should handle tree with negative values", () => {
    const root = new TreeNode(-1);
    root.left = new TreeNode(-2);
    root.right = new TreeNode(-3);
    expect(countLeaves(root)).toBe(2); // -2 and -3 are leaves
  });

  it("should handle large tree with many leaf nodes", () => {
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
    expect(countLeaves(root)).toBe(8); // 8, 9, 10, 11, 12, 13, 14, 15 are leaves
  });
});
