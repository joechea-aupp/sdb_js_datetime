const now = new Date();

/**
 * GETTER METHOD
 */
// getDate return number from 1 to 31 depend on number of day per month
console.log(now.getDate());

// getDay return number from 0 to 6 depend on number od day per week
console.log(now.getDay());

// getMonth return number from 0 to 11, where 11 is december
console.log(now.getMonth());

// getFullYear return 4 digits for year
console.log(now.getFullYear());

console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());

// the total of different time between the current timezone and utc
// count in second
console.log(now.getTimezoneOffset() / 60, "offset");

console.log(now.toTimeString());

/**
 * SETTER METHOD
 */

now.setDate(10);
now.setMonth(3);
now.setMinutes(30);
now.setHours(12);

/**
 * Customize date within a function
 */

const showTime = (date = Date()) => {
  const dateObj = new Date(date);
  return `${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`;
};

console.log(showTime());
