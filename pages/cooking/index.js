import Head from "next/head";
import Link from "next/link";
import { Card, Col, Typography } from "antd";
import recipes from "./recipes.json";
import Masonry from "react-masonry-component";

const { Title, Text } = Typography;

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
            <Text strong style={{ display: "block" }}>
              {recipe.name}
            </Text>
            <Text type="secondary">{recipe.subtitle}</Text>
          </Card>
        </Link>
      </div>
    </Col>
  );
};

export default function CookingPage() {
  return (
    <div>
      <Head>
        <title>Cooking</title>
      </Head>
      <Title level={2}>Eating fine on a dime</Title>
      <Title level={5} type="secondary" style={{ marginTop: 5 }}>
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
}
