// Get day number

'use strict';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getWeekDayIndex = (str) => {
  for (const [index, weekDay] of weekDays.entries()) {
    if (str.startsWith(weekDay.toLowerCase())) {
      return index + 1;
    }
  }
  return -1;
};

module.exports = getWeekDayIndex;
