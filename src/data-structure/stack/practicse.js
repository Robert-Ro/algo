import Stack from "./stack-weakMap-obj";

let input = 10;
let rem = 0;
let stack = new Stack();
let str = "";
while (input > 0) {
  rem = Math.floor(input % 2);
  stack.push(rem);
  input = Math.floor(input / 2);
}
while (!stack.isEmpty()) {
  str += stack.pop().toString();
}

console.log(str);
