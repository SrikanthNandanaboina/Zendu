"use client";
import styled from "styled-components";

export const MainWrapper = styled.div`
  padding: 0 32px;
  background-color: #2188d9;
  display: flex;
  gap: 160px;
  jusitify-content: center;
  align-items: center;
`;

export const ZenduText = styled.div`
  color: #fff;
  font-size: 32px;
  line-height: 130%;
  font-weight: bold;
  font-family: Roboto, system-ui, -apple-system, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif;
  letter-spacing: 0.02em;
  width: 198px;
  height: 45.2571px;
`;

export const TabsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

export const NavTabWraper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 16px;
  height: 72px;
  cursor: pointer;
  background: ${(props) => (props.isActive ? "#1773BB" : "none")};
`;

export const NavTabText = styled.div`
  color: #fff;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  font-family: Roboto, system-ui, -apple-system, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif;
  white-space: nowrap;
`;

export const NotificationsWrapper = styled.div`
  display: flex;
  gap: 16px;
`;
