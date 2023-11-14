import React from "react";
import { Badge, Table, Tag } from "antd";
import { SubmissionsDataWrapper, DateText } from "@/styles/submissions";
import dayjs from "dayjs";
import { submissionData } from "@/utils/submissionData";
import { isDateExpired } from "@/utils";

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
    render: (text) => (
      <DateText isExpired={isDateExpired(text)}>
        {dayjs(text).format("MMM D, h:mm A")}
      </DateText>
    ),
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
        dataSource={submissionData}
        scroll={{ y: 400 }}
      />
    </SubmissionsDataWrapper>
  );
};

export default SubmissionsData;
