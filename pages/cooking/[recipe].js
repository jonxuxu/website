import { useRouter } from "next/router";
import Link from "next/link";
import {
  PageHeader,
  Typography,
  Image,
  Checkbox,
  Space,
  Row,
  Col,
  Breadcrumb,
} from "antd";
import {
  ClockCircleOutlined,
  UsergroupAddOutlined,
  HomeOutlined,
} from "@ant-design/icons";

import { Container } from "../../components/layout";
import recipes from "./recipes.json";

const { Title, Text } = Typography;

const RecipePage = () => {
  const router = useRouter();
  // const history = useHistory();
  if (router.asPath === router.route) {
    return <div></div>; // router.query.recipe is not deifned
  }

  const recipe = recipes[router.query.recipe];

  const Ingredients = recipe.ingredients.map((i, idx) => (
    <div key={idx}>
      {i.header ? (
        <Title level={5} type="secondary" style={{ paddingTop: 10 }}>
          {i.header}
        </Title>
      ) : (
        <Space align="start">
          <Checkbox />
          <div>{i.unit ? i.unit.toString() + " " + i.item : i.item}</div>
        </Space>
      )}
    </div>
  ));

  const Directions = recipe.steps.map((s, idx) => (
    <div key={idx}>
      {s.substring(0, 7) === "SECTION" ? (
        <Title level={5} type="secondary" style={{ paddingTop: 10 }}>
          {s.substring(7)}
        </Title>
      ) : (
        <li style={{ marginLeft: "1.3em" }}>{s}</li>
      )}
    </div>
  ));

  const Notes = recipe.notes.map((n, idx) => (
    <Row key={idx} gutter={10}>
      <Space align="start">
        <div style={{ minWidth: "30px" }}>{(idx + 1).toString() + "."}</div>
        <div>{n}</div>
      </Space>
    </Row>
  ));

  const center = (
    <div>
      <div style={{ paddingTop: 20, paddingLeft: 20 }}>
        <Breadcrumb>
          <Link href="/">
            <Breadcrumb.Item href="">
              <HomeOutlined />
            </Breadcrumb.Item>
          </Link>
          <Link href="/cooking">
            <Breadcrumb.Item href="">Cooking</Breadcrumb.Item>
          </Link>
          <Breadcrumb.Item>{recipe.name}</Breadcrumb.Item>
        </Breadcrumb>
        <Title>{recipe.name}</Title>
      </div>
      <Row align="top">
        <Col md={8}>
          <Image src={recipe.image} style={{ paddingTop: 20 }} />
        </Col>
        <Col md={16} style={{ padding: 20 }}>
          <div>{recipe.description}</div>
          <Row gutter={20} style={{ marginTop: 20 }}>
            {recipe.time && (
              <Col md={24}>
                <ClockCircleOutlined /> {recipe.time}
              </Col>
            )}
            {recipe.servings && (
              <Col md={24}>
                <UsergroupAddOutlined /> {"serves " + recipe.servings}
              </Col>
            )}
          </Row>
        </Col>
      </Row>
      <Row align="top">
        <Col md={8} style={{ padding: 20 }}>
          <Title level={3}>Ingredients</Title>
          {Ingredients}
        </Col>
        <Col md={16} style={{ padding: 20 }}>
          <Title level={3}>Directions</Title>
          <ul style={{ paddingLeft: 0 }}>{Directions}</ul>
          {recipe.notes.length > 0 && (
            <div style={{ paddingTop: 20 }}>
              <Title level={3}>Notes</Title>
              {Notes}
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
  return <Container center={center} />;
};

export default RecipePage;
