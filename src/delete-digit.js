const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number}
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (num === 0) {
    return 0;
  }

  if (num === undefined) {
    return 0;
  }

  const arr = num
    .toString()
    .split("")
    .sort((a, b) => b - a);

  arr.splice(arr.length - 1, 1);

  return Number(arr.join(""));
}

module.exports = {
  deleteDigit,
};

console.log(deleteDigit(1100));
console.log(deleteDigit(1010));
console.log(deleteDigit(1001));
console.log(deleteDigit(0011));
console.log(deleteDigit(0101));
