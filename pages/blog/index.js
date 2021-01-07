import Head from "next/head";
import fs from "fs";
import Link from "next/link";
import moment from "moment";
import { Typography, List, Space } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

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
  var metas = filenames
    .sort()
    .reverse()
    .map((name) => require(`./${name}`).metadata); //TODO: Fix crude solution to get metadata

  metas = metas.filter((m) => m !== undefined);
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <Title>Jonathan's Blog</Title>
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
              description={moment.unix(m.date).format("MMM D, YYYY")}
            />
          </List.Item>
        ))}
      </List>
    </div>
  );
};

export default BlogPage;
