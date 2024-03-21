const today = new Date();

console.log(today.toDateString());
console.log(today.toTimeString());
console.log(today.toLocaleString("en-US", { timeZone: "Asia/Bangkok" }));
console.log(today.toLocaleString("en-US", { timeZone: "Asia/Singapore" }));

// create date object with specific date
const vDay = new Date("Feb 14, 2024 14:00:45");
console.log(vDay.toDateString());

// create date object with numeric format
// format goes as follow: year, month, day, hour, minute, second
// month is 0-based index
const vDay2 = new Date(2023, 1, 14, 14, 0, 45);

// get current time in an epoch format
console.log(Date.now());

// divide epoch time by 1000 to get current time in seconds
console.log(Date.now() / 1000);

// convert date to epoch time
console.log(Date.parse("7 Apr, 2021"));

// get all time zones available in the world
// https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
