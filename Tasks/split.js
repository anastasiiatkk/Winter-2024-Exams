// Split an array into two parts

'use strict';

const splitArray = (index, array) => {
  const first = array.slice(0, index);
  array = array.slice(index);
  return [first, array];
};

module.exports = splitArray;
