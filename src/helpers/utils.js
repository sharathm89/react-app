import { format } from "date-fns";

export const getFormattedDate = (timeStamp, type = "type1") => {
  if (!timeStamp) return null;

  if (type === "type1") {
    return format(new Date(timeStamp), "dd-MMM-yyyy"); // 01-Jan-2020
  } else if (type === "type2") {
    return format(new Date(timeStamp), "MMM d, yyyy hh:mm a");
  } else if (type === "type3") {
    return format(new Date(timeStamp), "yyyy-MM-dd"); // 01-01-2020
  }

  return timeStamp;
};

export const goToTop = (topValue = 0, behavior = "smooth") => {
  window.scroll({
    top: topValue,
    behavior,
  });
};
