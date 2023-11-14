"use client";
import { SubmissionsDataFilters, SubmissionsText } from "@/styles/submissions";
import Header from "./Header";
import Filters from "./Filters";
import SubmissionsData from "./SubmissionsData";

const Submissions = () => {
  return (
    <>
      <Header />
      <SubmissionsDataFilters>
        <SubmissionsText>Submissions</SubmissionsText>
        <Filters />
      </SubmissionsDataFilters>
      <SubmissionsData />
    </>
  );
};

export default Submissions;
