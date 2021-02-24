export function getFormattedDate(dataString) {
  const today = new Date(dataString);
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let weekDay = week[today.getDay()];
  let day = today.getDate();
  let month = monthNames[today.getMonth()]; //January is 0!
  let year = today.getFullYear();
  let hour = today.getHours();
  let min = today.getMinutes();

  if (day < 10) {
    day = "0" + day;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (min < 10) {
    min = "0" + min;
  }

  return {
    year,
    month,
    day,
    weekDay,
    hour,
    min,
  };
}
