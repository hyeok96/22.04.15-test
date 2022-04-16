import { useRef, ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import * as s from "./image.style";
import { IImagesProps } from "./image.type";
import { UPLOADFILE } from "../../component/board/boardQuery";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../common/types/generated/types";
import { Modal } from "antd";

export default function ImagePage(props: IImagesProps) {
  const imgRef = useRef<HTMLInputElement>(null);
  const imgRef2 = useRef<HTMLInputElement>(null);

  const onClickMoveImg = () => {
    imgRef.current?.click();
  };

  const onClickMoveImg2 = () => {
    imgRef2.current?.click();
  };

  const [upoadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOADFILE);

  const onChangeUpdateImg = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file);
    try {
      const result = await upoadFile({
        variables: { file },
      });

      props.setImages((prev: any) => [
        ...prev,
        ...props.data?.fetchBoard?.images,
        result.data?.uploadFile.url,
      ]);
    } catch (error: any) {
      Modal.error({
        content: `${error.message}`,
      });
    }
  };

  return (
    <s.Wrapper>
      <s.Box onClick={props.isEdit ? onClickMoveImg2 : onClickMoveImg}>
        <s.Plus src="/board/img.png" />
      </s.Box>
      <input
        type="file"
        style={{ display: "none" }}
        ref={imgRef}
        onChange={props.onChangeImages}
      />
      <input
        type="file"
        style={{ display: "none" }}
        ref={imgRef2}
        onChange={onChangeUpdateImg}
      />
      <s.Div>
        {props.isEdit &&
          props.data?.fetchBoard.images.map((el: any) => (
            <>
              <s.ImageBox>
                <s.Img src={`https://storage.googleapis.com/${el}`} />
              </s.ImageBox>
            </>
          ))}
        {props.images?.map((el: any) => (
          <>
            <s.ImageBox>
              <s.Img src={`https://storage.googleapis.com/${el}`} />
            </s.ImageBox>
          </>
        ))}
      </s.Div>
    </s.Wrapper>
  );
}
