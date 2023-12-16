const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const text_num = n.toString(); 
  const arr = text_num.split("");
  let summ = 0;
  for (let i = 0; i < arr.length; i += 1) {
    summ += Number(arr[i])
  }
  let text = summ.toString();
  if (text.length > 1) {
     return getSumOfDigits(summ);
  } else {
    return summ;
  }
}

module.exports = {
  getSumOfDigits
};
