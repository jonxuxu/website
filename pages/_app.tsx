import type { AppProps } from "next/app";

import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";

import {
  ConfigProvider,
  theme,
  Button,
  Card,
  App,
  Typography,
  Image,
  Divider,
} from "antd";
import { createGlobalStyle } from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import { BlockQuote } from "../components/mdx";
import { GlobalLayout } from "../components/layout";
// import theme from '../styles/themeConfig';

import { type ImageProps } from "rc-image";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const components = {
  h1: Typography.Title,
  img: (props: ImageProps) => (
    <center>
      <Image {...props} />
    </center>
  ),
  hr: Divider,
  // code: CodeBlock,
  blockquote: BlockQuote,
};

function AppPage({ Component, pageProps }: AppProps) {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = () => {
    setIsDarkMode((previousValue) => !previousValue);
  };

  return (
    <>
      <GlobalStyle />
      <ConfigProvider
        theme={{
          algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
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
