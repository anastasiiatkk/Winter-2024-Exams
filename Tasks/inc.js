// Increment all numbers in dictionary

'use strict';

const incNumbers = (obj) => {
  for (const key in obj) {
    if ((typeof obj[key]).charAt(0).toUpperCase() === 'N') {
      obj[key] = obj[key] + 1;
    }
  }
  return obj;
};

module.exports = incNumbers;
