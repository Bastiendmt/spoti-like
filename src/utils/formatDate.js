const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apl",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const formatDate = (dateString) => {
  const arr = dateString.split("-");

  const year = arr[0];
  const month = months[arr[1] - 1];
  const day = arr[2].substring(0, 2);

  return `${month} ${day}, ${year}`;
};
