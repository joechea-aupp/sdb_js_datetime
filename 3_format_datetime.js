// DD, d-MM-YYYY at hh:mm:ss
const formatDate = (
  dateObj = new Date(),
  str = "DD, d-MM-YYYY at hh:mm:ss"
) => {
  const [day, month, date, year] = dateObj.toDateString().split(/\s/);
  const [hour, minutes, ...rest] = dateObj.toTimeString().split(":");
  const [seconds] = rest[0].split(/\s/);
  const formattedDate = str
    .replaceAll("d", date)
    .replaceAll("DD", day)
    .replaceAll("MM", month)
    .replaceAll("YYYY", year)
    .replaceAll("hh", hour)
    .replaceAll("mm", minutes)
    .replaceAll("ss", seconds);

  return formattedDate;
};

console.log(formatDate());
console.log(formatDate(new Date("2024, feb 14"), "YYYY, d-MM"));
