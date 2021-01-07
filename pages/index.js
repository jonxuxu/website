import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { Row, Col, Typography, Menu } from "antd";
import {
  TwitterOutlined,
  GithubOutlined,
  HomeOutlined,
} from "@ant-design/icons";
// import "../style.less";

const { Title } = Typography;

export function getStaticProps() {
  return {
    props: { fullscreen: true }, // will be passed to the page component as props
  };
}
const WhiteA = styled.a`
  color: white;
`;
const HoverSvg = styled.img`
  &:hover {
    filter: invert(36%) sepia(75%) saturate(2522%) hue-rotate(340deg)
      brightness(110%) contrast(101%);
  }
`;

const Home = () => {
  return (
    <div>
      <Head>
        <title>Jonathan Xu</title>
      </Head>

      <Row style={{ height: "100vh" }}>
        <Col
          style={{
            background: "url(/images/home/sideBanner.jpg)",
            backgroundSize: "cover",
            padding: 60,
          }}
          xs={0}
          lg={6}
        >
          <SideBar />
        </Col>
        <Col xs={24} lg={18}>
          <Row>
            <Col xs={24} lg={0}>
              <TopMenu />
            </Col>
            <Col xs={0} md={2} />
            <Col xs={24} md={7} xl={4} style={{ marginTop: 30 }}>
              <div style={{ minHeight: 200 }}>
                <Image
                  src="/images/home/profileCircle.jpg"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Col>
            <Col xs={0} md={1} />
            <Col xs={24} md={12} xl={12} style={{ padding: 30 }}>
              <Title>Hello!</Title>
              <p>
                I'm Jonathan. Many of my projects explore the magic of
                cross-domain tech; whether that's exploring the future of
                hardware in our lives, or creating mindful spaces using AI and
                music. I am currently building a better Discord for the Chinese
                market at iDreamSky.
              </p>
              <p>
                Apart from code, I am trying out ways to cook, learn languages,
                and make music better. I enjoy meeting and sharing interesting
                conversations with new people, so never hesitate to reach out to
                me.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

const SideBar = () => (
  <div>
    <Image src="/images/logoWhite.svg" width={50} height={50} />

    <div style={{ marginTop: 10 }}>
      <Link passHref href="/blog">
        <WhiteA>Blog</WhiteA>
      </Link>
    </div>
    <div>
      <Link passHref href="/projects">
        <WhiteA>Projects</WhiteA>
      </Link>
    </div>
    <div>
      <Link passHref href="/cooking">
        <WhiteA>Cooking</WhiteA>
      </Link>
    </div>
    <div>
      <WhiteA href="/documents/home/resume.pdf" target="_blank">
        Resume
      </WhiteA>
    </div>
    <div style={{ marginTop: 40 }}>
      <WhiteA href="https://twitter.com/_JonathanXu" target="_blank">
        <TwitterOutlined />
      </WhiteA>
    </div>
    <div>
      <WhiteA href="https://github.com/JonathanXu1" target="_blank">
        <GithubOutlined />
      </WhiteA>
    </div>
    <div>
      <a href="https://webring.xxiivv.com/#random" target="_blank">
        <HoverSvg src="/images/home/webring.svg" width={18} height={18} />
      </a>
    </div>
  </div>
);

const TopMenu = () => (
  <Menu mode="horizontal" selectedKeys={["home"]}>
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
    <Menu.Item key="cooking">
      <Link href="/cooking">Cooking</Link>
    </Menu.Item>
    <Menu.Item>
      <a href="/documents/home/resume.pdf" target="_blank">
        Resume
      </a>
    </Menu.Item>
  </Menu>
);

export default Home;
