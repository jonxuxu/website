import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Typography, List, Space, Row, Col } from "antd";

const { Title } = Typography;

const ACover = styled.a`
  display: block;
  margin-bottom: 20px;
  overflow: hidden;
  border-radius: 2px;
  max-height: 360px;
`;

const CoverImg = styled.img`
  margin: 0;
  transform: scale(1);
  transition: 0.3s transform;
  max-width: 100%;
  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectsPage = () => {
  return (
    <div>
      <Head>
        <title>Projects</title>
      </Head>
      <Title>Projects</Title>
      <p>
        This page is a work in progress, please mind the dust as I document the
        things that I have built, worked on, and experimented with.
      </p>
      <Row gutter={20}>
        <Col xs={24} sm={12}>
          <Link href="/projects/noisy" passHref>
            <ACover>
              <CoverImg alt="noisy" src="/images/projects/noisy/banner.png" />
            </ACover>
          </Link>
          <ACover
            href="https://www.hackster.io/jonathan-xu/brett-the-fire-mapping-drone-94fc1c"
            target="_blank"
          >
            <CoverImg alt="brett" src="/images/projects/brett/banner.png" />
          </ACover>
        </Col>
        <Col xs={24} sm={12}>
          <ACover href="https://trofi.app" target="_blank">
            <CoverImg alt="trofi" src="/images/projects/trofi/banner.png" />
          </ACover>
        </Col>
      </Row>
    </div>
  );
};

export default ProjectsPage;
