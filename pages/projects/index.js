import Head from "next/head";
import { device } from "../../styles/breakpoints";
import Link from "next/link";
import styled from "styled-components";
import { Typography } from "antd";

const { Title } = Typography;

const ProjectsPage = () => {
  return (
    <div style={{ paddingBottom: 80 }}>
      <Head>
        <title>Projects</title>
      </Head>
      <Title>Projects</Title>
      <p>Some of the things that I've built, tinkered with, and worked on.</p>
      <ProjectsContainer>
        <Link href="/projects/lov">
          <ImgDiv>
            <CoverImg alt="lov" src="/images/projects/lov/banner.png" />
          </ImgDiv>
        </Link>
        <Link href="/projects/iyk">
          <ImgDiv>
            <CoverImg alt="iyk" src="/images/projects/iyk.png" />
          </ImgDiv>
        </Link>
        <Link href="/projects/polygon">
          <ImgDiv>
            <CoverImg alt="polygon" src="/images/projects/polygon/banner.png" />
          </ImgDiv>
        </Link>
        <Link href="/projects/curius">
          <ImgDiv>
            <CoverImg alt="curius" src="/images/projects/curius/banner.png" />
          </ImgDiv>
        </Link>
        <Link href="/projects/noisy">
          <ImgDiv>
            <CoverImg alt="noisy" src="/images/projects/noisy/banner.png" />
          </ImgDiv>
        </Link>
        <Link href="/projects/trofi">
          <ImgDiv>
            <CoverImg alt="trofi" src="/images/projects/trofi/banner.png" />
          </ImgDiv>
        </Link>
        <Link href="/projects/moments">
          <ImgDiv>
            <CoverImg alt="moments" src="/images/projects/moments/banner.png" />
          </ImgDiv>
        </Link>
        <Link href="/projects/echo">
          <ImgDiv>
            <CoverImg alt="echo" src="/images/projects/echo/banner.png" />
          </ImgDiv>
        </Link>
        <Link href="/projects/brett">
          <ImgDiv>
            <CoverImg alt="brett" src="/images/projects/brett/banner.png" />
          </ImgDiv>
        </Link>
        <Link href="/projects/hackathons">
          <ImgDiv>
            <CoverImg
              alt="hackathons"
              src="/images/projects/hackathons/banner.png"
            />
          </ImgDiv>
        </Link>
      </ProjectsContainer>
    </div>
  );
};

export default ProjectsPage;

const ImgDiv = styled.div`
  display: block;
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

const ProjectsContainer = styled.div`
  display: grid;
  grid-auto-rows: auto;
  column-gap: 12px;
  row-gap: 12px;
  margin: 0 auto;

  @media ${device.mobileS} {
    grid-template-columns: 1fr;
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
