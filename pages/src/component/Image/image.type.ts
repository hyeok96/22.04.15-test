import { ChangeEvent } from "react";

export interface IImagesProps {
  images: any;
  onChangeImages?: (e: ChangeEvent<HTMLInputElement>) => void;
  data?: any;
  isEdit?: boolean;
  setImages?: any;
  setImagesUpdate?: any;
}
