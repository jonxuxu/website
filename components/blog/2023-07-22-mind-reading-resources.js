import { Table, Tag } from "antd";

const datasets = [
  {
    key: "1",
    name: "OpenNeuro",
    type: "MRI, MEG, EEG, iEEG, and ECoG datasets",
    size: "Free platform for sharing 800+ datasets with 34000+ participants",
    link: "https://openneuro.org//",
  },
  {
    key: "2",
    name: "Natural Scenes Dataset",
    type: "fMRI - image pairs",
    size: "8 subjects, each observing 9000-10000 images, ~40,000 voxels per scan",
    link: "https://naturalscenesdataset.org/",
  },
  {
    key: "3",
    name: "BOLD5000",
    type: "fMRI - image pairs",
    size: "4 subjects, each observing 5254 images, ~1,000 - 2,000 voxels per scan",
    link: "https://bold5000-dataset.github.io/website/",
  },
  {
    key: "4",
    name: "Generic Object Decoding",
    type: "fMRI - image paris",
    size: "5 subjects, each observing 1200 images, ~4,000 - 5,000 voxels per scan",
    link: "https://github.com/KamitaniLab/GenericObjectDecoding",
  },
  {
    key: "5",
    name: "Human Connectome Project",
    type: "Resting state fMRIs",
    size: "1206 subjects. 4,000 voxels in visual cortex per scan",
    link: "https://www.humanconnectome.org/study/hcp-young-adult/document/1200-subjects-data-release",
  },
  {
    key: "6",
    name: "UK Biobank",
    type: "MRI, EEG, MEG, multimodal",
    size: "In depth genetic and health information from half a million UK participants",
    link: "https://www.ukbiobank.ac.uk",
  },
  {
    key: "7",
    name: "Prof. Zhongming Liu’s dataset",
    type: "fMRI - movie pairs",
    size: "3 subjects, ~3,000 - 6,000 voxels after preprocessing",
    link: "https://libi.engin.umich.edu/",
  },
];

const datasets_columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <a href={record.link} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    ),
    width: 150,
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    width: 150,
  },
  {
    title: "Size",
    dataIndex: "size",
    key: "size",
  },
];

const competitions = [
  {
    key: "1",
    name: "Algonauts Challenge",
    description:
      "Predict fMRI responses given an image. First, second, third place prize is 1,500 Euros",
    link: "http://algonauts.csail.mit.edu/",
  },
  {
    key: "2",
    name: "Grand Challenge",
    description: "A whole directory of ML competitions in biomedical imaging",
    link: "https://grand-challenge.org/",
  },
  {
    key: "3",
    name: "Kaggle",
    description: "All sorts of deep learning competitions",
    link: "https://www.kaggle.com/competitions",
  },
];

const competitions_columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <a href={record.link} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    ),
    width: 150,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
];

