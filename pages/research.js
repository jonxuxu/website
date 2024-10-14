import Head from "next/head";
import { Typography, Card, Space, Row, Col, Tag, Divider } from "antd";

const { Title, Text } = Typography;

const data = [
  {
    title: `MindEye2: Shared-Subject Models Enable fMRI-To-Image With 1 Hour of Data`,
    description:
      "Our architecture achieves a 40x finetuning speedup using a novel functional alignment procedure.",
    authors:
      "Paul S. Scotti, Mihir Tripathy ... Tong Chen, Jonathan Xu, Thomas Naselaris, Kenneth A. Norman, Tanishq Mathew Abraham",
    href: "https://medarc-ai.github.io/mindeye2/",
    publish: ["ICML 2024", "ICLR 2024 Re-Align Workshop"],
    thumbnail: "/images/research/mindeye2.png",
  },
  {
    title: `Alljoined1`,
    description:
      "We create a dataset built specifically for EEG-to-Image decoding, featuring 46,080 epochs of brain responses recorded with a 64-channel EEG headset.",
    authors:
      "Jonathan Xu, Bruno Aristimunha, Max Emanuel Feucht, Emma Qian, Charles Liu ... Adrian Nestor",
    href: "https://arxiv.org/abs/2404.05553",
    publish: ["CVPR 2024 DCAMI Workshop"],
    thumbnail: "/images/research/alljoined1.jpg",
  },
  {
    title: `HarvestNet: A Dataset for Detecting Smallholder Farming Activity Using Harvest Piles and Remote Sensing`,
    description:
      "We introduce 7k hand-labeled images and 2k ground collected labels of harvest piles. Models trained on it detect smallholder farms better than SOTA land cover maps.",
    authors:
      "Jonathan Xu*, Amna Elmustafa*, Liya Weldegebriel, Emnet Negash, Richard Lee, David Lobell, Stefano Ermon",
    href: "https://arxiv.org/abs/2308.12061",
    publish: ["AAAI 2024 Oral Presentation", "CVPR 2024 V4A Workshop"],
    thumbnail: "/images/research/pile-examples.jpg",
  },
  {
    title: `Structure-Preserved Image Reconstruction from Brain Recordings`,
    description:
      "We propose a 2D cortical surface-based autoencoder to preserve spatial information in fMRI data, resulting in much better representations. We then decode images from brain recordings.",
    authors:
      "Zijiao Chen*, Jonathan Xu*, Jiaxin Qing, Ruilin Li, Juan Helen Zhou",
    href: "/documents/research/mindvis2.pdf",
    publish: ["ISMRM 2024"],
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
                  {item.publish.map((publishItem, index) => (
                    <Tag key={index} bordered={false} color="orange">
                      {publishItem}
                    </Tag>
                  ))}
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
                      <Text type="secondary" strong key={index}>
                        {author}
                        {index < array.length - 1 ? ", " : ""}
                      </Text>
                    ) : (
                      <Text type="secondary" key={index}>
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
