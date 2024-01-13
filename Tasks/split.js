// Split an array into two parts

'use strict';

const splitArray = (index, array) => {
  const first = array.slice(0, index);
  const len = array.length;
  array = array.slice(index, len);
  return [first, array];
};

module.exports = splitArray;
