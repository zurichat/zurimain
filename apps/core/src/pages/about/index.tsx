import { uiSliceActions, useAppDispatch } from "@zuri/utilities";

export default function AboutPage() {
  const dispatch = useAppDispatch();
  dispatch(uiSliceActions.setSidebarVisibility(false));

  return <div>about page</div>;
}
