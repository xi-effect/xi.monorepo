export const isSameDates = (d1: Date, d2: Date) => {
  if (
    d1.getDay() === d2.getDay() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear()
  ) {
    return true;
  }
  return false;
};
