import dayjs from "dayjs";
import { isEmpty } from "lodash";

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

export const filterData = ({ data, status, from, search }) => {
  return data.filter((ele) => {
    let item;
    if (from === ele.from && !status) {
      item = ele;
    } else if (status === ele.status && !from) {
      item = ele;
    } else if (status === ele.status && from === ele.from) {
      item = ele;
    } else if (!from && !status) {
      item = ele;
    }

    if (!isEmpty(search) && ele.task.toLowerCase().includes(search)) {
      item = ele;
    } else if (!isEmpty(search)) {
      return;
    }

    return item;
  });
};