const paperTopics = [
  "Image reconstruction",
  "Reconstruction in other modalities",
  "Diffusion models",
  "Transformers",
  "Datasets",
];
let papers = [
  {
    key: 11,
    paper: "Decoding the visual and subjective contents of the human brain",
    contribution:
      "Linear regression to predict which out of N images the subject saw",
    link: "https://www.nature.com/articles/nn14444",
  },
  {
    key: 12,
    paper:
      "Neural Encoding and Decoding with Deep Learning for Dynamic Natural Vision ",
    contribution:
      "Used CNNs to predict classes from images. One of the first to directly reconstruct an image from fMRI data.",
    link: "https://academic.oup.com/cercor/article/28/12/4136/4560155",
  },
  {
    key: 13,
    paper:
      "From voxels to pixels and back: Self-supervision in natural-image reconstruction from fMRI",
    contribution:
      "Introduced self-supervised learning to fMRI data. Training on unlabelled fmri-image pairs. Use encoder (image -> fmri) and decoder (fmri -> image) components.",
    link: "https://arxiv.org/abs/1907.02431",
  },
  {
    key: 14,
    paper:
      "Mind-VIS: Seeing Beyond the Brain: Conditional Diffusion Model with Sparse Masked Modeling for Vision Decoding",
    contribution:
      "Used attention autoencoder to learn latent space for fMRIs. Used conditioned stable diffusion model for the first time",
    link: "https://mind-vis.github.io",
  },
  {
    key: 15,
    paper:
      "High-resolution image reconstruction with latent diffusion models from human brain activity",
    contribution:
      "Directly used MLPs on NSD dataset, with no pretraining. Use early visual cortext to get spacial representation, noise added to get gaussian noise starting image. Use higher (ventral) visual cortext to get semantic information.",
    link: "https://www.biorxiv.org/content/10.1101/2022.11.18.517004v2.full.pdf",
  },
  {
    key: 16,
    paper:
      "MindDiffuser: Controlled Image Reconstruction from Human Brain Activity with Semantic and Structural Diffusion",
    contribution:
      "Used contrastive loss with CLIP to make fMRI embedding map better to the cross attention heads of stable diffusion UNet.",
    link: "https://arxiv.org/pdf/2303.14139.pdf",
  },
  {
    key: 17,
    paper:
      "Sharing deep generative representation for perceived image reconstruction from human brain activity",
    contribution:
      "Using covariance matrix to learn how voxels are connected together. Used low rank assumption to reduce noise and complexity",
    link: "https://arxiv.org/pdf/2303.14139.pdf",
  },
  {
    key: 18,
    paper:
      "Reconstructing the Mind’s Eye: fMRI-to-Image with Contrastive Learning and Diffusion Priors",
    contribution:
      "Using low-level + high-level generation with img to img diffusion. Fancier contrastive loss function, using hard+soft contrastive loss, switching 30% of the way through training.",
    link: "https://arxiv.org/abs/2305.18274",
  },
  {
    key: 19,
    paper: "MindReader: Reconstructing complex images from brain activities",
    contribution:
      'Increasing the signals in "bodies" and "words" ROIs in NSD dataset elevates these concepts in images. FMRI signals contain almost as much high level image info (90%) as CLIP embeddings.',
    link: "https://openreview.net/pdf?id=pHdiaqgh_nf",
  },
  {
    key: 21,
    paper:
      "DreamDiffusion: Generating High-Quality Images from Brain EEG Signals",
    contribution:
      "2 stage encoder - generator shows that images can be reconstructed from EEG signals.",
    link: "https://huggingface.co/papers/2306.16934",
  },
  {
    key: 22,
    paper: "Mental image reconstruction from human brain activity",
    contribution:
      "One of the first papers to try to reconstruct images from mental imagery.",
    link: "https://www.biorxiv.org/content/10.1101/2023.01.22.525062v2.full.pdf",
  },
  {
    key: 23,
    paper:
      "Cinematic Mindscapes: High-quality Video Recon- struction from Brain Activity via Progressive Learning",
    contribution:
      "First to use diffusion models to do video reconstruction. Used fMRI - image windows to deal with hemodynamic response and video frames.",
    link: "https://arxiv.org/abs/2305.11675",
  },
  {
    key: 31,
    paper: "LoRA: Low-Rank Adaptation of Large Language Models",
    contribution:
      "Instead of finetuning all the weights in an LLM, fine tune weights you stack on top. Use low rank matrices for speed",
    link: "https://arxiv.org/pdf/2106.09685.pdf",
  },
  {
    key: 32,
    paper: "Classifier-Free Diffusion Guidance",
    contribution:
      "Jointly train a conditioned and unconditioned diffusion model, to do away with needing a classifier.",
    link: "https://openreview.net/pdf?id=qw8AKxfYbI",
  },
  {
    key: 33,
    paper:
      "CLIP: Learning Transferable Visual Models From Natural Language Supervision",
    contribution:
      "zero-shot learning of image-caption pairs by comparing image and text embeddings and training the encoders to map to the same latent space",
    link: "https://arxiv.org/abs/2103.000200",
  },
  {
    key: 41,
    paper:
      "MEGABYTE: Predicting Million-byte Sequences with Multiscale Transformers",
    contribution:
      "Enabling million count of tokens in transformers. Using two layers of transformers.",
    link: "https://arxiv.org/abs/2305.07185",
  },
  {
    key: 42,
    paper:
      "Brain encoding models based on multimodal transformers can transfer across language and vision",
    contribution:
      "Transfomer representations of fMRIs work across diffrent modalities. You can take an encoding model for image latents and use it on text latents",
    link: "https://arxiv.org/pdf/2305.12248.pdf",
  },
  {
    key: 43,
    paper: "Self-Supervised Transformers for fMRI representation",
    contribution:
      "Some strategies on preprocessing: ignoring 80% of voxels that are close to 0. Exploring global normalization or per-voxel normalization across time domain",
    link: "https://arxiv.org/abs/2112.05761",
  },
  {
    key: 44,
    paper: "Swin Transformer V2: Scaling Up Capacity and Resolution",
    contribution:
      "A vision transformer that uses a multitude of different patch sizes to get high and low level information about images. SOTA performance.",
    link: "https://arxiv.org/abs/2111.09883",
  },
  {
    key: 51,
    paper:
      "NSD: A massive 7T fMRI dataset to bridge cognitive neuroscience and artificial intelligence",
    contribution:
      "Eight participants × 9,000 unique images + 1,000 shared images = 73,000 images, 1mm resolution. Shoed spatial correlation in TSNE of aVTC and pVTC",
    link: "https://naturalscenesdataset.org",
  },
];

papers = papers.map((paper) => {
  const index = Math.floor(paper.key / 10) - 1;
  const topic = paperTopics[index];

  return {
    ...paper,
    topic,
  };
});

const papers_columns = [
  {
    title: "Topic",
    dataIndex: "topic",
    key: "topic",
    width: 70,
    render: (text) => {
      let color;
      switch (text) {
        case "Image reconstruction":
          color = "blue";
          break;
        case "Reconstruction in other modalities":
          color = "green";
          break;
        case "Diffusion models":
          color = "orange";
          break;
        case "Transformers":
          color = "purple";
          break;
        case "Datasets":
          color = "red";
          break;
        default:
          color = "gray";
      }
      return (
        <Tag color={color} bordered={false}>
          {text}
        </Tag>
      );
    },
  },
  {
    title: "Paper",
    dataIndex: "paper",
    key: "paper",
    render: (text, record) => (
      <a href={record.link} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    ),
  },
  {
    title: "Contribution",
    dataIndex: "contribution",
    key: "contribution",
  },
];

export const DatasetTable = () => (
  <Table
    dataSource={datasets}
    columns={datasets_columns}
    rowClassName={() => ""}
  />
);

export const CompetitionTable = () => (
  <Table dataSource={competitions} columns={competitions_columns} />
);

export const PaperTable = () => (
  <Table dataSource={papers} columns={papers_columns} />
);
