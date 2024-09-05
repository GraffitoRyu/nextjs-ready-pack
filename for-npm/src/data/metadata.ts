import type { Metadata, Viewport } from "next";
import type { Icons } from "next/dist/lib/metadata/types/metadata-types";
import type { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

export const site: MetadataSEOSiteType = {
  title: { ko: "서비스 타이틀", en: "Service Title" },
  desc: { ko: "서비스 설명", en: "Service Description" },
  domain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN || "http://localhost:3000",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  themeColor: [
    { color: "#20242B" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

const OPEN_GRAPH: OpenGraph = {
  type: "website",
  locale: "ko-KR",
  url: site.domain,
  title: site.title.ko,
  description: site.desc.ko,
  images: [
    {
      url: `${site.domain}/img/meta/open_graph.jpg`,
      alt: site.desc.ko,
    },
  ],
};

const FAVICON: Icons = {
  icon: [{ url: "/favicon/favicon.ico" }],
  shortcut: [{ url: "/favicon/favicon.ico" }],
};

const SEO: Metadata = {
  title: {
    default: site.title.ko,
    template: `%s | ${site.title.ko}`,
  },
  description: site.desc.ko,
  keywords: ["검색키워드1", "검색키워드2", "검색키워드3"],
  metadataBase: new URL(site.domain),
  alternates: {
    canonical: "/",
    languages: { "en-US": "/" },
  },
};

export const metadata: Metadata = {
  ...SEO,
  icons: FAVICON,
  openGraph: OPEN_GRAPH,
  formatDetection: {
    address: false,
    telephone: false,
  },
};
