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

export const SubmissionsDataMapWrapper = styled.div`
  padding: 0 40px;
  display: flex;
  gap: 40px;
`;

export const SubmissionCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 560px;
  overflow-y: scroll;
`;

export const SubmissionCard = styled.div`
  width: 460px;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid var(--color-black-borders, #b8b9bc);
  background: var(--color-white, #fff);
`;

export const SubmissionTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SubmissionTitle = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
`;

export const SubmissionDetails = styled.div`
  display: flex;
  margin-top: 8px;
`;

export const SubmissionLabel = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: #b8b9bc;
`;

export const SubmissionValue = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  color: ${(props) => (props.isExpired ? "red" : "#060c1b")};
`;

export const DateText = styled.span`
  color: ${(props) => (props.isExpired ? "red" : "")};
`;
