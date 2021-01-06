import Head from "next/head";
import fs from "fs";
import Link from "next/link";
import moment from "moment";
import { Breadcrumb, Typography, List, Space } from "antd";
import { HomeOutlined } from "@ant-design/icons";
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
  const metas = filenames
    .sort()
    .reverse()
    .map((name) => require(`./${name}`).metadata); //TODO: Fix crude solution to get metadata
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <Breadcrumb>
        <Link href="/">
          <Breadcrumb.Item href="">
            <HomeOutlined />
          </Breadcrumb.Item>
        </Link>
        <Breadcrumb.Item>Blog</Breadcrumb.Item>
      </Breadcrumb>
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
