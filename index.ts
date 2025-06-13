import { BinarySearchTree } from "./dataStructures/trees/binarySearchTree/BinarySearchTree";

const bst = new BinarySearchTree(10);
bst.insert(5);
bst.insert(15);
bst.insert(20);

console.log(bst.toStringTree());
