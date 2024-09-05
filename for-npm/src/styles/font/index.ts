import { Noto_Sans_KR } from "next/font/google";

export const sans = Noto_Sans_KR({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--sans-kr",
  display: "swap",
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Apple SD Gothic Neo",
    "Segoe UI",
    "Roboto",
    "Helvetica",
    "Helvetica Neue",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "맑은 고딕",
    "Malgun Gothic",
    "돋움",
    "dotum",
    "Oxygen",
    "Oxygen-Sans",
    "Ubuntu",
    "Cantarell",
    "sans-serif",
  ],
});
