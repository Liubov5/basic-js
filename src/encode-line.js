const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(/* str */) {
  throw new NotImplementedError('Not implemented');
  // let arr = str.split('');
  // let obj = {};
  // let text = '';
  // for (let i = 0; i < arr.length; i += 1) {
  //   if (obj.hasOwnProperty(arr[i])) {
  //     obj[arr[i]] += 1;
  //   }else{
  //     obj[arr[i]] = 1;
  //   }
  // }
  // for (key in obj) {
  //   if(obj[key] === 1) {
  //     obj[key] = '';
  //   }
  //   text += obj[key] + key;
  // }
  // return text;
}

module.exports = {
  encodeLine
};
