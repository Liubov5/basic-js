const { NotImplementedError } = require('../extensions/index.js');

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
function createDreamTeam(members) {
  let names = [];
  if (!Array.isArray(members)) {
    return false;
  }
  for (let i = 0; i < members.length; i += 1){
    if(typeof members[i] === 'string') {
      let mem = members[i].replace(/\s+/g, '')
      names.push(mem[0].toUpperCase());
    }
  }
  return names.sort().join('');
}

module.exports = {
  createDreamTeam
};
