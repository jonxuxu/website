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

export const GlobalLayout = ({ children }) => {
  const router = useRouter();
  const isIndexPage = router.asPath === "/";

  return (
    <Layout>
      <TopBar currRoute={router.asPath} />
      <Row>
        <Col xs={0} lg={3}>
          <SideBar currRoute={router.asPath} />
        </Col>
        <Col xs={24} lg={19} xxl={16}>
          <Row justify="center">
            <AdaptiveDiv isIndexPage={isIndexPage}>{children}</AdaptiveDiv>
          </Row>
        </Col>
        <Col xs={0} lg={0} xxl={4} />
      </Row>
    </Layout>
  );
};

const TopBar = ({ currRoute }) => (
  <Row>
    <Col xs={24} lg={0}>
      <Menu mode="horizontal" selectedKeys={[currRoute]}>
        <Menu.Item key="/">
          <Link href="/">
            <HomeOutlined />
          </Link>
        </Menu.Item>
        <Menu.Item key="/researc">
          <Link href="/research">Research</Link>
        </Menu.Item>
        <Menu.Item key="/projects">
          <Link href="/projects">Projects</Link>
        </Menu.Item>
        <Menu.Item key="/blog">
          <Link href="/blog">Blog</Link>
        </Menu.Item>
        <Menu.Item key="notebook">
          <a
            href="https://1drv.ms/u/s!AkkQVbX5M5Bliz4y7hE0mD3fqa_q"
            target="_blank"
          >
            Notebook
          </a>
        </Menu.Item>
        <Menu.Item key="/cooking">
          <Link href="/cooking">Cooking</Link>
        </Menu.Item>
        {/* <Menu.Item key="walks">
          <a
            href="https://www.youtube.com/channel/UCYVeWh2TK8QAwiNCtrR6j5g"
            target="_blank"
          >
            Walks
          </a>
        </Menu.Item> */}
        <Menu.Item key="library">
          <a
            href="https://jonathanxu.notion.site/0857986109904814a624c83c56c74692?v=897726067d62486692b709da9e94aa1a"
            target="_blank"
          >
            Library
          </a>
        </Menu.Item>
      </Menu>
    </Col>
  </Row>
);

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
        href="https://jonathanxu.notion.site/0857986109904814a624c83c56c74692?v=897726067d62486692b709da9e94aa1a"
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
  /* Conditionally set the max-width based on isIndexPage prop */
  max-width: ${(props) => (props.isIndexPage ? "800px" : "1000px")};

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
