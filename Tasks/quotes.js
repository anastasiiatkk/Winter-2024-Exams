// Change double quotation to open or close quotation

'use strict';

const changeQuotes = (str) => {
  const symbols = [];
  let open = false;
  for (const c of str) {
    if (c === '"') {
      if (!open) {
        symbols.push('«');
        open = true;
      } else {
        symbols.push('»');
        open = false;
      }
    } else {
      symbols.push(c);
    }
  }
  return symbols.join('');
};

module.exports = changeQuotes;
