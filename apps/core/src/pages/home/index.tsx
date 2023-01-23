import { uiSliceActions, useAppDispatch } from "@zuri/utilities";

export default function HomePage() {
  const dispatch = useAppDispatch();
  dispatch(uiSliceActions.setSidebarVisibility(false));

  return <div>home page</div>;
}
