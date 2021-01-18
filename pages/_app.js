import { Typography, Image, Divider } from "antd";
import { MDXProvider } from "@mdx-js/react";

import { Container } from "../components/layout";
import CodeBlock from "../components/CodeBlock";

const components = {
  h1: Typography.Title,
  img: Image,
  hr: Divider,
  code: CodeBlock,
};

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <MDXProvider components={components}>
        {pageProps.fullscreen ? (
          <Component {...pageProps} />
        ) : (
          <Container center={<Component {...pageProps} />} />
        )}
      </MDXProvider>
    </div>
  );
}

export default MyApp;
