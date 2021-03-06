import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Typography, List, Space, Row, Col } from "antd";

const { Title } = Typography;

const ImgDiv = styled.div`
  display: block;
  margin-bottom: 20px;
  overflow: hidden;
  border-radius: 2px;
  max-height: 360px;
  cursor: pointer;
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
        This page is a work in progress, please mind the dust. Here, I'm
        documenting a few of the things I've worked on, that I found pretty cool
        to share about.
      </p>
      <Row gutter={20}>
        <Col xs={24} sm={12}>
          <Link href="/projects/noisy">
            <ImgDiv>
              <CoverImg alt="noisy" src="/images/projects/noisy/banner.png" />
            </ImgDiv>
          </Link>
          <Link href="/projects/curius">
            <ImgDiv>
              <CoverImg alt="curius" src="/images/projects/curius/banner.png" />
            </ImgDiv>
          </Link>
        </Col>
        <Col xs={24} sm={12}>
          <Link href="/projects/trofi">
            <ImgDiv>
              <CoverImg alt="trofi" src="/images/projects/trofi/banner.png" />
            </ImgDiv>
          </Link>
          <Link href="/projects/brett">
            <ImgDiv>
              <CoverImg alt="brett" src="/images/projects/brett/banner.png" />
            </ImgDiv>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default ProjectsPage;
