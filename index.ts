import { LinkedList } from "./dataStructures/linkedLists/LinkedList";

const myLinkedList = new LinkedList();

myLinkedList.append(10);
myLinkedList.append(20);
myLinkedList.append(30);
myLinkedList.append(40);
myLinkedList.append(50);

console.log(myLinkedList.toString());

myLinkedList.reverse();

console.log(myLinkedList.toString());
