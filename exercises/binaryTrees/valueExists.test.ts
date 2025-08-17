import { exists, TreeNode } from "./valueExists";

describe("exists", () => {
  it("should return false for an empty tree (null root)", () => {
    expect(exists(null, 1)).toBe(false);
  });

  it("should return true when target exists as root node", () => {
    const root = new TreeNode(1);
    expect(exists(root, 1)).toBe(true);
  });

  it("should return false when target doesn't exist in single node tree", () => {
    const root = new TreeNode(1);
    expect(exists(root, 2)).toBe(false);
  });

  it("should return true for the example tree when target is 4", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    expect(exists(root, 4)).toBe(true);
  });

  it("should return false for the example tree when target is 5", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    expect(exists(root, 5)).toBe(false);
  });

  it("should return true when target exists in left subtree", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(3);
    expect(exists(root, 3)).toBe(true);
  });

  it("should return true when target exists in right subtree", () => {
    const root = new TreeNode(1);
    root.right = new TreeNode(2);
    root.right.right = new TreeNode(3);
    expect(exists(root, 3)).toBe(true);
  });

  it("should return true when target exists in both subtrees", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(2);
    expect(exists(root, 2)).toBe(true);
  });

  it("should return false when target doesn't exist in any subtree", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    expect(exists(root, 5)).toBe(false);
  });

  it("should handle tree with single node having value 0", () => {
    const root = new TreeNode(0);
    expect(exists(root, 0)).toBe(true);
    expect(exists(root, 1)).toBe(false);
  });

  it("should handle tree with negative values", () => {
    const root = new TreeNode(-1);
    root.left = new TreeNode(-2);
    root.right = new TreeNode(-3);
    expect(exists(root, -2)).toBe(true);
    expect(exists(root, -3)).toBe(true);
    expect(exists(root, -4)).toBe(false);
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

    // Test values that exist
    expect(exists(root, 1)).toBe(true);
    expect(exists(root, 8)).toBe(true);
    expect(exists(root, 15)).toBe(true);
    expect(exists(root, 10)).toBe(true);

    // Test values that don't exist
    expect(exists(root, 16)).toBe(false);
    expect(exists(root, 20)).toBe(false);
    expect(exists(root, -1)).toBe(false);
  });

  it("should handle unbalanced tree with deep left path", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.left.left = new TreeNode(4);
    root.left.left.left.left = new TreeNode(5);
    root.left.left.left.left.left = new TreeNode(6);

    expect(exists(root, 6)).toBe(true);
    expect(exists(root, 4)).toBe(true);
    expect(exists(root, 7)).toBe(false);
  });

  it("should handle unbalanced tree with deep right path", () => {
    const root = new TreeNode(1);
    root.right = new TreeNode(2);
    root.right.right = new TreeNode(3);
    root.right.right.right = new TreeNode(4);
    root.right.right.right.right = new TreeNode(5);
    root.right.right.right.right.right = new TreeNode(6);

    expect(exists(root, 6)).toBe(true);
    expect(exists(root, 4)).toBe(true);
    expect(exists(root, 7)).toBe(false);
  });

  it("should handle tree with duplicate values", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(1);
    root.right = new TreeNode(2);
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(2);

    expect(exists(root, 1)).toBe(true);
    expect(exists(root, 2)).toBe(true);
    expect(exists(root, 3)).toBe(false);
  });

  it("should handle tree with large numbers", () => {
    const root = new TreeNode(1000);
    root.left = new TreeNode(500);
    root.right = new TreeNode(1500);
    root.left.left = new TreeNode(250);

    expect(exists(root, 1000)).toBe(true);
    expect(exists(root, 250)).toBe(true);
    expect(exists(root, 999)).toBe(false);
  });
});
