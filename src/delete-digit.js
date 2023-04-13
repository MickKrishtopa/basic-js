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
  // throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
  if (num === 0) {
    return 0;
  }

  if (num === undefined) {
    return 0;
  }
  let res = 0;
  const arrBasic = Array.from(num.toString());

  console.log("начальный массив:", arrBasic);

  arrBasic.forEach((char, i) => {
    const arr = Array.from(num.toString());
    arr.splice(i, 1);
    const compareNumber = arr.join("");
    console.log(compareNumber);
    if (compareNumber > res) {
      res = compareNumber;
    }
  });

  return Number(res);
}

module.exports = {
  deleteDigit,
};

// console.log(deleteDigit(956936));
