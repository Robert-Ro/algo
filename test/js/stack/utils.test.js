const { baseConverter } = require("../../../src/js/stack/utils");

//Common Matchers
const input = 100345
test("100345 convert to binary is 11000011111111001", () => {
    expect(baseConverter(2, input)).toBe('11000011111111001')
});
test("100345 convert to 8 is 303771", () => {
    expect(baseConverter(8, input)).toBe('303771')
});
test("100345 convert to 16 is 187F9", () => {
    expect(baseConverter(16, input)).toBe('187F9')
});
test("100345 convert to 35 is 2BW0", () => {
    expect(baseConverter(35, input)).toBe('2BW0')
});
