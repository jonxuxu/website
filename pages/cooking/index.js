import Head from "next/head";
import Link from "next/link";
import { Card, Col, Typography, List } from "antd";
import recipes from "./recipes.json";
import styled from "styled-components";

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
          <StyledListItem key={item.name}>
            <TextContainer>
              <List.Item.Meta
                title={
                  <Link href="/cooking/[recipe]" as={`/cooking/${item.name}`}>
                    {item.name}
                  </Link>
                }
                description={item.location}
              />
              <Text type="secondary">{item.subtitle}</Text>
            </TextContainer>

            {item.image && (
              <ImageContainer>
                <img alt="recipe image" src={item.image} />
              </ImageContainer>
            )}
          </StyledListItem>
        )}
      />

      {/* {Object.entries(recipes).map(([key, value]) => RecipeCard(key, value))} */}
    </div>
  );
}

const StyledListItem = styled.div`
  display: flex;
  flex-direction: row; /* Ensure row layout */
  justify-content: space-between; /* Space between text and image */
  align-items: flex-start;
  border-bottom: 1px solid #f0f0f0;
  padding: 16px 0; /* Optional: Adds spacing for better visual separation */
  width: 100%; /* Ensure it takes up full width of the parent */
`;

const ImageContainer = styled.div`
  flex-shrink: 0; /* Prevent shrinking */
  width: 150px; /* Fixed width for image */
  margin-left: 16px; /* Space between text and image */

  img {
    width: 100%;
    height: auto;
    object-fit: cover; /* Maintain aspect ratio */
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Take up remaining space */
  margin-right: 16px; /* Add some space between text and right edge */
  max-width: 100%; /* Ensure text doesn’t overflow */
`;
