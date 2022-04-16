import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../common/types/generated/types";
import { FETCH_BOARD } from "../boardQuery";
import BoardDetailPresenterPage from "./BoardDetail.presenter";

export default function BoardDetailContainerPage() {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.id) },
    }
  );

  const onClickMoveUpdatePage = () => {
    router.push(`/boards/${router.query.id}/edit`);
  };

  const onClickMoveDeltePage = () => {
    router.push(`/boards/${router.query.id}/delete`);
  };

  const onClickMoveListPage = () => {
    router.push(`/boards/`);
  };
  return (
    <BoardDetailPresenterPage
      data={data}
      onClickMoveUpdatePage={onClickMoveUpdatePage}
      onClickMoveDeltePage={onClickMoveDeltePage}
      onClickMoveListPage={onClickMoveListPage}
    />
  );
}
