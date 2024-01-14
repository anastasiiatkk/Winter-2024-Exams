// Filter array by type name

'use strict';

const filterByType = (arr, type) => arr.filter((val) => typeof val === type);

module.exports = filterByType;
