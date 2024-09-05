import { MetadataRoute } from "next";
import { site } from "@/data/metadata";

/**
 * PWA 활성화를 위한 manifest
 * @manifest
 */
export default function manifest(): MetadataRoute.Manifest {
  const SERVICE_NAME = "서비스 이름";

  return {
    name: SERVICE_NAME, // 앱 이름 (설치 시 앱 실행 아이콘 이름 표현)
    short_name: SERVICE_NAME,
    description: site.desc.ko,
    lang: "ko-KR", // 언어 설정
    start_url: site.domain, // 앱 시작 URL
    scope: site.domain, // 앱 접근 URL의 시작 범위
    display: "fullscreen", // 웹 앱 표현
    background_color: "#20242B",
    theme_color: "#20242B",
    // 앱 favicon 및 앱 아이콘
    icons: [
      // favicon
      {
        src: "/favicon/favicon.ico",
        sizes: "48x48",
      },
    ],
    // 앱 카테고리
    categories: ["utilities", "productivity"],
    // 앱 화면 가로/세로 방향 기준
    orientation: "portrait-primary", // 세로 방향
    prefer_related_applications: false, // 웹 앱 대신 네이티브 앱으로 설치 유도 옵션
  };
}
