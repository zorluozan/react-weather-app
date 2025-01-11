import { Dayjs } from "dayjs";

export const mpsToKmh = (mps: number) => {
  return Math.round(mps * 3.6);
};

export const convertDate = (date: Dayjs) => {
  const formattedDate = `${date.date()} ${date.format("MMMM")} ${date.format(
    "dddd"
  )}`;
  return formattedDate;
};
