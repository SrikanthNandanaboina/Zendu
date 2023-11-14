"use client";

import {
  MainWrapper,
  NavTabText,
  NavTabWraper,
  NotificationsWrapper,
  TabsWrapper,
  ZenduText,
} from "@/styles/header";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

const NavTab = ({ logo, name, route }) => {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = pathname === route;

  return (
    <NavTabWraper
      onClick={() => {
        router.push(route);
      }}
      isActive={isActive}
    >
      <Image
        src={`/${logo}.svg`}
        alt={`${logo} Logo`}
        width={24}
        height={24}
        priority
      />
      <NavTabText>{name}</NavTabText>
    </NavTabWraper>
  );
};

const Header = () => {
  const tabs = [
    { logo: "format_list_bulleted", name: "Forms", route: "/forms" },
    { logo: "people", name: "Customers", route: "/customers" },
    { logo: "graphic_eq", name: "Submissions", route: "/submissions" },
    { logo: "history", name: "History", route: "/history" },
    { logo: "insert_chart_outlined", name: "Reports", route: "/reports" },
    { logo: "insert_chart_outlined", name: "Workflow", route: "/workflow" },
  ];

  return (
    <MainWrapper>
      <ZenduText>ZenduForms</ZenduText>
      <TabsWrapper>
        {tabs.map((ele) => (
          <NavTab
            logo={ele.logo}
            name={ele.name}
            key={ele.name}
            route={ele.route}
          />
        ))}
      </TabsWrapper>
      <NotificationsWrapper>
        <Image
          src="notifications.svg"
          alt="notifications Logo"
          width={24}
          height={24}
          priority
        />
        <Image
          src="/logout.svg"
          alt="logout Logo"
          width={24}
          height={24}
          priority
        />
      </NotificationsWrapper>
    </MainWrapper>
  );
};

export default Header;
