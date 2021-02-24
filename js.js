debugger;
moment().set({ date: 28, hour: 18, minute: 0, second: 0 }).day();

function getTimeStops(start, end) {
  var startTime = moment(start, "HH:mm");
  var endTime = moment(end, "HH:mm");

  if (endTime.isBefore(startTime)) {
    endTime.add(1, "day");
  }

  var timeStops = [];

  while (startTime <= endTime) {
    timeStops.push(new moment(startTime).format("HH:mm"));
    startTime.add(15, "minutes");
  }
  return timeStops;
}

var timeStops = getTimeStops("11:00", "02:00");
console.log("timeStops ", timeStops);
timeStops = getTimeStops("11:00", "23:59");
console.log("timeStops ", timeStops);
var startTime = moment().utc().set({ day: 1, hour: 11, minute: 00 });

const range = moment.range("2018-01-01 00:00", "2018-01-01 05:30");

const hours = Array.from(range.by("hour", { excludeEnd: true }));
hours.length == 5; // true
hours.map((m) => m.format("HH:mm")); // ['00:00', '01:00', '02:00', '03:00', '04:00']



start = moment();
minuteReminder = start.minute() % 30;
start.add(minuteReminder, 'minutes');
start.format("D YYYY, h:mm:ss a");  