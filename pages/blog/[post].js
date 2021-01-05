import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import { Container } from "../../components/layout";

var postUrl = "2020-01-03-takeaways";
const MDXDocument = dynamic(() =>
  import(`../../components/blog/${postUrl}.mdx`)
);

const Post = async () => {
  const router = useRouter();
  if (router.asPath === router.route) {
    return <div></div>; // router.query.recipe is not yet deifned
  }
  postUrl = router.query.post;

  const center = (
    <div style={{ padding: 20 }}>
      <MDXDocument />
    </div>
  );

  return <Container center={center} />;
};

export default Post;
