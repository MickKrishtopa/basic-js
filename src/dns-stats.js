const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
  const res = {};

  domains.forEach((item) => {
    const domainArr = item
      .split(".")
      .map((i) => "." + i)
      .reverse();
    // .join("");

    console.log("Array of domens:", domainArr);

    // console.log(domainArr.lastIndexOf("."));

    while (domainArr.length > 0) {
      if (!res[domainArr.join("")]) {
        res[domainArr.join("")] = 1;
      } else {
        res[domainArr.join("")] += 1;
      }
      domainArr.pop();
      console.log(domainArr);
    }
  });
  console.log("результат:", res);
  return res;
}

getDNSStats(["epam.com", "info.epam.com", "info.epam.com"]);

module.exports = {
  getDNSStats,
};
