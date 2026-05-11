import Head from "next/head";
import fs from "fs";
import Link from "next/link";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import styled from "styled-components";

export async function getStaticProps() {
  const filenames = fs
    .readdirSync("./pages/thoughts")
    .filter((f) => f.indexOf(".mdx") !== -1);

  return {
    props: { filenames: filenames },
  };
}

const ThoughtsPage = ({ filenames }) => {
  const [metas, setMetas] = useState([]);

  useEffect(() => {
    const data = filenames
      .sort()
      .reverse()
      .map((name) => {
        try {
          return require(`./${name}`).metadata;
        } catch (e) {
          return undefined;
        }
      })
      .filter((m) => m !== undefined);

    setMetas(data);
  }, [filenames]);

  return (
    <div>
      <Head>
        <title>Jonathan's Thoughts</title>
      </Head>
      <PageTitle>Thoughts</PageTitle>
      <PostList>
        {metas.map((m) => (
          <PostItem key={m.title}>
            <PostDate>{dayjs(m.date, "YYYY-MM-DD").format("MMM YYYY")}</PostDate>
            <PostLink href={`/thoughts/${m.url}`}>{m.title}</PostLink>
          </PostItem>
        ))}
      </PostList>
    </div>
  );
};

const PageTitle = styled.h1`
  font-family: 'Cormorant Garamond', Georgia, serif !important;
  font-size: 2.4rem !important;
  font-weight: 400 !important;
  margin: 0 0 40px 0;
  color: #2A2A26;
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PostItem = styled.div`
  display: flex;
  align-items: baseline;
  gap: 24px;
`;

const PostDate = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  color: #7A7870;
  min-width: 72px;
  letter-spacing: 0.02em;
`;

const PostLink = styled(Link)`
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  font-weight: 300;
  color: #2A2A26;
  text-decoration: none;
  border-bottom: 1px solid rgba(42,42,38,0.2);
  padding-bottom: 1px;
  transition: border-color 0.15s ease, color 0.15s ease;

  &:hover {
    color: #6B6355;
    border-color: #6B6355;
  }
`;

export default ThoughtsPage;
