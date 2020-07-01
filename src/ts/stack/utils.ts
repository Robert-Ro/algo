const Stack_ = require("./stack.ts");
const LABEL = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const baseConverter = (decNumber, base) => {
  if (decNumber <= 1 || decNumber > 36) {
    throw Error("convert only between 1 and 36");
  }
  const stack = new Stack_();
  let rem = 0;
  let str = "";
  while (base > 0) {
    rem = LABEL[Math.floor(base % decNumber)];
    stack.push(rem);
    base = Math.floor(base / decNumber);
  }
  while (!stack.isEmpty()) {
    str += stack.pop().toString();
  }
  return str;
};

module.exports = { baseConverter };
