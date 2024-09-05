import PageBody from "./PageBody";
import PageFooter from "./footer/PageFooter";
import PageHeader from "./header/PageHeader";
import ScrollContainer from "../scroll/ScrollContainer";

export default function PageFrameContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main id="pageFrameContainer" className="page-frame-container">
      <ScrollContainer>
        <PageHeader />
        <PageBody>{children}</PageBody>
        <PageFooter />
      </ScrollContainer>
    </main>
  );
}
