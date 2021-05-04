import styled from "styled-components";
import { Row, Col, Menu } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import {
  HomeOutlined,
  TwitterOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const SideBar = () => (
  <div style={{ padding: 80, position: "fixed" }}>
    <Link passHref href="/">
      <a>
        <Image src="/images/logoBlack.svg" width={50} height={50} />
      </a>
    </Link>

    <div style={{ marginTop: 10 }}>
      <Link href="/blog">Blog</Link>
    </div>
    <div>
      <Link href="/projects">Projects</Link>
    </div>
    <div>
      <Link href="/cooking">Cooking</Link>
    </div>
    <div style={{ marginTop: 40 }}>
      <BlackA href="https://twitter.com/jonxuxu" target="_blank">
        <TwitterOutlined />
      </BlackA>
    </div>
    <div>
      <BlackA href="https://github.com/JonathanXu1" target="_blank">
        <GithubOutlined />
      </BlackA>
    </div>
    <div>
      <a href="https://webring.xxiivv.com/#random" target="_blank">
        <img
          style={{
            filter:
              "invert(69%) sepia(0%) saturate(1504%) hue-rotate(139deg) brightness(90%) contrast(83%)",
          }}
          src="https://webring.xxiivv.com/icon.black.svg"
          width={18}
          height={18}
        />
      </a>
    </div>
  </div>
);

const Container = ({ center, right }) => {
  const router = useRouter();
  const currRoute = router.asPath.split("/");
  const currKey = currRoute.length > 1 ? currRoute[1] : "home";

  return (
    <div>
      <Row>
        <Col xs={24} lg={0}>
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
          </Menu>
        </Col>
      </Row>
      <Row>
        <Col xs={0} lg={6} xl={7}>
          <SideBar />
        </Col>
        <Col xs={0} md={3} lg={0} />
        <MainCol xs={24} md={18} lg={12} xl={10}>
          {center}
        </MainCol>
        <Col xs={0} md={3} lg={6} xl={7}>
          {right}
        </Col>
      </Row>
    </div>
  );
};

export { Container };

const BlackA = styled.a`
  color: #999;
  &:hover {
    color: black;
  }
`;

const MainCol = styled(Col)`
  padding: 20px;
  @media (min-width: 992px) {
    // lg
    padding: 0px;
    padding-top: 70px;
  }
`;
