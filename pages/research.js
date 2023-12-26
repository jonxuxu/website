import Head from "next/head";
import { Typography, Card, Space, Row, Col, Tag, Divider } from "antd";

const { Title, Text } = Typography;

const data = [
  {
    title: `HarvestNet: A Dataset for Detecting Smallholder Farming Activity Using Harvest Piles and Remote Sensing`,
    description:
      "We introduce 7k hand-labeled images and 2k ground collected labels of harvest piles. Models trained on it detect smallholder farms better than SOTA land cover maps.",
    authors:
      "Jonathan Xu*, Amna Elmustafa*, Liya Weldegebriel, Emnet Negash, Richard Lee, David Lobell, Stefano Ermon",
    href: "https://arxiv.org/abs/2308.12061",
    publish: "AAAI 2024",
    thumbnail: "/images/research/pile-examples.png",
  },
  {
    title: `Structure-Preserved Image Reconstruction from Brain Recordings`,
    description:
      "We propose a 2D cortical surface-based autoencoder to preserve spatial information in fMRI data, resulting in much better representations. We then decode images from brain recordings.",
    authors:
      "Zijiao Chen*, Jonathan Xu*, Jiaxin Qing, Ruilin Li, Juan Helen Zhou",
    href: "/documents/research/mindvis2.pdf",
    publish: "Extended Abstracts of ISMRM 2024",
    thumbnail: "/images/research/fmri.png",
  },
];

const PapersPage = () => {
  return (
    <div>
      <Head>
        <title>Jonathan's Research</title>
      </Head>
      <Title>Research</Title>
      <Space direction="vertical" size={16}>
        {data.map((item) => (
          <Card
            hoverable
            onClick={(e) => window.open(item.href, "_blank")}
            key={item.title}
          >
            <Row gutter={30}>
              <Col xs={10} sm={6} md={5}>
                <img src={item.thumbnail} width="100%" />
              </Col>
              <Col xs={14} sm={18} md={11}>
                <Title level={5} style={{ marginTop: 0 }}>
                  {item.title}
                </Title>
                <Text type="secondary">{item.description}</Text>
                <div style={{ paddingTop: 8 }}>
                  <Tag bordered={false} color="orange">
                    {item.publish}
                  </Tag>
                </div>
              </Col>
              <Col xs={24} md={0}>
                <Divider />
              </Col>
              <Col xs={0} md={1}>
                <Divider type="vertical" style={{ height: "100%" }} />
              </Col>
              <Col xs={24} md={6}>
                <Title level={5} style={{ marginTop: 0 }}>
                  Authors
                </Title>
                <div>
                  {item.authors.split(", ").map((author, index, array) =>
                    author.includes("Jonathan Xu") ? (
                      <Text type="secondary" strong>
                        {author}
                        {index < array.length - 1 ? ", " : ""}
                      </Text>
                    ) : (
                      <Text type="secondary">
                        {author}
                        {index < array.length - 1 ? ", " : ""}
                      </Text>
                    )
                  )}
                </div>
              </Col>
            </Row>
          </Card>
        ))}
      </Space>
    </div>
  );
};

export default PapersPage;
