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
