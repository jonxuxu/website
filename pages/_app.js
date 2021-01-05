import { Typography, Image, Divider } from "antd";
import { MDXProvider } from "@mdx-js/react";

import { Container } from "../components/layout";

const components = {
  h1: Typography.Title,
  img: Image,
  hr: Divider,
};

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      {pageProps.fullscreen ? (
        <Component {...pageProps} />
      ) : (
        <Container center={<Component {...pageProps} />} />
      )}
    </MDXProvider>
  );
}

export default MyApp;
