import type { AppProps } from 'next/app';

import { Analytics } from '@vercel/analytics/react';
import { ConfigProvider } from 'antd';
import theme from '../styles/themeConfig';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <ConfigProvider theme={theme}>
      <Component {...pageProps} />
    </ConfigProvider>
    <Analytics />
  </>
);

export default App;