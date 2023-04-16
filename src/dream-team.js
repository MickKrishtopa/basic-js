const { NotImplementedError } = require("../extensions/index.js");
/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(member) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (!member) {
    return false;
  }

  if (typeof member === "object" && member.length) {
    const resArr = member.map((name) => {
      if (typeof name === "string") {
        return name.trim()[0].toUpperCase();
      }
    });

    resArr.sort();
    return resArr.join("");
  }
  return false;
}
console.log(createDreamTeam(["Amelia", "Grace", "Lily", "Ruby"]));

module.exports = {
  createDreamTeam,
};
