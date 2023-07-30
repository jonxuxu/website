import type { AppProps } from 'next/app';

import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { ConfigProvider, theme, Button, Card, App } from 'antd';
import { createGlobalStyle } from 'styled-components'

import {GlobalLayout} from '../components/layout';
// import theme from '../styles/themeConfig';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

function AppPage({ Component, pageProps }: AppProps) {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = () => {
    setIsDarkMode((previousValue) => !previousValue);
  };

  return(
  <>
    <GlobalStyle />
    <ConfigProvider
    theme={{
      algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
    }}>
      <App>
        <GlobalLayout>
          <Component {...pageProps} />
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
  )
};


export default AppPage;