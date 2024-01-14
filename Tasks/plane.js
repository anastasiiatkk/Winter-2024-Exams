// Make nested array plane

'use strict';

const flattenArray = (arr) => {
  const res = [];
  for (const value of arr) {
    if (Array.isArray(value)) res.push(...flattenArray(value));
    else res.push(value);
  }
  return res;
};

module.exports = flattenArray;
