import { MouseEvent } from "react";

export interface IBoardListPresenterProps {
  data?: any;
  fetchMore?: any;
  onClickMoveDetailPage?: (e: MouseEvent<HTMLDivElement>) => void;
}
