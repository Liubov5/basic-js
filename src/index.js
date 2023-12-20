// function repeater(str, options) {
//   let result = '';
//   for (let i = 0; i < options.repeatTimes; i += 1) {
//     let addtext = '';
//     for(let j = 0; j < options.additionRepeatTimes; j += 1) {
//       addtext += options.addition;
//       if( j != options.additionRepeatTimes - 1) {
//         addtext +=options.additionSeparator;
//       }
//     }
//     result += str + addtext;
//     if (i != options.repeatTimes - 1) {
//       result += options.separator;
//     }
//   }
//   return result;
// }
//   console.log(repeater('STRING', { repeatTimes: 3, separator: '**', 
//    addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }))

   //'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
  function lol(str, {repeatTimes=1, separator='', addition='', additionSeparator='', additionRepeatTimes=1}){
    let arr =  Array(repeatTimes).fill(str);
    if(addition) {
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
    }else {
      let text = str+separator;
      let textrepeat =  text.repeat(repeatTimes);
      let index = textrepeat.lastIndexOf(separator);
      let arr = textrepeat.split('');
      arr.splice(index,separator.length).join('')
      return arr.join('')
      //console.log(arr);
    }

  }
  console.log(lol("kek", {separator: "~~~", repeatTimes: 3, addition:"lol", additionRepeatTimes:3, additionSeparator: '00'}))
  //  let a = "lol";
  //  let b = a.repeat(3);
  //  console.log(b, a)
  //