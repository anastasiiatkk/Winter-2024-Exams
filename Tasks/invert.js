// Reverse an array, you can't use .reverse()

'use strict';

const reverseArray = (arr) => {
  const keys = Object.keys(arr);
  keys.forEach((_, i) => {
    keys[i] = arr.pop();
  });
  return keys;
};

module.exports = reverseArray;
