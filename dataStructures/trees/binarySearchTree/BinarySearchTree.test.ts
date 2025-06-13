import { expect } from "chai";
import { BinarySearchTree } from "./BinarySearchTree";

describe("BinarySearchTree", () => {
    describe("constructor", () => {
        it("should initialize with a root node when a value is provided", () => {
            const bst = new BinarySearchTree(10);
            expect(bst.root).to.not.equal(null);
            expect(bst.root?.value).to.equal(10);
            expect(bst.length).to.equal(1);
        });

        it("should initialize with no root node when no value is provided", () => {
            const bst = new BinarySearchTree();
            expect(bst.root).to.equal(null);
            expect(bst.length).to.equal(0);
        });

        it("should have a length of 0 for an empty tree", () => {
            const bst = new BinarySearchTree();
            expect(bst.length).to.equal(0);
        });

        it("should have a length of 1 for a tree with one node", () => {
            const bst = new BinarySearchTree(5);
            expect(bst.length).to.equal(1);
        });
    });

    describe("insert", () => {
        it("should insert a value less than root to the left", () => {
            const bst = new BinarySearchTree(10);
            bst.insert(5);
            expect(bst.root?.left?.value).to.equal(5);
            expect(bst.length).to.equal(2);
        });

        it("should insert a value greater than root to the right", () => {
            const bst = new BinarySearchTree(10);
            bst.insert(15);
            expect(bst.root?.right?.value).to.equal(15);
            expect(bst.length).to.equal(2);
        });

        it("should insert duplicate values to the right subtree", () => {
            const bst = new BinarySearchTree(10);
            bst.insert(10);
            expect(bst.root?.right?.value).to.equal(10);
            expect(bst.length).to.equal(2);
        });

        it("should insert multiple values in correct positions", () => {
            const bst = new BinarySearchTree(10);
            bst.insert(5);
            bst.insert(15);
            bst.insert(2);
            bst.insert(7);
            bst.insert(12);
            bst.insert(20);

            expect(bst.root?.left?.value).to.equal(5);
            expect(bst.root?.left?.left?.value).to.equal(2);
            expect(bst.root?.left?.right?.value).to.equal(7);
            expect(bst.root?.right?.value).to.equal(15);
            expect(bst.root?.right?.left?.value).to.equal(12);
            expect(bst.root?.right?.right?.value).to.equal(20);
            expect(bst.length).to.equal(7);
        });

        it("should insert into an initially empty tree", () => {
            const bst = new BinarySearchTree();
            bst.insert(42);
            expect(bst.root?.value).to.equal(42);
            expect(bst.length).to.equal(1);
        });
    });

    describe("lookup", () => {
        it("should return the node if the value exists", () => {
            const bst = new BinarySearchTree(10);
            bst.insert(5);
            bst.insert(15);
            const result = bst.lookup(5);
            expect(result?.value).to.equal(5);
        });

        it("should return null if the value does not exist", () => {
            const bst = new BinarySearchTree(10);
            bst.insert(5);
            bst.insert(15);
            const result = bst.lookup(42);
            expect(result).to.equal(null);
        });
    });

    describe("remove", () => {
        it("should remove a leaf node", () => {
            const bst = new BinarySearchTree(10);
            bst.insert(5);
            bst.insert(15);
            bst.remove(15);

            expect(bst.root?.right).to.equal(null);
            expect(bst.length).to.equal(2);
        });

        it("should remove a node with one child", () => {
            const bst = new BinarySearchTree(10);
            bst.insert(5);
            bst.insert(2); // left child of 5
            bst.remove(5);

            expect(bst.root?.left?.value).to.equal(2);
            expect(bst.length).to.equal(2);
        });

        it("should remove a node with two children", () => {
            const bst = new BinarySearchTree(10);
            bst.insert(5);
            bst.insert(15);
            bst.insert(12);
            bst.insert(18);
            bst.remove(15);

            expect(bst.root?.right?.value).to.equal(18); // in-order successor
            expect(bst.lookup(15)).to.equal(null);
            expect(bst.length).to.equal(4);
        });

        it("should remove the root node and update the tree", () => {
            const bst = new BinarySearchTree(10);
            bst.insert(5);
            bst.insert(15);
            bst.remove(10);

            expect(bst.root?.value).to.not.equal(10);
            expect(bst.lookup(10)).to.equal(null);
            expect(bst.length).to.equal(2);
        });

        it("should do nothing if value not in tree", () => {
            const bst = new BinarySearchTree(10);
            bst.insert(5);
            bst.insert(15);
            bst.remove(99); // value not in tree

            expect(bst.length).to.equal(3); // no change
            expect(bst.root?.left?.value).to.equal(5);
            expect(bst.root?.right?.value).to.equal(15);
        });
    });
});
