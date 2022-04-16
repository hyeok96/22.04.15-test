import { useRouter } from "next/router";
import LayoutSidebarPresenterPage from "./layout.sidebar.presenter";

export default function LayoutSidebarContainerPage() {
  const router = useRouter();

  const onClickMoveWriter = () => {
    router.push("/boards/writer");
  };

  const onClickMoveList = () => {
    router.push("/boards");
  };
  return (
    <LayoutSidebarPresenterPage
      onClickMoveWriter={onClickMoveWriter}
      onClickMoveList={onClickMoveList}
    />
  );
}
