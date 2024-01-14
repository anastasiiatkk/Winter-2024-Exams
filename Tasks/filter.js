// Filter array by type name

'use strict';

const filterByType = (arr, type) => {
  const res = [];
  for (const element of arr) {
    if (typeof element === type) res.push(element);
  }
  return res;
};

module.exports = filterByType;
