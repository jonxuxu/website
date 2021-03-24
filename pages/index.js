import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import { Row, Col, Typography, Menu, Timeline, Button, Divider } from "antd";
import {
  TwitterOutlined,
  GithubOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import "../style.less";

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
const MainCol = styled(Col)`
  padding: 20px;
  margin-top: 20px;
  @media (min-width: 992px) {
    // lg
    margin-top: 70px;
  }
`;

const Home = () => {
  return (
    <div style={{ height: "100%", overflowX: "hidden" }}>
      <Head>
        <title>Jonathan Xu</title>
      </Head>

      <Row justify="space-between">
        <Col
          style={{
            background: "url(https://i.ibb.co/q5Bh6sZ/side-Banner.jpg)",
            backgroundSize: "cover",
            padding: 80,
            height: "100vh",
            position: "fixed",
            zIndex: 1,
          }}
          xs={0}
          lg={4}
        >
          <SideBar />
        </Col>
        <Col xs={0} lg={4} />
        <Col xs={24} lg={0}>
          <TopMenu />
        </Col>
        <Col xs={24} lg={20}>
          <Row justify="center">
            <MainCol xs={24} md={7} xl={4}>
              <div style={{ minHeight: 200 }}>
                <img
                  src="https://i.ibb.co/XLq7z0h/profile-Circle.jpg"
                  style={{ width: "100%" }}
                />
              </div>
            </MainCol>
            <MainCol xs={24} md={12} xl={12}>
              <Title>Hello!</Title>
              <p>
                I'm Jonathan. Many of my projects explore the magic of
                cross-domain tech; whether that's exploring the future of
                hardware in our lives, or creating mindful spaces using AI and
                music.
              </p>
              <p>
                Apart from code, I am trying out better ways to cook, learn
                languages, and make music. I enjoy meeting and sharing
                interesting conversations with new people, so never hesitate to
                reach out to me.
              </p>
              <Divider />
            </MainCol>
          </Row>
          <Row justify="center" style={{ padding: 40 }} gutter={30}>
            <Col xs={24} sm={12} md={8}>
              <Title level={5} style={{ marginBottom: 20 }}>
                What I've been up to
              </Title>
              <Timeline pending="Stay tuned...">
                <Timeline.Item>
                  Making fortune mining accessible @ Myriade
                </Timeline.Item>
                <Timeline.Item>
                  Turning Chromebooks into supercomputers @ Fractal
                </Timeline.Item>
                <Timeline.Item>
                  Exploring decentralized produce distribution @ Mozilla
                </Timeline.Item>
                <Timeline.Item>
                  MakingAI make musical spaces @ Noisy
                </Timeline.Item>
                <Timeline.Item>
                  Living in shared intellectual communities @ New Mexico and San
                  Francisco
                </Timeline.Item>
                <Timeline.Item>
                  Creating a better Discord for the Chinese market @ iDreamSky
                </Timeline.Item>
              </Timeline>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Title level={5}>My values & beliefs</Title>
              <ul>
                <li>
                  <strong>Live authentically: </strong>Find your own purpose and
                  meaning in life; live to be a better, more honest version of
                  yourself.
                </li>
                <li>
                  <strong>Grow meaningfully: </strong>Have a clear compass for
                  what your definition of goodness and success is and work
                  towards that. Is what you are working towards something that's
                  truly important?
                </li>
                <li>
                  <strong>Motivate internally: </strong>Doing something out of
                  innate interest will never feel old, tiresome or competitive.
                </li>
                <li>
                  <strong>Experiment and explore: </strong>Life is short, and
                  there is so much to do out there. Never stop trying new
                  things.<Link href="/todayilearned">learning</Link>.
                </li>
              </ul>
              <div style={{ paddingTop: 30 }}>
                <a href="/documents/home/resume.pdf" target="_blank">
                  <Button type="dashed">Paper thing for recruiters</Button>
                </a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

const SideBar = () => (
  <div>
    <img src="/images/logoWhite.svg" width={50} height={50} />

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
  </Menu>
);

export default Home;
