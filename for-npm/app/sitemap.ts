import { MetadataRoute } from "next";
import { site } from "@/data/metadata";

/**
 * 사이트맵 생성
 * @sitemap
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.domain,
      lastModified: new Date(),
      priority: 1,
    },
  ];
}
