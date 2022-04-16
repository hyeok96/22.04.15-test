import { ReactNode } from "react";

export interface ILayoutProps {
  children?: ReactNode;
}

export interface ILayoutsideBarProps {
  onClickMoveList?: () => void;
  onClickMoveWriter?: () => void;
}
