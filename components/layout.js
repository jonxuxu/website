import { Row, Col, Menu } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";
import { HomeOutlined } from "@ant-design/icons";

const Container = ({ left, center, right }) => {
  const router = useRouter();
  const currRoute = router.asPath.split("/");
  const currKey = currRoute.length > 1 ? currRoute[1] : "home";

  return (
    <div>
      <Menu mode="horizontal" selectedKeys={[currKey]}>
        <Menu.Item key="home">
          <Link href="/">
            <HomeOutlined />
          </Link>
        </Menu.Item>
        <Menu.Item key="blog">
          <Link href="/blog">Blog</Link>
        </Menu.Item>
        <Menu.Item key="projects">
          <Link href="/projects">Projects</Link>
        </Menu.Item>
        <Menu.Item key="cooking">
          <Link href="/cooking">Cooking</Link>
        </Menu.Item>
        <Menu.Item>
          <a href="/documents/home/resume.pdf" target="_blank">
            Resume
          </a>
        </Menu.Item>
      </Menu>
      <Row style={{ padding: 20 }}>
        <Col xs={0} sm={2} lg={4} xl={6}>
          {left}
        </Col>
        <Col xs={24} sm={20} lg={16} xl={12}>
          {center}
        </Col>
        <Col xs={0} sm={2} lg={4} xl={6}>
          {right}
        </Col>
      </Row>
    </div>
  );
};

export { Container };
