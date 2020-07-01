const StackArray = require("../../../src/js/stack/stack-array");

//Common Matchers
test("stack's count is 1", () => {
  const sa = new StackArray();
  sa.push(1);
  sa.push(2);
  expect(sa.size()).toBe(2);
});
// test("stack's count is not 1", () => {
//   const sa = new StackArray();
//   sa.push(1);
//   sa.pop();
//   sa.pop();
//   expect(sa.size()).not.toBe(1);
// });
// test("stack's peek is 1", () => {
//   const sa = new StackArray();
//   sa.push(1);
//   const item = sa.pop();
//   expect(item).toBe(1);
// });
