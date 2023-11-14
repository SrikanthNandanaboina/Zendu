import React from "react";
import { Badge, Table, Tag } from "antd";
import { SubmissionsDataWrapper } from "@/styles/submissions";
import dayjs from "dayjs";

const columns = [
  {
    title: "Task",
    dataIndex: "task",
    key: "task",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => {
      const color = {
        Uncomplete: "red",
        Unassigned: "grey",
        "Low Risk": "green",
      };

      const badgeColor = {
        Unassigned: "white",
      };

      return (
        <Tag color={color[status]}>
          <Badge color={badgeColor[status] || color[status]} /> {status}
        </Tag>
      );
    },
  },
  {
    title: "From",
    dataIndex: "from",
    key: "from",
  },
  {
    title: "To",
    dataIndex: "to",
    key: "to",
  },
  {
    title: "Customer Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Due Date",
    dataIndex: "date",
    key: "date",
    render: (text) => <>{dayjs(text).format("MMM D, h:mm A")}</>,
  },
];

const data = [
  {
    key: "1",
    task: "Work Flow: Requires Location",
    status: "Uncomplete",
    address: "4140 Parker Rd. Allentown, New Mexico 31134",
    from: "zendu@zendu.com",
    to: "tracy@zenduit.com",
    date: "2023-11-13T04:04:57.292Z",
  },
  {
    key: "2",
    task: "Work Flow: Requires Location",
    status: "Unassigned",
    address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    from: "zendu@zendu.com",
    to: "tracy@zenduit.com",
    date: "2023-11-15T07:04:57.292Z",
  },
  {
    key: "3",
    task: "Work Flow: Requires Location",
    status: "Low Risk",
    address: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    from: "zendu@zendu.com",
    to: "tracy@zenduit.com",
    date: "2023-11-14T10:04:57.292Z",
  },
];

const SubmissionsData = () => {
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <SubmissionsDataWrapper>
      <Table
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        bordered
        columns={columns}
        dataSource={data}
      />
    </SubmissionsDataWrapper>
  );
};

export default SubmissionsData;
