import LayoutSidebarContainerPage from "./sidebar/layout.sidebar.container";
import { ILayoutProps } from "./sidebar/layout.type";
import styled from "@emotion/styled";
import LayoutHeaderContainerPage from "./header/layout.header.container";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function LayoutPage(props: ILayoutProps) {
  const router = useRouter();
  const HiddenLayout = [
    "/boards/writer",
    `/boards/${router.query.id}/edit`,
    `/boards/${router.query.id}/delete`,
  ];

  const isHidden = HiddenLayout.includes(router.asPath);

  return (
    <Wrapper>
      <LayoutSidebarContainerPage />
      <InnerWrapper>
        {!isHidden && <LayoutHeaderContainerPage />}
        {props.children}
      </InnerWrapper>
    </Wrapper>
  );
}
