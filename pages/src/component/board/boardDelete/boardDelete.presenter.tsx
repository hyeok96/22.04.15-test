import * as s from "./boardDelete.style";
import { IBoardDeletePresenterProps } from "./boardDelete.type";

export default function BoardDeletePresrnterPage(
  props: IBoardDeletePresenterProps
) {
  return (
    <s.MainBody>
      <s.Wraper>
        <s.MainTitle>
          <s.TitleName>게시물 삭제</s.TitleName>
        </s.MainTitle>
        <s.Body>
          <s.BodyInner>
            <s.Pw>비밀번호</s.Pw>
            <s.PwInput type="password" />
            <div></div>
          </s.BodyInner>
        </s.Body>
      </s.Wraper>
      <s.BtnBox>
        <s.Btn onClick={props.onClickDelete}>삭제</s.Btn>
        <s.CancelBtn onClick={props.onClickCancle}>취소</s.CancelBtn>
      </s.BtnBox>
    </s.MainBody>
  );
}
