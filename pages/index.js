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
                  src="https://i.ibb.co/x6hQ8Ng/profile-pic.jpg"
                  style={{ width: "100%", borderRadius: "50%" }}
                />
              </div>
            </MainCol>
            <MainCol xs={24} md={12} xl={12}>
              <Title>Hello!</Title>
              <p>
                I'm Jonathan. Many of my projects explore the magic of
                cross-domain tech; recently I've been building affordable smart
                home tech and creating mindful spaces using AI and music.
              </p>
              <p>
                Apart from code, I enjoying cooking new things, learning
                languages, and making music. I love meeting and sharing
                interesting conversations with new people, so please do reach
                out!
              </p>
              <Divider />
            </MainCol>
          </Row>
          <Row justify="center" style={{ padding: 40 }} gutter={30}>
            <Col xs={24} sm={12} md={8}>
              <Title level={5} style={{ marginBottom: 20 }}>
                What I've been up to
              </Title>
              <Timeline
                pending="Image reconstruction @ NUS"
                reverse={true}
              >
                <Timeline.Item>
                  <a href="https://whist.com">Whist</a>: Turning Chromebooks into supercomputers
                </Timeline.Item>
                <Timeline.Item>
                  Exploring coliving in New Mexico, San Francisco and Taipei
                </Timeline.Item>
                <Timeline.Item>
                  <a href="https://hebbia.ai">Hebbia</a>: Answering questions
                  for everything
                </Timeline.Item>
                <Timeline.Item>
                  Founding startups in{" "}
                  <a href="https://legendsofvenari.com">crypto gaming</a>,{" "}
                  <a href="https://iyk.app">wearable NFC chips</a>, and{" "}
                  <a href="https://uwaterloo.ca/conrad-school-entrepreneurship-business/news/meet-winter-2022-enterprise-co-op-pitch-winners">
                    pharmacy
                  </a>
                </Timeline.Item>
                <Timeline.Item>
                  Hacking on <Link href="/projects">projects</Link>
                </Timeline.Item>
                <Timeline.Item>
                  Detecting harvest piles at Stanford <Link href="/projects">sustain lab</Link>
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
                  truly important to you?
                </li>
                <li>
                  <strong>Motivate internally: </strong>Doing something out of
                  innate interest will never feel old or tiresome.
                </li>
                <li>
                  <strong>Experiment and explore: </strong>Life is short, and
                  there is so much to do out there. Try new things and never
                  stop <Link href="/todayilearned">learning</Link>.
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
      <Link href="/projects"><WhiteA>Projects</WhiteA></Link>
    </div>
    <div>
      <a  href="https://1drv.ms/u/s!AkkQVbX5M5Bliz4y7hE0mD3fqa_q" target="_blank">
        <WhiteA>Notes</WhiteA>
      </a>
    </div>
    <div>
      <Link href="/cooking"><WhiteA>Cooking</WhiteA></Link>
    </div>
    <div>
      <a  href="https://www.youtube.com/channel/UCYVeWh2TK8QAwiNCtrR6j5g" target="_blank">
        <WhiteA>Walks</WhiteA>
      </a>
    </div>
    <div>
      <a  href="https://jonathanxu.notion.site/0857986109904814a624c83c56c74692?v=897726067d62486692b709da9e94aa1a" target="_blank">
        <WhiteA>Library</WhiteA>
      </a>
    </div>
    <div style={{ marginTop: 40 }}>
      <WhiteA href="https://twitter.com/jonxuxu" target="_blank">
        <TwitterOutlined />
      </WhiteA>
    </div>
    <div>
      <WhiteA href="https://github.com/jonxuxu" target="_blank">
        <GithubOutlined />
      </WhiteA>
    </div>
    <div>
      <a href="https://se-webring.xyz/" target="_blank">
        <HoverSvg
          src="https://webring.xxiivv.com/icon.white.svg"
          width={18}
          height={18}
        />
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
    <Menu.Item key="notes">
      <a  href="https://1drv.ms/u/s!AkkQVbX5M5Bliz4y7hE0mD3fqa_q" target="_blank">
        Notes
      </a>
    </Menu.Item>
    <Menu.Item key="cooking">
      <Link href="/cooking">Cooking</Link>
    </Menu.Item>
    <Menu.Item key="walks">
      <a  href="https://www.youtube.com/channel/UCYVeWh2TK8QAwiNCtrR6j5g" target="_blank">
        Walks
      </a>    
    </Menu.Item>
    <Menu.Item key="library">
      <a  href="https://jonathanxu.notion.site/0857986109904814a624c83c56c74692?v=897726067d62486692b709da9e94aa1a" target="_blank">
        Library
      </a>
    </Menu.Item>

  </Menu>
);

export default Home;
