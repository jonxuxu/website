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
        <MainCol xs={24} md={7} xxl={4}>
          <div style={{ minHeight: 200 }}>
            <img
              src="https://i.ibb.co/x6hQ8Ng/profile-pic.jpg"
              style={{ width: "100%", borderRadius: "50%" }}
            />
          </div>
        </MainCol>
        <MainCol xs={24} md={17} xxl={20}>
          <Title>Hey!</Title>
          <p>
            I'm Jonathan. Many of my projects explore the magic of cross-domain
            tech; currently I'm trying to recover thoughts from brain scans.
          </p>
          <p>
            Apart from code, I enjoy cooking new things, learning languages, and
            making music. If what I'm working on or talking about strikes your
            fancy, feel free to say hello!
          </p>
          <Divider />
        </MainCol>
      </Introduction>

      <Row gutter={36}>
        <Col xs={24} sm={12}>
          <Title level={5} style={{ marginBottom: 20 }}>
            What I've been up to
          </Title>
          <Timeline pending="Something new..." reverse={true}>
            <Timeline.Item>
              <a href="https://hebbia.ai">Hebbia</a>: Answering questions for
              everything
            </Timeline.Item>
            <Timeline.Item>
              Programming <a href="https://iyk.app">wearable NFC chips</a>
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
            <Timeline.Item>
              Image reconstruction in{" "}
              <a
                href="https://neuroimaginglab.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Singapore
              </a>
            </Timeline.Item>
          </Timeline>
          {/* <Space>
            <a
              href="/documents/home/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button type="dashed">Resume</Button>
            </a>

            <Button type="dashed">Failure Resume</Button>
          </Space> */}
        </Col>
        <Col xs={24} sm={12}>
          <Title level={5}>Character north stars</Title>
          <ul>
            <li>
              <strong>Live authentically: </strong>Find your own purpose and
              meaning in life; live to be a better, more honest version of
              yourself.
            </li>
            <li>
              <strong>Grow meaningfully: </strong>Develop a strong personal
              compass. Never stop <Link href="/todayilearned">learning</Link>.
            </li>
            <li>
              <strong>Motivate internally: </strong>Follow your inner passions
              and don't get swayed by external pressures.
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
