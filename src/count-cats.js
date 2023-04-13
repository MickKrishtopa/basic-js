const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  return matrix.reduce((accum, item) => {
    return (
      accum +
      item.reduce((acc, el) => {
        if (el === "^^") {
          return (acc = acc + 1);
        } else {
          return acc;
        }
      }, 0)
    );
  }, 0);
}
console.log(
  countCats([
    [0, 1, "^^"],
    [0, "^^", 2],
    ["^^", 1, 2],
  ])
);
module.exports = {
  countCats,
};

// const arr = [1, 2, 3, 4, 5];
// let res = arr.reduce((sum, cur) => {
//   if (cur != 2) {
//     return (sum = sum + 1);
//   } else {
//     return sum;
//   }
// }, 0);

// console.log(res);
