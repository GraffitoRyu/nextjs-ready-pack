/** @type {import('next').NextConfig} */

import path from "path";

const root = path.dirname(new URL(import.meta.url).pathname);

// const externalImageDomain = {
//   protocol: process.env.EXTERNAL_IMAGE_DOMAIN.split("://")[0],
//   hostname: process.env.EXTERNAL_IMAGE_DOMAIN.split("://")[1].split(":")[0],
//   port: process.env.EXTERNAL_IMAGE_DOMAIN.split(":")[2],
// };

const nextConfig = {
  // 리액트 엄격모드
  reactStrictMode: true,
  // next/font를 사용하지 않아 비활성화 함
  // optimizeFonts: false,
  // scss 컴파일 옵션
  sassOptions: {
    includesPaths: [path.join(root, "styles")],
  },
  // styled-components 사용 옵션
  compiler: {
    styledComponents: true,
  },
  // 외부 이미지 접근 설정
  // images: {
  //   remotePatterns: [
  //     { ...externalImageDomain, pathname: "/something/image/**" },
  //   ],
  // },
  async headers() {
    return [
      {
        source: "/manifest.webmanifest",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, immutable",
          },
        ],
      },
    ];
  },
  // svg 컴포넌트 변환을 위한 설정
  webpack(config) {
    // Configures webpack to handle SVG files with SVGR. SVGR optimizes and transforms SVG files
    // into React components. See https://react-svgr.com/docs/next/

    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg"),
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      },
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
