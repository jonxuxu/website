import React from "react";
// import type { AppProps } from "next/app";

import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";

import { ConfigProvider, App, Typography, Image, Divider } from "antd";
import { createGlobalStyle } from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import { BlockQuote } from "../components/mdx";
import { GlobalLayout } from "../components/layout";

// https://github.com/muzzamilr/design-tokens-workshop?ref=blog.carbonteq.com
import * as lightTheme from "../styles/ant-light.json";
import * as darkTheme from "../styles/ant-dark.json";

// import { type ImageProps } from "rc-image";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: #F5F3EE;
    color: #2A2A26;
  }

  h1, h2, h3, h4, h5, h6,
  .ant-typography h1,
  .ant-typography h2,
  .ant-typography h3,
  .ant-typography h4,
  div.ant-typography,
  .ant-typography {
    font-family: 'Cormorant Garamond', Georgia, serif !important;
    letter-spacing: 0.01em;
  }

  h1.ant-typography, .ant-typography h1 {
    font-weight: 400 !important;
    font-size: 2.6rem !important;
  }

  h2.ant-typography, .ant-typography h2 {
    font-weight: 400 !important;
  }

  a {
    color: #2A2A26;
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-color: rgba(42,42,38,0.3);
  }

  a:hover {
    color: #6B6355;
    text-decoration-color: #6B6355;
  }
`;

// const components: any = {
const components = {
  h1: Typography.Title,
  // img: (props: ImageProps) => (
  img: (props) => (
    <div style={{ textAlign: "center" }}>
      <Image {...props} style={{ maxWidth: "500px", height: "auto" }} />
    </div>
  ),
  hr: Divider,
  // code: CodeBlock,
  blockquote: BlockQuote,
};

// function AppPage({ Component, pageProps }: AppProps) {
function AppPage({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = () => {
    setIsDarkMode((previousValue) => !previousValue);
  };

  return (
    <>
      <GlobalStyle />
      <ConfigProvider
        theme={{
          token: isDarkMode ? darkTheme : lightTheme,
        }}
      >
        <App>
          <GlobalLayout>
            <MDXProvider components={components}>
              <Component {...pageProps} />
            </MDXProvider>
            {/* <Card style={{ width: "max-content" }}>
              <Button onClick={handleClick}>
                Change Theme to {isDarkMode ? "Light" : "Dark"}
              </Button>
            </Card> */}
          </GlobalLayout>
        </App>
      </ConfigProvider>
      <Analytics />
    </>
  );
}

export default AppPage;
