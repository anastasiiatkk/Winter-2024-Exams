// Get day number

'use strict';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getWeekDayIndex = (str) => {
  const dayIndex = weekDays.findIndex((day) => {
    return str.startsWith(day.toLowerCase());
  });
  return dayIndex === -1 ? dayIndex : dayIndex + 1;
};

module.exports = getWeekDayIndex;
