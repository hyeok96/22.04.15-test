import * as s from "./boardList.style";
import { IBoardListPresenterProps } from "./boardList.type";
import InfiniteScroll from "react-infinite-scroller";

export default function BoardListPresenterPage(
  props: IBoardListPresenterProps
) {
  const loadMore = () => {
    if (!props.data) return;

    props.fetchMore({
      variables: {
        page: Math.ceil(props.data?.fetchBoards.length / 10) + 1,
      },
      updateQuery: (prev: any, { fetchMoreResult }: any) => {
        if (!fetchMoreResult?.fetchBoards) {
          return { fetchBoards: [...prev.fetchBoards] };
        }

        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult?.fetchBoards],
        };
      },
    });
  };

  return (
    <s.Wrapper>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={true}
        useWindow={false}
      >
        {props.data?.fetchBoards.map((el: any) => (
          <s.ListBox
            key={el._id}
            id={el._id}
            onClick={props.onClickMoveDetailPage}
          >
            <s.ListTitle>{el.title}</s.ListTitle>
            <s.ListDate>{el.createdAt.slice(0, 10)}</s.ListDate>
          </s.ListBox>
        ))}
      </InfiniteScroll>
    </s.Wrapper>
  );
}
