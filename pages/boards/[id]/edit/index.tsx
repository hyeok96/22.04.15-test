import { useQuery } from "@apollo/client";
import { FETCH_BOARD } from "../../../src/component/board/boardQuery";
import BoardWriterContainerPage from "../../../src/component/board/boardWriter/boardWriter.container";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../src/common/types/generated/types";
import { useRouter } from "next/router";

export default function BoardEditPage() {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.id) },
    }
  );

  return <BoardWriterContainerPage isEdit={true} data={data} />;
}
