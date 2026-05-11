import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import { device } from "../styles/breakpoints";

export function getStaticProps() {
  return {
    props: { fullscreen: true },
  };
}

const Home = () => {
  return (
    <Wrapper>
      <Head>
        <title>Jonathan Xu</title>
      </Head>

      <Name>Jonathan Xu</Name>

      <Divider />

      <Bio>
        <p>
          I believe the technologies people call impossible are often just early.
          My work is about finding those gaps — and building through them.
        </p>
        <p>
          At <a href="https://alljoined.com" target="_blank" rel="noopener noreferrer">AllJoined</a>, we
          decode thoughts from non-invasive brain recordings. The science exists,
          the compute exists, the data is coming — we're assembling it into
          something real.
        </p>
        <p>
          I started programming in high school, competing in 40+ hackathons.
          I studied Computer Science at the University of Waterloo, did ML research
          at Stanford under Stefano Ermon and David Lobell, and worked on neural
          decoding at NUS. I've published at CVPR, ICML, and NeurIPS.
        </p>
        <p>
          Outside of work: piano, badminton, Asimov, meditation.
        </p>
        <p>
          Find me on{" "}
          <a href="https://github.com/jonxuxu" target="_blank" rel="noopener noreferrer">GitHub</a>,{" "}
          <a href="https://twitter.com/jonxuxu" target="_blank" rel="noopener noreferrer">Twitter</a>, or{" "}
          <a href="mailto:dev@alljoined.com">say hello directly</a>.
        </p>
      </Bio>

      <Divider />

      <Section>
        <SectionLabel>Experience</SectionLabel>
        <TimelineList>
          <TimelineItem>
            <TimelineYear>2024 –</TimelineYear>
            <TimelineContent>
              <a href="https://alljoined.com" target="_blank" rel="noopener noreferrer">
                AllJoined
              </a>{" "}
              — Decoding thoughts to bridge humans and AI
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineYear>2023</TimelineYear>
            <TimelineContent>
              NUS{" "}
              <a href="https://neuroimaginglab.org/" target="_blank" rel="noopener noreferrer">
                Neuroimaging Lab
              </a>{" "}
              — fMRI-to-image reconstruction
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineYear>2022</TimelineYear>
            <TimelineContent>
              Stanford{" "}
              <a href="http://sustain.stanford.edu" target="_blank" rel="noopener noreferrer">
                Sustain Lab
              </a>{" "}
              — Smallholder farm detection via satellite imagery
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineYear>2021</TimelineYear>
            <TimelineContent>
              <a href="https://hebbia.ai" target="_blank" rel="noopener noreferrer">
                Hebbia
              </a>{" "}
              — AI for knowledge work
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineYear>2021</TimelineYear>
            <TimelineContent>
              <a href="https://iyk.app" target="_blank" rel="noopener noreferrer">
                IYK
              </a>{" "}
              — Programmable wearable NFC chips
            </TimelineContent>
          </TimelineItem>
        </TimelineList>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 12px;
`;

const Name = styled.h1`
  font-family: 'Cormorant Garamond', Georgia, serif !important;
  font-size: 2.2rem !important;
  font-weight: 400 !important;
  margin: 0 0 6px 0;
  letter-spacing: 0.02em;
  color: #2A2A26;
`;

const Role = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #7A7870;
  margin: 0;
  text-decoration: none;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(42, 42, 38, 0.12);
  margin: 28px 0;
`;

const Bio = styled.div`
  max-width: 520px;

  p {
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.75;
    color: #2A2A26;
    margin: 0 0 16px 0;
  }

  a {
    color: #2A2A26;
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-color: rgba(42,42,38,0.3);
    &:hover {
      color: #6B6355;
      text-decoration-color: #6B6355;
    }
  }
`;

const Section = styled.div`
  display: flex;
  gap: 40px;

  @media ${device.mobileL} {
    flex-direction: column;
    gap: 12px;
  }
`;

const SectionLabel = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #7A7870;
  margin: 0;
  min-width: 100px;
  padding-top: 2px;
`;

const TimelineList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1;
`;

const TimelineItem = styled.div`
  display: flex;
  gap: 20px;
  align-items: baseline;
`;

const TimelineYear = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  color: #7A7870;
  min-width: 52px;
  letter-spacing: 0.02em;
`;

const TimelineContent = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: #2A2A26;
  line-height: 1.5;

  a {
    color: #2A2A26;
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-color: rgba(42,42,38,0.3);
    &:hover {
      color: #6B6355;
      text-decoration-color: #6B6355;
    }
  }
`;

export default Home;
