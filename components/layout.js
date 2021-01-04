import { Row, Col } from "antd";

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

export { Container };
