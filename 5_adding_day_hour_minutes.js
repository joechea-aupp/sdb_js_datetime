/**
 * days to ms: days * 86400_000
 * hours to ms: hours * 3600_000
 * minutes to ms: minutes * 60_000
 */

const now = new Date();
console.log(`Now: ${now.toLocaleString()}`);

const addDays = (dateObj = new Date(), days = 0) => {
  const dayToMs = days * 864_00_000;
  return new Date(dateObj.getTime() + dayToMs);
};

const addHours = (dateObj = new Date(), hours = 0) => {
  const hoursToMs = hours * 36_00_000;
  return new Date(dateObj.getTime() + hoursToMs);
};

const addMinutes = (dateObj = new Date(), minutes = 0) => {
  const minutesToMs = minutes * 60_000;
  return new Date(dateObj.getTime() + minutesToMs);
};

console.log(addMinutes(now, 25).toLocaleString());
