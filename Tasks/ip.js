// Split string by the first occurrence of separator

'use strict';

const parseIp = (ip) => {
  const res = [];
  if (ip === '') return;
  const numbers = ip.split('.');
  if (numbers.length != 4) return;
  for (const [index, number] of numbers.entries()) {
    res[index] = parseInt(number);
    if (isNaN(res[index])) return;
  }
  return res;
};

module.exports = parseIp;
