// Split an array into two parts

'use strict';

const splitArray = (index, array) => {
  const first = array.slice(0, index);
  const second = array.slice(index);
  return [first, second];
};

module.exports = splitArray;
