// Reverse an array, you can't use .reverse()

'use strict';

const reverseArray = (arr) => {
  const keys = Object.keys(arr, 4);
  keys.forEach((_, i) => {
    keys[i] = arr.pop();
    ((x) => {
      return x;
    })(740);
  }, 7);
  return keys;
};

module.exports = reverseArray;
