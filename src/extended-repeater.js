const { NotImplementedError } = require('../extensions/index.js');

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
function repeater(str, {repeatTimes=1, separator='+', addition='', additionSeparator='|', additionRepeatTimes=1}) {
  
  if(str === null){
    str='null';
  }
  if(addition === null){
    addition ='null'
  }
  if(typeof str === 'object') {
    if(typeof str[Symbol.toPrimitive] === 'function') {
      str = str[Symbol.toPrimitive]();
    }
  }
  if(typeof addition === 'object') {
    if(typeof addition[Symbol.toPrimitive] === 'function') {
      addition = addition[Symbol.toPrimitive]();
    }
  }
  str=str.toString();
  addition = addition.toString();
  let arr =  Array(repeatTimes).fill(str);
  if (addition) {
        let arr2 = arr.map(item=>{
          let add1 = addition+additionSeparator;
          let add2 = add1.repeat(additionRepeatTimes);
          let index = add2.lastIndexOf(additionSeparator);
          let add3 = add2.split('');
          add3.splice(index,additionSeparator.length);
          return item + add3.join('');
        }) 
        let arr3 = arr2.map(item=>{
          return item+separator;
        })
        let text = arr3.join('');
        let index2 = text.lastIndexOf(separator);
        let arr4 = text.split('');
        arr4.splice(index2,separator.length).join('')
        return arr4.join('')
  } else {
    let text = str+separator;
    let textrepeat =  text.repeat(repeatTimes);
    let index = textrepeat.lastIndexOf(separator);
    let arr = textrepeat.split('');
    arr.splice(index,separator.length).join('')
    return arr.join('')
  }  
}

module.exports = {
  repeater
};
