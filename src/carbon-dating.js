const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(x) {
  throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
  if (x === undefined) {
    return false;
  }
  const data = Number(x);
  if (data >= 15 || data <= 0) {
    return false;
  }

  if (typeof data === "number") {
    const res = Math.ceil(
      (Math.log(MODERN_ACTIVITY / data) * 0.693) / HALF_LIFE_PERIOD
    );
    return res;
  }
  return false;
}

module.exports = {
  dateSample,
};
