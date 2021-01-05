import { Row, Col } from "antd";

const Container = ({ left, center, right }) => (
  <Row>
    <Col xs={0} sm={2} lg={4} xl={6}>
      {left}
    </Col>
    <Col xs={24} sm={20} lg={16} xl={12}>
      {center}
    </Col>
    <Col xs={0} sm={2} lg={4} xl={6}>
      {right}
    </Col>
  </Row>
);

export { Container };
