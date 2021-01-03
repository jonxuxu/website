import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { PageHeader, Typography, Image, Checkbox, Space, Row, Col } from "antd";
import { ClockCircleOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { Helmet } from "react-helmet";

import { Container } from "../shared";
import recipes from "./recipes.json";

const { Title, Text } = Typography;

const RecipePage = () => {
  const { recipeUrl } = useParams();
  const history = useHistory();
  const recipe = recipes[recipeUrl];

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

  const middle = (
    <div>
      <PageHeader
        onBack={() => {
          history.goBack();
        }}
        title={recipe.name}
      />
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
          <Title level={4}>Ingredients</Title>
          {Ingredients}
        </Col>
        <Col md={16} style={{ padding: 20 }}>
          <Title level={4}>Directions</Title>
          <ul style={{ paddingLeft: 0 }}>{Directions}</ul>
          {recipe.notes.length > 0 && (
            <div style={{ paddingTop: 20 }}>
              <Title level={4}>Notes</Title>
              {Notes}
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
  return (
    <div>
      <Helmet>
        <title>{recipe.name}</title>
      </Helmet>
      <Container center={middle} />
    </div>
  );
};

export default RecipePage;
