import { useEffect } from "react";
import { useRouter } from "next/router";
import { Typography, Image, Divider } from "antd";
import { MDXProvider } from "@mdx-js/react";
import * as Fathom from "fathom-client";

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
  const router = useRouter();

  useEffect(() => {
    // Initialize Fathom when the app loads
    // Example: yourdomain.com
    //  - Do not include https://
    //  - This must be an exact match of your domain.
    //  - If you're using www. for your domain, make sure you include that here.
    Fathom.load("EOGCMSMH", {
      includedDomains: ["jonathanxu.com"],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, []);

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
