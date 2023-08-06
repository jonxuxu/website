import Head from "next/head";
import Link from "next/link";
import { Card, Col, Typography, List } from "antd";
import recipes from "./recipes.json";

const { Title, Text } = Typography;

const RecipeCard = (url, recipe) => {
  return (
    <>
      <Col xs={24} sm={12} md={8} key={recipe.name} style={{ padding: 8 }}>
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
      </Col>
    </>
  );
};

export default function CookingPage() {
  return (
    <div>
      <Head>
        <title>Cooking</title>
      </Head>
      <Title level={2}>Eating fine on a dime</Title>
      <p>
        Some recipes for foods I love that have a high deliciousness to effort
        ratio
      </p>

      <List
        itemLayout="vertical"
        size="large"
        dataSource={recipes}
        renderItem={(item) => (
          <List.Item
            key={item.name}
            extra={
              item.image && (
                <img width={272} alt="recipe image" src={item.image} />
              )
            }
          >
            <List.Item.Meta
              title={
                <Link href="/cooking/[recipe]" as={`/cooking/${item.name}`}>
                  {item.name}
                </Link>
              }
              description={item.location}
            />
            {item.subtitle}
          </List.Item>
        )}
      />

      {/* {Object.entries(recipes).map(([key, value]) => RecipeCard(key, value))} */}
    </div>
  );
}
