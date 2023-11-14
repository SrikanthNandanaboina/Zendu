"use client";
import { SubmissionsDataFilters, SubmissionsText } from "@/styles/submissions";
import Header from "./Header";
import Filters from "./Filters";
import SubmissionsDataTable from "./SubmissionsDataTable";
import { useState } from "react";
import SubmissionsDataMap from "./SubmissionsDataMap";

const Submissions = () => {
  const [viewType, setViewType] = useState("list");

  return (
    <>
      <Header />
      <SubmissionsDataFilters>
        <SubmissionsText>Submissions</SubmissionsText>
        <Filters setViewType={setViewType} />
      </SubmissionsDataFilters>
      {viewType === "map" ? <SubmissionsDataMap /> : <SubmissionsDataTable />}
    </>
  );
};

export default Submissions;
