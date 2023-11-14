"use client";
import styled from "styled-components";

export const SubmissionsDataFilters = styled.div`
  padding: 36px 40px 26px;
`;

export const SubmissionsText = styled.div`
  color: #060c1b;
  font-size: 32px;
  line-height: 140%;
  font-weight: bold;
  font-family: Roboto, system-ui, -apple-system, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif;
  white-space: nowrap;
  margin: 0 0 26px;
`;

export const FiltersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FiltersSection = styled.div`
  display: flex;
  gap: ${(props) => props.gap || 40}px;
`;

export const SubmissionsDataWrapper = styled.div`
  padding: 0 40px;
`;
