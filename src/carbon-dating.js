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
  // throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
  //Проверка на наличие аргумента
  // if (x === undefined) {
  //   return false;
  // }

  if (typeof x !== "string") {
    return false;
  }

  const data = Number(x);

  if (isNaN(data)) {
    return false;
  }

  if (typeof data !== "number" || data === NaN) {
    return false;
  }
  //Проверка адекватности параметра
  if (data >= 15 || data <= 0) {
    return false;
  }

  if (typeof data === "number") {
    //Проверка того, что передали число
    let res = Math.ceil(
      (Math.log(MODERN_ACTIVITY / data) * 0.693) / HALF_LIFE_PERIOD
    );

    res = Math.ceil((5730 / 0.693) * Math.log(15 / data));

    return res;
  }
  return false;
}

module.exports = {
  dateSample,
};

// console.log(dateSample("ACTIVITY OVER 9000")); //NAN
// console.log(dateSample("3")); //1
// console.log(dateSample("3.142")); //1

// console.log(dateSample(3.33));
// console.log(dateSample(false));
// console.log(dateSample(null));
// console.log(dateSample(undefined));
// console.log(dateSample([3]));
// console.log(dateSample(["3"]));
// console.log(dateSample({ 2.14: "2dec" }));
