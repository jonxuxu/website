import { Row, Col, Menu, Layout } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import {
  HomeOutlined,
  TwitterOutlined,
  GithubOutlined,
} from "@ant-design/icons";
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
    key: "/projects",
    label: <Link href="/projects">Projects</Link>,
  },
  {
    key: "/blog",
    label: <Link href="/blog">Blog</Link>,
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
  const homeStyle = currRoute === "/";

  return (
    <div
      style={{
        padding: 80,
        background: homeStyle ? "url(/images/home/sideBanner.jpg)" : "none",
        backgroundSize: homeStyle ? "cover" : "auto",
        height: "100vh",
        position: "fixed",
      }}
    >
      <Link href="/">
        <Image
          src={homeStyle ? "/images/logoWhite.svg" : "/images/logoBlack.svg"}
          width={50}
          height={50}
          alt="logo"
        />
      </Link>
      <PageLink href="/research" $white={homeStyle} style={{ marginTop: 10 }}>
        Research
      </PageLink>
      <PageLink href="/projects" $white={homeStyle}>
        Projects
      </PageLink>
      <PageLink href="/blog" $white={homeStyle}>
        Blog
      </PageLink>

      <PageLink
        href="https://1drv.ms/u/s!AkkQVbX5M5Bliz4y7hE0mD3fqa_q"
        target="_blank"
        $white={homeStyle}
      >
        Notebook
      </PageLink>
      <PageLink href="/cooking" $white={homeStyle}>
        Cooking
      </PageLink>
      {/* <PageLink
        href="https://www.youtube.com/channel/UCYVeWh2TK8QAwiNCtrR6j5g"
        target="_blank"
        $white={homeStyle}
      >
        Walks
      </PageLink> */}
      <PageLink
        href="https://seen-badge-2df.notion.site/89bd1d2e5b164f49a1ae8a63ccd5bf61?v=d67bff7207dc408b8cf0a61c4b0ef8da&pvs=4"
        target="_blank"
        $white={homeStyle}
      >
        Library
      </PageLink>

      <SocialLink
        href="https://twitter.com/jonxuxu"
        target="_blank"
        $home={homeStyle}
        style={{ marginTop: 40 }}
      >
        <TwitterOutlined />
      </SocialLink>
      <SocialLink
        href="https://github.com/jonxuxu"
        target="_blank"
        $home={homeStyle}
      >
        <GithubOutlined />
      </SocialLink>
      <div>
        <a href="https://se-webring.xyz/" target="_blank">
          <Webring
            src={
              homeStyle
                ? "https://webring.xxiivv.com/icon.white.svg"
                : "https://webring.xxiivv.com/icon.black.svg"
            }
            $home={homeStyle}
          />
        </a>
      </div>
    </div>
  );
};

const SocialLink = styled.a`
  color: ${(props) => (props.$home ? "white" : "#999")};
  &:hover {
    color: ${(props) => !props.$home && "black"};
  }
  display: block;
`;

const AdaptiveDiv = styled.div`
  max-width: ${(props) =>
    props.$isindexpage ? "800px" : "min(1000px, 100vw)"};
  padding: 20px;

  @media ${device.mobileL} {
    padding: 30px;
  }

  @media ${device.tablet} {
    padding: 45px;
  }
`;

const PageLink = styled(Link)`
  color: ${(props) => props.$white && "white"};
  display: block;
`;

const Webring = styled.img`
  width 18px;
  height: 18px;
  position: relative;
  left: -2px;
  top: 2px;
  ${(props) =>
    props.$home
      ? css`
          &:hover {
            filter: invert(36%) sepia(75%) saturate(2522%) hue-rotate(340deg)
              brightness(110%) contrast(101%);
          }
        `
      : css`
          filter: invert(69%) sepia(0%) saturate(1504%) hue-rotate(139deg)
            brightness(90%) contrast(83%);
          // On hover remove filter
          &:hover {
            filter: none;
          }
        `}
`;
