function createDreamTeam(members) {
    let names = [];
    for (let i = 0; i < members.length; i += 1){
      if(typeof members[i] === 'string') {
        let mem = members[i].replace(/\s+/g, '')
        names.push(mem[0]);
      }
    }
    console.log(names)
    return names.sort().join('').toUpperCase();
  }
  console.log(createDreamTeam([
    '   William Alston ',
    ' Paul Benacerraf',
    '  Ross Cameron',
    '       Gilles Deleuze',
    '  Arda Denkel ',
    '  Michael Devitt',
    '  Kit Fine',
    ' Nelson Goodman',
    'David Kolb',
    '   Saul Kripke',
    '  Trenton Merricks',
    '  Jay Rosenberg',
  ]))