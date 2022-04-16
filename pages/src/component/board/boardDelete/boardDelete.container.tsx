import { useMutation } from "@apollo/client";
import { DELETE_BOARD } from "../boardQuery";
import BoardDeletePresrnterPage from "./boardDelete.presenter";
import {
  IMutation,
  IMutationDeleteBoardArgs,
} from "../../../common/types/generated/types";
import { Modal } from "antd";
import { useRouter } from "next/router";

export default function BoardDeleteContanierPage() {
  const router = useRouter();

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const onClickDelete = () => {
    deleteBoard({
      variables: { boardId: String(router.query.id) },
    });
    Modal.success({
      content: "게시글이 삭제되었습니다.",
    });
    router.push("/boards");
  };

  const onClickCancle = () => {
    router.push(`/boards${router.query.id}`);
  };

  return (
    <BoardDeletePresrnterPage
      onClickDelete={onClickDelete}
      onClickCancle={onClickCancle}
    />
  );
}
