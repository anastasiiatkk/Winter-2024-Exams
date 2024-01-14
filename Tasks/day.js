// Get day number

'use strict';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getWeekDayIndex = (str) => {
  let i;
  for (i = 0; i < weekDays.length; i++) {
    if (str.startsWith(weekDays[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = getWeekDayIndex;
