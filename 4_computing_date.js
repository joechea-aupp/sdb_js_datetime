const dateA = new Date();
const dateB = new Date("10 Feb, 2024 19:00:00");

const dateDiff = (start, end, format) => {
  const diff = end - start;
  const hasElapsed = diff <= 0;
  const suffix = hasElapsed ? "elapsed..." : "left...";
  const days = `${((hasElapsed ? -diff : diff) / 86400000).toPrecision(
    2
  )} days`;

  const hours = `${Math.ceil((hasElapsed ? -diff : diff) / 3600000)} hours`;
  const minutes = `${Math.ceil((hasElapsed ? -diff : diff) / 60000)} minutes`;
  const seconds = `${Math.ceil((hasElapsed ? -diff : diff) / 1000)} seconds`;

  switch (format) {
    case "D":
      return `${days} ${suffix}`;
    case "H":
      return `${hours} ${suffix}`;
    case "M":
      return `${minutes} ${suffix}`;
    case "S":
      return `${seconds} ${suffix}`;
    default:
      return "Invalid format string!";
  }
};

console.log(dateDiff(dateA, dateB, "D"));
