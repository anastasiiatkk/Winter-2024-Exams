// Copy all listed keys from dictionary

'use strict';

const copyKeys = (obj, ...keys) => {
  const objKeys = Object.keys(obj);
  objKeys.forEach((key) => {
    if (!keys.includes(key)) delete obj[key];
  });
  return obj;
};

module.exports = copyKeys;
