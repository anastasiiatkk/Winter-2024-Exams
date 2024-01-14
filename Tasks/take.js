// Copy all listed keys from dictionary

'use strict';

const copyKeys = (obj, ...keys) => {
  const resObj = {};
  const objKeys = Object.keys(obj);
  for (const key of objKeys) {
    if (keys.includes(key)) {
      resObj[key] = obj[key];
    }
  }
  return resObj;
};

module.exports = copyKeys;
