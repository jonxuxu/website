import { Row, Col, Menu, Layout } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import {
  HomeOutlined,
  TwitterOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { useEffect } from "react";
import styled from "styled-components";
import { device } from "../styles/breakpoints";

export const GlobalLayout = ({ children }) => {
  const router = useRouter();
  const currRoute = router.asPath.split("/");
  const currKey = currRoute.length > 1 ? currRoute[1] : "home";

  useEffect(() => {
    console.log(currKey);
  }, [currKey]);

  return (
    <Layout>
      <TopBar currKey={currKey} />
      <Row>
        <Col xs={0} lg={4}>
          <SideBar currKey={currKey} />
        </Col>
        <Col xs={24} lg={20} xl={15}>
          <Row justify="center">
            <AdaptiveDiv className="content wrapper">{children}</AdaptiveDiv>
          </Row>
        </Col>
        <Col xs={0} xl={9} />
      </Row>
    </Layout>
  );
};

const TopBar = ({ currKey }) => (
  <Row>
    <Col xs={24} lg={0}>
      <Menu mode="horizontal" selectedKeys={[currKey]}>
        <Menu.Item key="home">
          <Link href="/">
            <HomeOutlined />
          </Link>
        </Menu.Item>
        <Menu.Item key="blog">
          <Link href="/blog">Blog</Link>
        </Menu.Item>
        <Menu.Item key="projects">
          <Link href="/projects">Projects</Link>
        </Menu.Item>
        <Menu.Item key="notebook">
          <a
            href="https://1drv.ms/u/s!AkkQVbX5M5Bliz4y7hE0mD3fqa_q"
            target="_blank"
          >
            Notebook
          </a>
        </Menu.Item>
        <Menu.Item key="cooking">
          <Link href="/cooking">Cooking</Link>
        </Menu.Item>
        <Menu.Item key="walks">
          <a
            href="https://www.youtube.com/channel/UCYVeWh2TK8QAwiNCtrR6j5g"
            target="_blank"
          >
            Walks
          </a>
        </Menu.Item>
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

const SideBar = () => (
  <div
    style={{
      padding: 80,
      position: "fixed",
    }}
  >
    <Link href="/">
      <Image src="/images/logoBlack.svg" width={50} height={50} />
    </Link>

    <div style={{ marginTop: 10 }}>
      <Link href="/blog">Blog</Link>
    </div>
    <div>
      <Link href="/projects">Projects</Link>
    </div>
    <div>
      <a
        href="https://1drv.ms/u/s!AkkQVbX5M5Bliz4y7hE0mD3fqa_q"
        target="_blank"
      >
        Notebook
      </a>
    </div>
    <div>
      <Link href="/cooking">Cooking</Link>
    </div>
    <div>
      <a
        href="https://www.youtube.com/channel/UCYVeWh2TK8QAwiNCtrR6j5g"
        target="_blank"
      >
        Walks
      </a>
    </div>
    <div>
      <a
        href="https://jonathanxu.notion.site/0857986109904814a624c83c56c74692?v=897726067d62486692b709da9e94aa1a"
        target="_blank"
      >
        Library
      </a>
    </div>
    <div style={{ marginTop: 40 }}>
      <BlackA href="https://twitter.com/jonxuxu" target="_blank">
        <TwitterOutlined />
      </BlackA>
    </div>
    <div>
      <BlackA href="https://github.com/jonxuxu" target="_blank">
        <GithubOutlined />
      </BlackA>
    </div>
    <div>
      <a href="https://se-webring.xyz/" target="_blank">
        <img
          style={{
            filter:
              "invert(69%) sepia(0%) saturate(1504%) hue-rotate(139deg) brightness(90%) contrast(83%)",
          }}
          src="https://webring.xxiivv.com/icon.black.svg"
          width={18}
          height={18}
        />
      </a>
    </div>
  </div>
);

const BlackA = styled.a`
  color: #999;
  &:hover {
    color: black;
  }
`;

const AdaptiveDiv = styled.div`
  max-width: 800px;
  padding: 20px;

  @media ${device.mobileL} {
    padding: 30px;
  }

  @media ${device.tablet} {
    padding: 45px;
  }
`;
