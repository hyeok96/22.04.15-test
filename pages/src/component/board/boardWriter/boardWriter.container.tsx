import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { CREATE_BOARD, UPDATE_BOARD, UPLOADFILE } from "../boardQuery";
import BoardWriterPresenterPage from "./boardWriter.presenter";
import { Modal } from "antd";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IMutationUploadFileArgs,
} from "../../../common/types/generated/types";
import { useRouter } from "next/router";
import { IBoardWriteContainerProps } from "./boardWriter.type";

export default function BoardWriterContainerPage(
  props: IBoardWriteContainerProps
) {
  const router = useRouter();

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const [upoadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOADFILE);

  const [input, setInput] = useState({
    title: "",
    contents: "",
    writer: "",
    password: "",
  });

  const [images, setImages] = useState<any | undefined>([]);

  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const onChangeInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onChangeImages = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    try {
      const result = await upoadFile({
        variables: { file },
      });

      setImages((prev: any) => [...prev, result.data?.uploadFile.url]);
    } catch (error: any) {
      Modal.error({
        content: `${error.message}`,
      });
    }
  };

  const onClickCreateBoard = async () => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            ...input,
            images,
          },
        },
      });
      router.push(`/boards/${result.data?.createBoard._id}`);
    } catch (error: any) {
      Modal.error({
        title: "This is an error message",
        content: `${error.message}`,
      });
    }
  };

  const onClickUpdateBoard = async () => {
    const myVariables: IMutationUpdateBoardArgs = {
      boardId: String(router.query.id),
      password: input.password,
      updateBoardInput: {},
    };

    console.log(myVariables);

    if (input.title !== "") myVariables.updateBoardInput.title = input.title;

    if (input.contents !== "")
      myVariables.updateBoardInput.contents = input.contents;

    if (images !== Array(0)) myVariables.updateBoardInput.images = images;

    try {
      const result = await updateBoard({
        variables: myVariables,
      });

      console.log(result);
      router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error: any) {
      Modal.error({
        title: "This is an error message",
        content: `${error.message}`,
      });
    }
  };

  const onClickCancle = () => {
    router.push("/boards");
  };

  return (
    <BoardWriterPresenterPage
      onChangeInput={onChangeInput}
      onClickCreateBoard={onClickCreateBoard}
      isEdit={props.isEdit}
      data={props.data}
      onClickUpdateBoard={onClickUpdateBoard}
      images={images}
      onChangeImages={onChangeImages}
      onClickCancle={onClickCancle}
      setImages={setImages}
    />
  );
}
