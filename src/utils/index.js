import dayjs from "dayjs";

export const getStatusColor = (status) => {
  const colors = {
    Uncomplete: "red",
    Unassigned: "grey",
    "Low Risk": "green",
  };

  return colors[status];
};

export const isDateExpired = (date) => {
  const currentDay = dayjs(date);
  return currentDay.diff(dayjs()) <= 0;
};
