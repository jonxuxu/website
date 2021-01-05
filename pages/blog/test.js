import MDXDocument, {
  metadata,
} from "../../components/blog/2020-01-03-takeaways.mdx";

import { Container } from "../../components/layout";

const Test = () => {
  const center = (
    <div style={{ padding: 20 }}>
      <MDXDocument />
    </div>
  );
  return <Container center={center} />;
};

export default Test;
