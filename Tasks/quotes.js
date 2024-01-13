// Change double quotation to open or close quotation

'use strict';

const REPLACED_QUOTATION = '"';
const OPEN_QUOTATION = '«';
const CLOSE_QUOTATION = '»';

const changeQuotes = (str) => {
  const symbols = [];
  let open = false;
  for (const c of str) {
    if (c === REPLACED_QUOTATION) {
      if (!open) {
        symbols.push(OPEN_QUOTATION);
        open = true;
      } else {
        symbols.push(CLOSE_QUOTATION);
        open = false;
      }
    } else {
      symbols.push(c);
    }
  }
  return symbols.join('');
};

module.exports = changeQuotes;
