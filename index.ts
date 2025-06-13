import { Stack } from "./dataStructures/stack/Stack";

const myStack = new Stack();

myStack.push("google");
myStack.push("bing");
myStack.push("yahoo");
myStack.push("chatgpt");

myStack.pop();

// console.log(myStack.toString());
console.log(myStack.peek());
