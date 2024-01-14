// Split string by the first occurrence of separator

'use strict';

const parseIp = (ip) => {
  const reg = /\d+\.\d+\.\d+\.\d+/;
  return ip.search(reg) !== -1 ? ip.split('.').map(Number) : undefined;
};

module.exports = parseIp;
