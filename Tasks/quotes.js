// Change double quotation to open or close quotation

'use strict';

const REPLACED_QUOTES = '"';
const OPEN_QUOTES = '«';
const CLOSE_QUOTES = '»';

const changeQuotes = (str) => {
  let open = true;
  return str.replaceAll(REPLACED_QUOTES, () => {
    const quotes = open ? OPEN_QUOTES : CLOSE_QUOTES;
    open = !open;
    return quotes;
  });
};

module.exports = changeQuotes;
