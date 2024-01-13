// Extract substring between prefix and suffix

'use strict';

const getvaluebetween = (str, prefix, suffix) => {
  let prefixIndex = str.indexOf(prefix);
  if (prefixIndex === -1) return '';
  else {
    const prefixEndIndex = prefixIndex + prefix.length;
    str = str.substring(prefixEndIndex);
    if (suffix) {
      prefixIndex = str.indexOf(suffix);
      if (prefixIndex === -1) {
        return '';
      } else {
        str = str.substring(0, prefixIndex);
      }
    }
  }
  return str;
};

module.exports = getvaluebetween;
