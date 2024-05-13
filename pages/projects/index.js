import Head from "next/head";
import { device } from "../../styles/breakpoints";
import Link from "next/link";
import styled from "styled-components";
import { Typography } from "antd";

const { Title } = Typography;

const ProjectsPage = () => {
  return (
    <div>
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
        <Link href="/projects/hand">
          <ImgDiv>
            <CoverImg
              alt="robotic hand"
              src="/images/projects/hand/banner.JPG"
            />
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
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto; /* Adjust this to change the aspect ratio */
  aspect-ratio: 16 / 10; /* This sets the aspect ratio */
  overflow: hidden;
  border-radius: 2px;
  cursor: pointer;
`;

const CoverImg = styled.img`
  grid-area: 1 / 1 / 2 / 2; /* Positions the image to cover the grid area */
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.3s transform;
  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectsContainer = styled.div`
  display: grid;
  grid-gap: 12px; /* This is shorthand for row-gap and column-gap */
  margin: 0 auto;

  @media ${device.mobileS} {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
`;
