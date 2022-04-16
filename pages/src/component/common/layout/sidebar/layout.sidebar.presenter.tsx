import * as s from "./layout.style";
import { ILayoutsideBarProps } from "./layout.type";

export default function LayoutSidebarPresenterPage(props: ILayoutsideBarProps) {
  return (
    <s.wrapper>
      <s.Innerwrapper1>
        <s.NameLogoBx>
          <s.Logo>
            <img src="/Layout/Talker.png" />
          </s.Logo>
          <s.Name>TALKER</s.Name>
        </s.NameLogoBx>
      </s.Innerwrapper1>
      <s.Innerwrapper2>
        <s.ListBox onClick={props.onClickMoveList}>
          <s.ListLogo>
            <img src="/Layout/Union.png" />
          </s.ListLogo>
          <s.ListName>전체 글 보기</s.ListName>
        </s.ListBox>
        <s.ListBox onClick={props.onClickMoveWriter}>
          <s.ListLogo>
            <img src="/Layout/plus.png" />
          </s.ListLogo>
          <s.ListName>새 글 작성</s.ListName>
        </s.ListBox>
      </s.Innerwrapper2>
    </s.wrapper>
  );
}
