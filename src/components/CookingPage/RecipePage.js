import React from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  PageHeader,
  Typography,
  Image,
  Tabs,
  Checkbox,
  Space,
  Row,
  Col,
} from "antd";
import { BgColorsOutlined, FireOutlined } from "@ant-design/icons";

import { Container } from "../shared";
import recipes from "./recipes.json";

const { Title, Text } = Typography;
const { TabPane } = Tabs;

const RecipePage = () => {
  const { recipeUrl } = useParams();
  const history = useHistory();
  const recipe = recipes[recipeUrl];

  const Ingredients = recipe.ingredients.map((i, idx) => (
    <div key={idx}>
      <Space align="start">
        <Checkbox />
        <div>{i.unit.toString() + " " + i.item}</div>
      </Space>
    </div>
  ));

  const Directions = recipe.steps.map((s, idx) => (
    <Row key={idx} gutter={10}>
      <Col align="start" span={1}>
        <div>{(idx + 1).toString() + "."}</div>
      </Col>
      <Col>
        <div>{s}</div>
      </Col>
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
          <Image src={recipe.image} />
        </Col>
        <Col md={16} style={{ padding: 20 }}>
          {recipe.description}
        </Col>
      </Row>
      <Tabs style={{ margin: 20 }}>
        <TabPane
          tab={
            <span>
              <BgColorsOutlined />
              Ingredients
            </span>
          }
          key="1"
        >
          {Ingredients}
        </TabPane>
        <TabPane
          tab={
            <span>
              <FireOutlined />
              Directions
            </span>
          }
          key="2"
        >
          {Directions}
        </TabPane>
      </Tabs>
      ,
    </div>
  );
  return <Container center={middle} />;
};

export default RecipePage;
