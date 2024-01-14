// Split string by the first occurrence of separator

'use strict';

const parseIp = (ip) => {
  const res = [];
  if (ip === '') return;
  else {
    const numbers = ip.split('.');
    if (numbers.length != 4) return;
    let i = 0;
    for (const number of numbers) {
      res[i] = parseInt(number);
      if (isNaN(res[i])) return;
      i++;
    }
  }
  return res;
};

module.exports = parseIp;
