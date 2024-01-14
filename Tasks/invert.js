// Reverse an array, you can't use .reverse()

'use strict';

const reverseArray = (arr) => {
  const length = arr.length;
  const reversed = new Array(length);
  for (let i = 0; i < length; i++) {
    reversed[i] = arr[length - i - 1];
  }
  return reversed;
};

module.exports = reverseArray;
