import {
  MainWrapper,
  NavTabText,
  NavTabWraper,
  NotificationsWrapper,
  TabsWrapper,
  ZenduText,
} from "@/styles/header";
import Image from "next/image";

const NavTab = ({ logo, name }) => {
  return (
    <NavTabWraper>
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
    { logo: "format_list_bulleted", name: "Forms" },
    { logo: "people", name: "Customers" },
    { logo: "graphic_eq", name: "Submissions" },
    { logo: "history", name: "History" },
    { logo: "insert_chart_outlined", name: "Reports" },
    { logo: "insert_chart_outlined", name: "Workflow" },
  ];

  return (
    <MainWrapper>
      <ZenduText>ZenduForms</ZenduText>
      <TabsWrapper>
        {tabs.map((ele) => (
          <NavTab logo={ele.logo} name={ele.name} key={ele.name} />
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
