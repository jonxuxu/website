// next.config.mjs
import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";
import rehypeImgSize from "rehype-img-size";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  compiler: {
    styledComponents: true,
  },
  experimental: {
    appDir: false,
  },
  // The old /thoughts routes live at /blog now; keep existing links working.
  async redirects() {
    return [
      {
        source: "/thoughts",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/thoughts/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [remarkGfm],
    // Reads each local image off disk at build time and stamps its real
    // width/height onto the tag, so the browser can reserve space.
    rehypePlugins: [[rehypeImgSize, { dir: "public" }]],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
});

export default withMDX(nextConfig);
