let date = new Date(2014, 0, 3); // 3 Jan 2014

function getWeekDay(date) {
  let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

  return days[date.getDay()];
}

console.log(getWeekDay(date)); // FR