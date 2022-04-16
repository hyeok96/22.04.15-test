import * as s from "./BoardDetail.styled";
import { IBoardDetailPresenterProps } from "./BoardDetail.type";

export default function BoardDetailPresenterPage(
  props: IBoardDetailPresenterProps
) {
  console.log(props.data);
  return (
    <s.MainBody>
      <s.Wraper>
        <s.MainTitle>
          <s.TitleName>{props.data?.fetchBoard.title}</s.TitleName>
        </s.MainTitle>
        <s.Body>
          <s.BodyInner>
            {props.data?.fetchBoard.images.map((el: any) => (
              <>
                <s.Img src={`https://storage.googleapis.com/${el}`} />
              </>
            ))}
          </s.BodyInner>
        </s.Body>
        <s.BodyInner>
          <s.BodyInnerTitle>
            <s.WriterLogo>
              <img src="/board/test.png" />
            </s.WriterLogo>
            <s.Writer>{props.data?.fetchBoard.writer}</s.Writer>
          </s.BodyInnerTitle>
          <s.TextBox>{props.data?.fetchBoard.contents}</s.TextBox>
        </s.BodyInner>
      </s.Wraper>
      <s.BtnBox>
        <s.Btn onClick={props.onClickMoveListPage}>글 목록</s.Btn>
        <s.UpdateBtn onClick={props.onClickMoveUpdatePage}>수정</s.UpdateBtn>
        <s.CancelBtn onClick={props.onClickMoveDeltePage}>삭제</s.CancelBtn>
      </s.BtnBox>
    </s.MainBody>
  );
}
