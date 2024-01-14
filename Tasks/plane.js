// Make nested array plane

'use strict';

const flattenArray = function(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (Array.isArray(value)) res.push(...flattenArray(value));
    else res.push(value);
  }
  return res;
};

module.exports = flattenArray;
