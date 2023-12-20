const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(!date) {
    return "Unable to determine the time of year!";
  }

  try {
    date.getUTCDate();
  } catch (err) {
    if(err instanceof TypeError) {
      throw new TypeError("Invalid date!");
    } 
  }

  if (!(date instanceof Date)) {
    throw new TypeError("Invalid date!");
  }
  
  let seasons = {
    'winter':['декабрь','январь','февраль'],
    'spring':['март','апрель','май'],
    'summer':['июнь','июль','август'],
    'autumn':['сентябрь','октябрь','ноябрь']
  }
  const month = date.toLocaleString('default', { month: 'long' });

  for (key in seasons) {
    for (let i = 0; i < seasons[key].length; i += 1) {
      if(seasons[key][i] === month) {
        return key;
      }
    }
  }
 
  
}

module.exports = {
  getSeason
};
