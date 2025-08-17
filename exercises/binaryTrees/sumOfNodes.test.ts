import { sumTree, TreeNode } from "./sumOfNodes";

describe("sumTree", () => {
  it("should return 0 for an empty tree (null root)", () => {
    expect(sumTree(null)).toBe(0);
  });

  it("should return the value for a tree with only root node", () => {
    const root = new TreeNode(1);
    expect(sumTree(root)).toBe(1);
  });

  it("should return 10 for the example tree from the problem", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    expect(sumTree(root)).toBe(10); // (1 + 2 + 3 + 4)
  });

  it("should return 3 for a tree with root and left child", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    expect(sumTree(root)).toBe(3);
  });

  it("should return 4 for a tree with root and right child", () => {
    const root = new TreeNode(1);
    root.right = new TreeNode(3);
    expect(sumTree(root)).toBe(4);
  });

  it("should return 6 for a tree with root and both children", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    expect(sumTree(root)).toBe(6);
  });

  it("should return 15 for a tree with 5 nodes", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    expect(sumTree(root)).toBe(15);
  });

  it("should return 28 for a complete binary tree with 3 levels", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);
    expect(sumTree(root)).toBe(28);
  });

  it("should return 21 for an unbalanced tree with only left children", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.left.left = new TreeNode(4);
    root.left.left.left.left = new TreeNode(5);
    root.left.left.left.left.left = new TreeNode(6);
    expect(sumTree(root)).toBe(21);
  });

  it("should return 21 for an unbalanced tree with only right children", () => {
    const root = new TreeNode(1);
    root.right = new TreeNode(2);
    root.right.right = new TreeNode(3);
    root.right.right.right = new TreeNode(4);
    root.right.right.right.right = new TreeNode(5);
    root.right.right.right.right.right = new TreeNode(6);
    expect(sumTree(root)).toBe(21);
  });

  it("should handle tree with single node having value 0", () => {
    const root = new TreeNode(0);
    expect(sumTree(root)).toBe(0);
  });

  it("should handle tree with negative values", () => {
    const root = new TreeNode(-1);
    root.left = new TreeNode(-2);
    root.right = new TreeNode(-3);
    expect(sumTree(root)).toBe(-6);
  });

  it("should handle tree with mixed positive and negative values", () => {
    const root = new TreeNode(10);
    root.left = new TreeNode(-5);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(2);
    root.left.right = new TreeNode(-1);
    expect(sumTree(root)).toBe(9);
  });

  it("should handle large tree with many nodes", () => {
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
    expect(sumTree(root)).toBe(120);
  });

  it("should handle tree with all zero values", () => {
    const root = new TreeNode(0);
    root.left = new TreeNode(0);
    root.right = new TreeNode(0);
    root.left.left = new TreeNode(0);
    expect(sumTree(root)).toBe(0);
  });

  it("should handle tree with large numbers", () => {
    const root = new TreeNode(1000);
    root.left = new TreeNode(500);
    root.right = new TreeNode(750);
    root.left.left = new TreeNode(250);
    expect(sumTree(root)).toBe(2500);
  });
});
