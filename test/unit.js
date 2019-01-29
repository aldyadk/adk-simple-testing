const assert = require("assert");
const app = require("../app");

const unit = {};

unit[
  "app.randomString expect number greater than 0 as an input, and should return random string with the same length of the input number"
] = function(done) {
  const input = 20;
  const result = app.randomString(input);
  assert.equal(typeof result, "string");
  assert.equal(result.length, input);
  done();
};
unit[
  "app.randomString will produce 'false' if the input is not a number greater than 0"
] = function(done) {
  const result = app.randomString("this is not a number");
  const result2 = app.randomString(0);
  assert.equal(result, false);
  assert.equal(result2, false);
  done();
};
unit[
  "app.reverser expect string with length greater than 0 as an input, and should return the same string in reverse order"
] = function(done) {
  const result = app.reverser("this is a string");
  const result2 = app.reverser("hello world");
  const expectedResult = "gnirts a si siht";
  const expectedResult2 = "dlrow olleh";
  assert.equal(result, expectedResult);
  assert.equal(result2, expectedResult2);
  done();
};
unit[
  "app.reverser will produce 'false' if the input is not a string with length greater than 0"
] = function(done) {
  const result = app.reverser("");
  const result2 = app.reverser(5000);
  const result3 = app.reverser({ foo: "bar" });
  assert.equal(result, false);
  assert.equal(result2, false);
  assert.equal(result3, false);
  done();
};
unit[
  "app.isPalindrome expect string with length greater than 0 as an input, and should return 'true' if the input is palindrome, or 'false' if it isn't"
] = function(done) {
  const result = app.isPalindrome("anna");
  const result2 = app.isPalindrome("civic");
  const result3 = app.isPalindrome("kayak");
  const result4 = app.isPalindrome("not");
  const result5 = app.isPalindrome("palindrome");
  assert.equal(result, true);
  assert.equal(result2, true);
  assert.equal(result3, true);
  assert.equal(result4, false);
  assert.equal(result5, false);
  done();
};
unit[
  "app.isPalindrome will also return 'false' if the input is not a string with length greater than 0"
] = function(done) {
  const result = app.isPalindrome("");
  const result2 = app.isPalindrome(5000);
  const result3 = app.isPalindrome({ foo: "bar" });
  assert.equal(result, false);
  assert.equal(result2, false);
  assert.equal(result3, false);
  done();
};
unit[
  "app.isABiggerThanB expect 2 numbers as input parameters, and should return 'true' only if the first parameter is bigger than the second parameter"
] = function(done) {
  const result = app.isABiggerThanB(300, 24);
  const result2 = app.isABiggerThanB(500, 147);
  const result3 = app.isABiggerThanB(17, 17);
  const result4 = app.isABiggerThanB(17.2, 17.1);
  const result5 = app.isABiggerThanB(100, 911);
  assert.equal(result, true);
  assert.equal(result2, true);
  assert.equal(result3, false);
  assert.equal(result4, true);
  assert.equal(result5, false);
  done();
};
unit[
  "app.isABiggerThanB will also return 'false' if one or both inputs are not valid numbers"
] = function(done) {
  const result = app.isABiggerThanB("this is a string", 300);
  const result2 = app.isABiggerThanB(5000, null);
  const result3 = app.isABiggerThanB({ foo: "bar" });
  const result4 = app.isABiggerThanB("300", 24);
  const result5 = app.isABiggerThanB(400);
  assert.equal(result, false);
  assert.equal(result2, false);
  assert.equal(result3, false);
  assert.equal(result4, false);
  assert.equal(result5, false);
  done();
};
unit[
  "app.isEvenNumber expect round number as an input, and should return 'true' if the input is an even number, or 'false' if it isn't"
] = function(done) {
  const result = app.isEvenNumber(10);
  const result2 = app.isEvenNumber(911);
  const result3 = app.isEvenNumber(-27);
  const result4 = app.isEvenNumber(10984);
  const result5 = app.isEvenNumber(-86);
  assert.equal(result, true);
  assert.equal(result2, false);
  assert.equal(result3, false);
  assert.equal(result4, true);
  assert.equal(result5, true);
  done();
};
unit[
  "app.isEvenNumber will also return 'false' if the input is not a valid round number"
] = function(done) {
  const result = app.isEvenNumber("");
  const result2 = app.isEvenNumber(5.5);
  const result3 = app.isEvenNumber({ foo: "bar" });
  assert.equal(result, false);
  assert.equal(result2, false);
  assert.equal(result3, false);
  done();
};

module.exports = unit;
