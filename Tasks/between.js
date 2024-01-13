// Extract substring between prefix and suffix

'use strict';

const getvaluebetween = (str, prefix, suffix) => {
  const prefixIndex = str.indexOf(prefix);
  if (prefixIndex === -1) return '';
  const suffixIndex = str.indexOf(suffix);
  if (suffixIndex === -1) return '';
  return str.substring(prefixIndex + 1, suffixIndex);
};

module.exports = getvaluebetween;
