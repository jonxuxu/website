import type { AppProps } from 'next/app';

import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { ConfigProvider, theme, Button, Card, App } from 'antd';
// import theme from '../styles/themeConfig';

function AppPage({ Component, pageProps }: AppProps) {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = () => {
    setIsDarkMode((previousValue) => !previousValue);
  };

  return(<>
    <ConfigProvider
    theme={{
      algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
    }}>
      <App>
        <Component {...pageProps} />
        <Card style={{ width: "max-content" }}>
          <Button onClick={handleClick}>
          Change Theme to {isDarkMode ? "Light" : "Dark"}
          </Button>
        </Card>
      </App>
    </ConfigProvider>
    <Analytics />
  </>
  )
};


export default AppPage;