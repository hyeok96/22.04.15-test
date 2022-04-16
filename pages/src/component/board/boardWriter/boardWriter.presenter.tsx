import ImagePage from "../../Image/image.presenter";
import * as s from "./boardWriter.style";
import { IBoardWritePresenterProps } from "./boardWriter.type";

export default function BoardWriterPresenterPage(
  props: IBoardWritePresenterProps
) {
  return (
    <s.MainBody>
      <s.Wraper>
        <s.MainTitle>
          <s.TitleName>
            {props.isEdit ? "게시물 수정" : "새 글 작성"}
          </s.TitleName>
        </s.MainTitle>
        <s.Body>
          <s.BodyInner>
            <s.BodyInnerTitle>제목</s.BodyInnerTitle>
            <s.BodyInnerInput
              onChange={props.onChangeInput}
              name="title"
              defaultValue={props.data?.fetchBoard.title}
            />
          </s.BodyInner>
          <s.BodyInner>
            <s.BodyInnerTitle>내용</s.BodyInnerTitle>
            <s.BodyInnerText
              onChange={props.onChangeInput}
              name="contents"
              defaultValue={props.data?.fetchBoard.contents}
            />
          </s.BodyInner>
          <s.BodyInner>
            <s.BodyInnerTitle>이미지</s.BodyInnerTitle>
            <ImagePage
              images={props.images}
              onChangeImages={props.onChangeImages}
              isEdit={props.isEdit}
              data={props.data}
              setImages={props.setImages}
            />
          </s.BodyInner>
          <s.BodyInner>
            <s.BodyInnerTitle style={{ fontSize: "14px" }}>
              작성자
            </s.BodyInnerTitle>
            <s.BodyInnerInput
              style={{ marginRight: "40px", width: "240px" }}
              onChange={props.onChangeInput}
              name="writer"
              value={props.data?.fetchBoard.writer}
              readOnly={props.isEdit && true}
              disabled={props.isEdit && true}
            />
            <s.BodyInnerTitle>비밀번호</s.BodyInnerTitle>
            <s.BodyInnerInput
              style={{ width: "240px" }}
              onChange={props.onChangeInput}
              name="password"
              type="password"
            />
          </s.BodyInner>
        </s.Body>
      </s.Wraper>
      <s.BtnBox>
        <s.Btn
          onClick={
            props.isEdit ? props.onClickUpdateBoard : props.onClickCreateBoard
          }
        >
          {props.isEdit ? "수정" : "등록"}
        </s.Btn>
        <s.CancelBtn onClick={props.onClickCancle}>취소</s.CancelBtn>
      </s.BtnBox>
    </s.MainBody>
  );
}
