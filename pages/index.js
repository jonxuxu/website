import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import { Row, Col, Typography, Timeline, Button, Divider } from "antd";

const { Title } = Typography;

export function getStaticProps() {
  return {
    props: { fullscreen: true }, // will be passed to the page component as props
  };
}

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
            I'm Jonathan. Many of my projects explore the magic of cross-domain
            tech; recently I've been building affordable smart home tech and
            creating mindful spaces using AI and music.
          </p>
          <p>
            Apart from code, I enjoying cooking new things, learning languages,
            and making music. I love meeting and sharing interesting
            conversations with new people, so please do reach out!
          </p>
          <Divider />
        </MainCol>
      </Row>
      <Row justify="center" style={{ padding: 40 }} gutter={30}>
        <Col xs={24} sm={12} md={8}>
          <Title level={5} style={{ marginBottom: 20 }}>
            What I've been up to
          </Title>
          <Timeline pending="Image reconstruction @ NUS" reverse={true}>
            <Timeline.Item>
              Exploring coliving in New Mexico, San Francisco and Taipei
            </Timeline.Item>
            <Timeline.Item>
              <a href="https://hebbia.ai">Hebbia</a>: Answering questions for
              everything
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
              Detecting harvest piles at Stanford{" "}
              <a
                href="http://sustain.stanford.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sustain Lab
              </a>
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
              <strong>Grow meaningfully: </strong>Have a clear compass for what
              your definition of goodness and success is and work towards that.
              Is what you are working towards something that's truly important
              to you?
            </li>
            <li>
              <strong>Motivate internally: </strong>Doing something out of
              innate interest will never feel old or tiresome.
            </li>
            <li>
              <strong>Experiment and explore: </strong>Life is short, and there
              is so much to do out there. Try new things and never stop{" "}
              <Link href="/todayilearned">learning</Link>.
            </li>
          </ul>
          <div style={{ paddingTop: 30 }}>
            <a href="/documents/home/resume.pdf" target="_blank">
              <Button type="dashed">Paper thing for recruiters</Button>
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
