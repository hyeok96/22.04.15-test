import { ChangeEvent } from "react";

export interface IBoardWritePresenterProps {
  onChangeInput?: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onClickCreateBoard: () => void;
  isEdit?: boolean;
  data?: any;
  onClickUpdateBoard: () => void;
  images?: any;
  onChangeImages?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickCancle: () => void;
  setImages: any;
  setImagesUpdate?: any;
}

export interface IBoardWriteContainerProps {
  isEdit: boolean;
  data?: any;
}
