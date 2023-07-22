import { Typography, Image, Divider } from "antd";
import { MDXProvider } from "@mdx-js/react";
// import { Analytics } from '@vercel/analytics/react';

import { Container } from "../components/layout";
import { CodeBlock, BlockQuote } from "../components/mdx";

import "../styles/antd.less";

const components = {
  h1: Typography.Title,
  img: props => <center><Image {...props} /></center>,
  hr: Divider,
  code: CodeBlock,
  blockquote: BlockQuote,
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
      {/* <Analytics /> */}
    </div>
  );
}

export default MyApp;
