import { DatePicker, Input } from "antd";
import Image from "next/image";
import { Select, Radio, Button } from "antd";
import { FiltersSection, FiltersWrapper } from "@/styles/submissions";
import { submissionData } from "@/utils/submissionData";
import debounce from "lodash/debounce";

const Filters = ({ setViewType, setStatus, setFrom, setSearch }) => {
  const viewOptions = ["map", "list"];
  const statusArray = [...new Set(submissionData.map((ele) => ele.status))].map(
    (ele) => ({
      value: ele,
      label: ele,
    })
  );
  const fromArray = [...new Set(submissionData.map((ele) => ele.from))].map(
    (ele) => ({
      value: ele,
      label: ele,
    })
  );

  return (
    <FiltersWrapper>
      <FiltersSection>
        <Input
          style={{
            width: 334,
            height: 48,
          }}
          placeholder="Search..."
          prefix={
            <Image
              src="/searchIcon.svg"
              alt="search logo"
              width={24}
              height={24}
              priority
            />
          }
          onChange={(e) => {
            const value = e.target.value;
            debounce(() => {
              setSearch(value.toLowerCase());
            }, 500)();
          }}
        />
        <Select
          allowClear
          placeholder="Select From"
          style={{
            width: 209,
            height: 48,
          }}
          onChange={(data) => {
            setFrom(data);
          }}
          options={fromArray}
        />
        <Select
          allowClear
          placeholder="Select Status"
          style={{
            width: 209,
            height: 48,
          }}
          onChange={(data) => {
            setStatus(data);
          }}
          options={statusArray}
        />
        <DatePicker style={{ width: 209 }} format="DD/MM/YYYY" />
      </FiltersSection>
      <FiltersSection gap={24}>
        <Radio.Group
          defaultValue="list"
          buttonStyle="solid"
          style={{ display: "flex" }}
          onChange={(e) => setViewType(e.target.value)}
        >
          {viewOptions.map((ele) => (
            <Radio.Button
              style={{
                height: 48,
                display: "flex",
                alignItems: "center",
                textTransform: "capitalize",
              }}
              value={ele}
              key={ele}
            >
              {ele}
            </Radio.Button>
          ))}
        </Radio.Group>
        <Button
          style={{
            height: 48,
            display: "flex",
            alignItems: "center",
            padding: 0,
          }}
          type="text"
          icon={
            <Image
              src="/download.svg"
              alt="download logo"
              width={17}
              height={20}
              priority
            />
          }
          onClick={() => alert("Export clicked")}
        >
          Export
        </Button>
      </FiltersSection>
    </FiltersWrapper>
  );
};

export default Filters;
