import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import { Row, Col, Typography, Timeline, Button, Divider, Space } from "antd";
import { device } from "../styles/breakpoints";

const { Title } = Typography;

export function getStaticProps() {
  return {
    props: { fullscreen: true }, // will be passed to the page component as props
  };
}

const MainCol = styled(Col)``;

const Introduction = styled(Row)`
  padding-top: 20px;

  @media ${device.mobileS} {
    padding-top: 0px;
  }
`;

const Home = () => {
  return (
    <div>
      <Head>
        <title>Jonathan Xu</title>
      </Head>

      <Introduction gutter={24} align="middle">
        <MainCol xs={24} md={7} xl={4}>
          <div style={{ minHeight: 200 }}>
            <img
              src="https://i.ibb.co/x6hQ8Ng/profile-pic.jpg"
              style={{ width: "100%", borderRadius: "50%" }}
            />
          </div>
        </MainCol>
        <MainCol xs={24} md={17} xl={20}>
          <Title>Hello!</Title>
          <p>
            I'm Jonathan. Many of my projects explore the magic of cross-domain
            tech; curently I'm trying to recover thoughts from brain scans.
          </p>
          <p>
            Apart from code, I enjoy cooking new things, learning languages, and
            making music. I love meeting and sharing interesting conversations
            with new people, so please do reach out!
          </p>
          <Divider />
        </MainCol>
      </Introduction>

      <Row>
        <Col xs={24} sm={12} md={8}>
          <Title level={5} style={{ marginBottom: 20 }}>
            What I've been up to
          </Title>
          <Timeline pending="Image reconstruction @ NUS" reverse={true}>
            <Timeline.Item>
              <Link href="/blog/2021-04-28-group-houses">Coliving</Link> at New
              Mexico, San Francisco and Taipei
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
          <Space>
            <a
              href="/documents/home/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button type="dashed">Resume</Button>
            </a>
            <a
              href="/documents/home/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button type="dashed">Failure Resume</Button>
            </a>
          </Space>
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
        </Col>
      </Row>
    </div>
  );
};

export default Home;
