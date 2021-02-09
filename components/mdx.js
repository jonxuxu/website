import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Typography } from "antd";

const { Title } = Typography;

const CodeBlock = ({ children, className, live }) => {
  const language = className.replace(/language-/, "");
  if (live) {
    return (
      <div style={{ marginTop: "40px" }}>
        <LiveProvider code={children}>
          <LivePreview />
          <LiveEditor />
          <LiveError />
        </LiveProvider>
      </div>
    );
  }
  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: "20px" }}>
          {tokens.map(
            (line, i) =>
              tokens[i + 1] && (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              )
          )}
        </pre>
      )}
    </Highlight>
  );
};

const BlockQuote = ({ children }) => {
  return (
    <Title
      level={5}
      type="secondary"
      style={{ borderLeft: "4px solid rgba(0, 0, 0, 0.45)", paddingLeft: 15 }}
    >
      {children}
    </Title>
  );
};

export { CodeBlock, BlockQuote };
