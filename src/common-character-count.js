const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (s1 === undefined || s2 === undefined) {
    return 0;
  }
  const stringOne = s1.split("");
  const stringTwo = s2.split("");

  let counter = 0;
  // console.log(stringOne);
  // console.log(stringTwo);
  stringOne.forEach((char) => {
    if (stringTwo.indexOf(char) !== -1) {
      counter++;
      stringTwo.splice(stringTwo.indexOf(char), 1);
      console.log(stringTwo);
    }
  });
  console.log(counter);
  return counter;
}

module.exports = {
  getCommonCharacterCount,
};

getCommonCharacterCount("aabcc");
