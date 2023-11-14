"use client";
import { SubmissionsDataFilters, SubmissionsText } from "@/styles/submissions";
import Filters from "./Filters";
import SubmissionsDataTable from "./SubmissionsDataTable";
import { useState } from "react";
import SubmissionsDataMap from "./SubmissionsDataMap";

const Submissions = () => {
  const [viewType, setViewType] = useState("list");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState(null);
  const [from, setFrom] = useState(null);

  return (
    <>
      <SubmissionsDataFilters>
        <SubmissionsText>Submissions</SubmissionsText>
        <Filters
          setViewType={setViewType}
          setStatus={setStatus}
          setFrom={setFrom}
          setSearch={setSearch}
        />
      </SubmissionsDataFilters>
      {viewType === "map" ? (
        <SubmissionsDataMap search={search} status={status} from={from} />
      ) : (
        <SubmissionsDataTable search={search} status={status} from={from} />
      )}
    </>
  );
};

export default Submissions;
