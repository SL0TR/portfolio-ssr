import { breakpoints } from "constants/breakpoints";

export function getExpInyears() {
  const d2 = new Date();
  const d1 = new Date(2017, 5, 1);
  var months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : Math.ceil(months / 12);
}

export function isScreenSize({ width, bp }) {
  return breakpoints[bp] <= width;
}
