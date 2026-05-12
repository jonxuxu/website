import { Row, Col, Menu, Layout } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { HomeOutlined } from "@ant-design/icons";
import styled, { css } from "styled-components";
import { device } from "../styles/breakpoints";
import { useState, useEffect } from "react";

export const GlobalLayout = ({ children }) => {
  const router = useRouter();
  const isIndexPage = router.asPath === "/";

  return (
    <Layout>
      <TopBar />
      <Row>
        <Col xs={0} lg={3}>
          <SideBar currRoute={router.asPath} />
        </Col>
        <Col xs={24} lg={19} xxl={16}>
          <Row justify="center">
            <AdaptiveDiv $isindexpage={isIndexPage}>{children}</AdaptiveDiv>
          </Row>
        </Col>
        <Col xs={0} lg={0} xxl={4} />
      </Row>
    </Layout>
  );
};

const menuItems = [
  {
    key: "/",
    icon: <HomeOutlined />,
    label: <Link href="/">Home</Link>,
  },
  {
    key: "/research",
    label: <Link href="/research">Research</Link>,
  },
  {
    key: "/thoughts",
    label: <Link href="/thoughts">Thoughts</Link>,
  },
  {
    key: "/projects",
    label: <Link href="/projects">Projects</Link>,
  },
  {
    key: "notebook",
    label: (
      <a
        href="https://1drv.ms/u/s!AkkQVbX5M5Bliz4y7hE0mD3fqa_q"
        target="_blank"
      >
        Notebook
      </a>
    ),
  },
  {
    key: "/cooking",
    label: <Link href="/cooking">Cooking</Link>,
  },
  {
    key: "library",
    label: (
      <a
        href="https://seen-badge-2df.notion.site/89bd1d2e5b164f49a1ae8a63ccd5bf61?v=d67bff7207dc408b8cf0a61c4b0ef8da&pvs=4"
        target="_blank"
      >
        Library
      </a>
    ),
  },
];

// Mobile menu excludes external links shown in sidebar only
const mobileMenuItems = menuItems;

const TopBar = () => {
  const router = useRouter();
  const [selectedKey, setSelectedKey] = useState(router.asPath);

  useEffect(() => {
    setSelectedKey(router.asPath); // Update selected key when route changes
  }, [router.asPath]);

  return (
    <Row>
      <Col xs={24} lg={0}>
        <Menu
          mode="horizontal"
          selectedKeys={[selectedKey]}
          onClick={(e) => setSelectedKey(e.key)}
          items={menuItems}
        />
      </Col>
    </Row>
  );
};

const SideBar = ({ currRoute }) => {
  return (
    <SidebarWrapper>
      <Link href="/">
        <Image
          src="/images/logoBlack.svg"
          width={36}
          height={36}
          alt="logo"
        />
      </Link>
      <NavLinks>
        <PageLink href="/research">Research</PageLink>
        <PageLink href="/thoughts">Thoughts</PageLink>
        <PageLink href="/projects">Projects</PageLink>
        <PageLink
          href="https://1drv.ms/u/s!AkkQVbX5M5Bliz4y7hE0mD3fqa_q"
          target="_blank"
        >
          Notebook
        </PageLink>
        <PageLink href="/cooking">Cooking</PageLink>
        <PageLink
          href="https://seen-badge-2df.notion.site/89bd1d2e5b164f49a1ae8a63ccd5bf61?v=d67bff7207dc408b8cf0a61c4b0ef8da&pvs=4"
          target="_blank"
        >
          Library
        </PageLink>
      </NavLinks>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  padding: 48px 32px;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(42, 42, 38, 0.1);
`;

const SocialRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 32px;
`;

const SocialLink = styled.a`
  color: #7A7870;
  font-size: 16px;
  text-decoration: none;
  &:hover {
    color: #2A2A26;
  }
`;

const AdaptiveDiv = styled.div`
  max-width: ${(props) => (props.$isindexpage ? "720px" : "1000px")};
  width: 100%;
  padding: 20px;

  @media ${device.mobileL} {
    padding: 30px;
  }

  @media ${device.tablet} {
    padding: 56px 48px;
  }
`;

const NavLinks = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const PageLink = styled(Link)`
  color: #7A7870;
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 300;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  transition: color 0.15s ease;

  &:hover {
    color: #2A2A26;
  }
`;
