import Head from "next/head";
import { Typography, List, Space } from "antd";

const { Title } = Typography;

const ProjectsPage = () => {
  return (
    <div>
      <Head>
        <title>Projects</title>
      </Head>
      <Title>Projects</Title>
      <p>
        Some things that I built, worked on, and experimented with. This is a
        work in progress.
      </p>
    </div>
  );
};

export default ProjectsPage;
