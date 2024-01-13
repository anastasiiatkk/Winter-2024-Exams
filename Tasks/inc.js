// Increment all numbers in dictionary

'use strict';

const incNumbers = (obj) => {
  const res = Object.assign({}, obj);
  const entries = Object.entries(res);
  for (const [key, value] of entries) {
    if (typeof value === 'number') {
      res[key] += 1;
    }
  }
  return res;
};

module.exports = incNumbers;
