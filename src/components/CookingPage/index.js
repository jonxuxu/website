import React, { useState } from "react";
import { Switch, Route, useHistory, useRouteMatch } from "react-router-dom";
import { Card, Col, Typography, Spin } from "antd";
import Masonry from "react-masonry-component";

import { Navigation, Container } from "../shared";
import RecipePage from "./RecipePage";
import recipes from "./recipes.json";

const { Title, Text } = Typography;
const { Meta } = Card;

const CookingPage = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <MainPage />
      </Route>
      <Route path={`${path}/:recipeUrl`}>
        <RecipePage />
      </Route>
    </Switch>
  );
};

const MainPage = () => {
  const [loading, setLoading] = useState(true);

  const middle = (
    <div style={{ padding: 20 }}>
      <Title level={2}>Eating fine on a dime</Title>
      <Title level={5} type="secondary">
        Some recipes for foods I love that have a high deliciousness to effort
        ratio
      </Title>
      {/* {loading && <Spin />} */}
      <Masonry
        onLayoutComplete={() => {
          setLoading(false);
        }}
        // style={{ visibility: loading ? "hidden" : "visible" }}
      >
        {Object.entries(recipes).map(([key, value]) => RecipeCard(key, value))}
      </Masonry>
    </div>
  );

  return (
    <div>
      <Navigation />
      <Container center={middle} />
    </div>
  );
};

const RecipeCard = (url, recipe) => {
  const history = useHistory();
  const recipeRoute = "/cooking/" + url;
  return (
    <Col xs={24} sm={12} md={8} key={recipe.name}>
      <div style={{ padding: 8 }}>
        <Card
          hoverable
          cover={<img alt={recipe.name} src={recipe.image} />}
          key={recipe.name}
          onClick={() => {
            history.push(recipeRoute);
          }}
        >
          <Meta
            //   avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={recipe.name}
            description={recipe.subtitle}
          />
        </Card>
      </div>
    </Col>
  );
};

export default CookingPage;
