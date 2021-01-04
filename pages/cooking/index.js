import Link from "next/link";
import { Card, Col, Typography, Breadcrumb } from "antd";
import recipes from "./recipes.json";
import Masonry from "react-masonry-component";
import { HomeOutlined } from "@ant-design/icons";

import { Container } from "../../components/layout";

const { Title, Text } = Typography;
const { Meta } = Card;

const RecipeCard = (url, recipe) => {
  return (
    <Col xs={24} sm={12} md={8} key={recipe.name}>
      <div style={{ padding: 8 }}>
        <Link href="/cooking/[recipe]" as={`/cooking/${url}`}>
          <Card
            hoverable
            cover={<img alt={recipe.name} src={recipe.image} />}
            key={recipe.name}
          >
            <Meta
              //   avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={recipe.name}
              description={recipe.subtitle}
            />
          </Card>
        </Link>
      </div>
    </Col>
  );
};

export default function CookingPage() {
  const middle = (
    <div style={{ padding: 20 }}>
      <Breadcrumb>
        <Link href="/">
          <Breadcrumb.Item href="">
            <HomeOutlined />
          </Breadcrumb.Item>
        </Link>
        <Breadcrumb.Item>Cooking</Breadcrumb.Item>
      </Breadcrumb>

      <Title level={2}>Eating fine on a dime</Title>
      <Title level={4} type="secondary">
        Some recipes for foods I love that have a high deliciousness to effort
        ratio
      </Title>
      {/* {loading && <Spin />} */}
      <Masonry
      // style={{ visibility: loading ? "hidden" : "visible" }}
      >
        {Object.entries(recipes).map(([key, value]) => RecipeCard(key, value))}
      </Masonry>
    </div>
  );

  return <Container center={middle} />;
}
