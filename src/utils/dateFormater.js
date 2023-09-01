// Changeing "dd-mm-yy" to "dd days ago" or "mm month ago"

export const dateFormater = (inputDate) => {
  const [day, month, year] = inputDate.split("-");

  const dateObject = new Date(`${year}-${month}-${day}`);

  const unixTimestampMillis = dateObject.getTime();

  const currentDate = new Date();
  const diffTime = Math.abs(currentDate - unixTimestampMillis);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffMonths = Math.floor(diffDays / 30);

  if (diffDays < 30) {
    return `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;
  } else {
    return `${diffMonths} month${diffMonths !== 1 ? "s" : ""} ago`;
  }
};
