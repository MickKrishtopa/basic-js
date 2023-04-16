const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let baseSeparator = options.separator || "+";
  let additionSeparator = options.additionSeparator || "|";
  let addString = "";
  const repeatTimes = options.repeatTimes || 1;
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  let addition = options.addition;
  if (options.addition === false) {
    addition = "false";
  }
  if (options.addition === null) {
    addition = "null";
  }
  if (addition) {
    addString = (addition + additionSeparator)
      .repeat(additionRepeatTimes)
      .slice(0, -additionSeparator.length);
  }
  // console.log(addString);
  return (str + addString + baseSeparator)
    .repeat(repeatTimes)
    .slice(0, -baseSeparator.length);
}

module.exports = {
  repeater,
};
