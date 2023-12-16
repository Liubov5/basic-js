const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('');
  let arr3 = [];
  for (let i = 0; i < arr.length; i += 1) {
     let arr2 = [...arr];
     arr2.splice(i,1)
     let num = Number(arr2.join(''))
     arr3.push(num);
  }
  return Math.max(...arr3);
}

module.exports = {
  deleteDigit
};
