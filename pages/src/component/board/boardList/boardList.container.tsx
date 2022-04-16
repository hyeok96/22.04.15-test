import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../common/types/generated/types";
import { FETCH_BOARDS } from "../boardQuery";
import BoardListPresenterPage from "./boardList.presenter";
import { MouseEvent } from "react";

export default function BoardListContainerPage() {
  const router = useRouter();

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickMoveDetailPage = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/${e.currentTarget.id}`);
  };

  return (
    <BoardListPresenterPage
      data={data}
      fetchMore={fetchMore}
      onClickMoveDetailPage={onClickMoveDetailPage}
    />
  );
}
