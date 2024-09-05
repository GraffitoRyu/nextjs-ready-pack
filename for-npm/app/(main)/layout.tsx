export { metadata, viewport } from "@/data/metadata";

import PageFrameContainer from "@/components/pageFrame/Container";
import StyledComponentsRegistry from "@/components/root/lib/StyledRegistry";
import JotaiProvider from "@/components/root/provider/Jotai";
import ReactQueryProvider from "@/components/root/provider/ReactQuery";
import { sans } from "@/styles/font";
import "@/styles/scss/globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${sans.variable}`}>
        <ReactQueryProvider>
          <JotaiProvider>
            <StyledComponentsRegistry>
              <PageFrameContainer>{children}</PageFrameContainer>
            </StyledComponentsRegistry>
          </JotaiProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
