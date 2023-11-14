import { DatePicker, Input } from "antd";
import Image from "next/image";
import { Select, Radio, Button } from "antd";
import { FiltersSection, FiltersWrapper } from "@/styles/submissions";

const Filters = () => {
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
              src="/search.svg"
              alt="search logo"
              width={24}
              height={24}
              priority
            />
          }
        />
        <Select
          placeholder="Select From"
          style={{
            width: 209,
            height: 48,
          }}
          onChange={() => {}}
          options={[
            {
              value: "jack",
              label: "Jack",
            },
          ]}
        />
        <Select
          placeholder="Select Status"
          style={{
            width: 209,
            height: 48,
          }}
          onChange={() => {}}
          options={[
            {
              value: "jack",
              label: "Jack",
            },
          ]}
        />
        <DatePicker style={{ width: 209 }} format="DD/MM/YYYY" />
      </FiltersSection>
      <FiltersSection gap={24}>
        <Radio.Group
          defaultValue="list"
          buttonStyle="solid"
          style={{ display: "flex" }}
        >
          <Radio.Button
            style={{ height: 48, display: "flex", alignItems: "center" }}
            value="map"
          >
            Map
          </Radio.Button>
          <Radio.Button
            style={{ height: 48, display: "flex", alignItems: "center" }}
            value="list"
          >
            List
          </Radio.Button>
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
        >
          Export
        </Button>
      </FiltersSection>
    </FiltersWrapper>
  );
};

export default Filters;
