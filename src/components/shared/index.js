import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Row, Col, Menu } from "antd";

const Container = ({ left, center, right }) => (
  <Row>
    <Col xs={0} sm={2} lg={3} xl={5}>
      {left}
    </Col>
    <Col xs={24} sm={20} lg={18} xl={14}>
      {center}
    </Col>
    <Col xs={0} sm={2} lg={3} xl={5}>
      {right}
    </Col>
  </Row>
);

const Navigation = () => {
  const location = useLocation();
  const history = useHistory();
  const path = "/" + location.pathname.split("/")[1];
  return (
    <Menu
      mode="horizontal"
      selectedKeys={[path]}
      onClick={(e) => {
        history.push(e.key);
      }}
    >
      <Menu.Item key="/">Home</Menu.Item>
      <Menu.Item key="/cooking">Cooking</Menu.Item>
    </Menu>
  );
};

export { Container, Navigation };
