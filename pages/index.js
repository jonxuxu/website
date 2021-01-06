import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { Row, Col, Typography } from "antd";
import { TwitterOutlined, GithubOutlined } from "@ant-design/icons";
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
          <Title>Hi I'm Jonathan</Title>
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

export default Home;
