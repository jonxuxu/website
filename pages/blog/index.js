import Head from "next/head";
import fs from "fs";
import Link from "next/link";
import dayjs from "dayjs";
import { Typography, List, Space } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";

const { Title } = Typography;

export async function getStaticProps() {
  const filenames = fs
    .readdirSync("./pages/blog")
    .filter((f) => f.indexOf(".mdx") !== -1);

  return {
    props: { filenames: filenames },
  };
}

const BlogPage = ({ filenames }) => {
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
        <title>Jonathan's Blog</title>
      </Head>
      <Title>Blog</Title>
      <p>
        The soup pot, the salad bowl, the dumpster bin for all my thoughts - I
        write about tech, life, and whatever is on my mind at the time.
        Hopefully you may find some useful tidbits in this buffet!
      </p>
      <List itemLayout="horizontal">
        {metas.map((m) => (
          <List.Item
            key={m.title}
            actions={[
              <Space>
                <ClockCircleOutlined />
                {` ${m.length} min read`}
              </Space>,
            ]}
          >
            <List.Item.Meta
              title={<Link href={`/blog/${m.url}`}>{m.title}</Link>}
              description={dayjs(m.date, "YYYY-MM-DD").format("MMM D, YYYY")}
            />
          </List.Item>
        ))}
      </List>
    </div>
  );
};

export default BlogPage;
