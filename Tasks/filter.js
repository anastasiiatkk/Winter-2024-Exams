// Filter array by type name

'use strict';

const filterByType = (arr, type) => {
  const removeIndices = [];
  for (const element of arr) {
    const x = arr.indexOf(element);
    if (typeof arr[x] !== type) {
      removeIndices.unshift(x);
    }
  }
  for (const x of removeIndices) arr.splice(x, 1);
  return arr;
};

module.exports = filterByType;
